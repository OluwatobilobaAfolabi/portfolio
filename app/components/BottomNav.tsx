import Link from "next/link";

/*
 * The canvas's tool dock. The dark-mode control stays in the top-right switch,
 * so this holds navigation only.
 */
const TOOL =
  "flex h-11 items-center gap-2 rounded-[10px] px-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#2a2d35]";

export default function BottomNav() {
  return (
    <nav
      aria-label="Main"
      className="fixed bottom-6 left-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 rounded-[14px] bg-[#15171c] p-1.5 shadow-[0_16px_40px_rgba(21,23,28,0.25)]"
    >
      <Link href="#top" className={`${TOOL} bg-cv-select-fill hover:opacity-90`}>
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
        Home
      </Link>

      <Link href="#projects" className={TOOL}>
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
        Projects
      </Link>

      <span aria-hidden className="mx-1 block h-6 w-px bg-[#3a3f4a]" />

      <a
        href="mailto:afolabitobi20@gmail.com"
        className={TOOL}
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
    </nav>
  );
}
