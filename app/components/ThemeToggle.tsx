"use client";

import { useEffect, useSyncExternalStore } from "react";

import { playSwitchClick } from "../lib/switchSound";

/*
 * The `.dark` class on <html> is the single source of truth — the blocking
 * script in the layout sets it before first paint, so the knob and icons are
 * already in the right position on the first frame. This subscribes to that
 * class rather than mirroring it into state, which also keeps the switch
 * correct if the theme is changed from anywhere else.
 *
 * It lives at the end of the bottom dock on every page, so it is styled for the
 * dock's dark bar in both themes.
 */
function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

const getSnapshot = () => document.documentElement.classList.contains("dark");
const getServerSnapshot = () => false;

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    // Follow the OS, but only until the visitor makes an explicit choice.
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("theme")) return;
      } catch {
        // Storage can throw in private mode; fall through and follow the OS.
      }
      document.documentElement.classList.toggle("dark", event.matches);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");

    playSwitchClick(next);

    // Mute hover transitions so the whole page changes in one frame.
    root.classList.add("theme-switching");
    root.classList.toggle("dark", next);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        root.classList.remove("theme-switching");
      });
    });
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // A rejected write just means the choice lasts for this page only.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title="Toggle dark mode"
      suppressHydrationWarning
      className="mx-1 flex h-8 w-[54px] shrink-0 items-center rounded-full bg-[#2a2d35] px-[3px] transition-colors hover:bg-[#363a44] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cv-select-fill"
    >
      <span className="relative flex size-[26px] translate-x-0 items-center justify-center rounded-full bg-white transition-transform duration-200 ease-out dark:translate-x-[22px]">
        {/* Sun — light mode */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="absolute size-[15px] text-[#15171c] opacity-100 transition-opacity duration-200 dark:opacity-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        {/* Moon — dark mode */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="absolute size-[15px] text-[#15171c] opacity-0 transition-opacity duration-200 dark:opacity-100"
          fill="currentColor"
        >
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5Z" />
        </svg>
      </span>
    </button>
  );
}
