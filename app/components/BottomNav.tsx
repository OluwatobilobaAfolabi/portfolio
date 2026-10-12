"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { DIVIDER, DOCK, TOOL_ACTIVE, TOOL_IDLE } from "./dock";
import ThemeToggle from "./ThemeToggle";

/*
 * The canvas's tool dock: navigation, then the dark-mode switch. Home or
 * Projects takes the selected fill depending on which part of the page is in
 * view.
 */
type Section = "top" | "projects";

/** Projects is current once its section reaches the upper 40% of the viewport. */
function currentSection(): Section {
  const projects = document.getElementById("projects");
  if (!projects) return "top";
  return projects.getBoundingClientRect().top <= window.innerHeight * 0.4
    ? "projects"
    : "top";
}

/**
 * Scroll to a section on every click. A plain hash link does nothing once the
 * URL already carries that hash, so a second click on Projects would be dead.
 */
function scrollToSection(
  event: React.MouseEvent<HTMLAnchorElement>,
  id: Section,
) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
  if (id === "top") window.scrollTo({ top: 0, behavior });
  else target.scrollIntoView({ behavior, block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export default function BottomNav() {
  const [active, setActive] = useState<Section>("top");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setActive(currentSection()));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav aria-label="Main" className={DOCK}>
      <Link
        href="#top"
        aria-label="Home"
        onClick={(event) => {
          scrollToSection(event, "top");
          setActive("top");
        }}
        aria-current={active === "top" ? "location" : undefined}
        className={active === "top" ? TOOL_ACTIVE : TOOL_IDLE}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className="shrink-0"
        >
          <path d="M4 3l14 7-6 2-2 6z" />
        </svg>
        <span className="hidden sm:inline">Home</span>
      </Link>

      <Link
        href="#projects"
        aria-label="Projects"
        onClick={(event) => {
          scrollToSection(event, "projects");
          setActive("projects");
        }}
        aria-current={active === "projects" ? "location" : undefined}
        className={active === "projects" ? TOOL_ACTIVE : TOOL_IDLE}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className="shrink-0"
        >
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
        <span className="hidden sm:inline">Projects</span>
      </Link>

      <span aria-hidden className={DIVIDER} />

      <a
        href="mailto:afolabitobi20@gmail.com"
        className={TOOL_IDLE}
        aria-label="Email Afolabi"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
          className="shrink-0"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
        <span className="hidden sm:inline">Email</span>
      </a>

      <span aria-hidden className={DIVIDER} />

      <ThemeToggle />
    </nav>
  );
}
