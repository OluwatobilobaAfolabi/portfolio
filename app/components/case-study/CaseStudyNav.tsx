import Link from "next/link";
import {
  DIVIDER,
  DOCK,
  TOOL_ACTIVE,
  TOOL_DISABLED,
  TOOL_IDLE,
} from "../dock";
import ThemeToggle from "../ThemeToggle";

/*
 * The home page's tool dock, carried onto the case studies so every page shares
 * one navigation. Home and the Previous/Next pair are tools; Visit Project takes
 * the dock's selected fill; the dark-mode switch closes the bar. Below sm the
 * step labels collapse to their icons and Visit Project shortens to Visit.
 */
function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0"
    >
      {children}
    </svg>
  );
}

const Divider = () => <span aria-hidden className={DIVIDER} />;

function Step({
  href,
  label,
  direction,
}: {
  href?: string;
  label: string;
  direction: "previous" | "next";
}) {
  const icon = (
    <Icon>
      <path d={direction === "previous" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} />
    </Icon>
  );
  const content =
    direction === "previous" ? (
      <>
        {icon}
        <span className="hidden sm:inline">{label}</span>
      </>
    ) : (
      <>
        <span className="hidden sm:inline">{label}</span>
        {icon}
      </>
    );

  if (!href) {
    return (
      <span aria-disabled className={TOOL_DISABLED}>
        {content}
        <span className="sr-only">{label} (unavailable)</span>
      </span>
    );
  }
  return (
    <Link href={href} className={TOOL_IDLE} aria-label={label}>
      {content}
    </Link>
  );
}

export default function CaseStudyNav({
  previousHref,
  nextHref,
  projectHref = "#",
}: {
  /** Omit to render Previous in its disabled state. */
  previousHref?: string;
  nextHref?: string;
  projectHref?: string;
}) {
  return (
    <nav aria-label="Case study" className={DOCK}>
      <Link href="/" className={TOOL_IDLE} aria-label="Home">
        <Icon>
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
        </Icon>
        <span className="hidden sm:inline">Home</span>
      </Link>

      <Divider />

      <Step href={previousHref} label="Previous" direction="previous" />
      <Step href={nextHref} label="Next" direction="next" />

      <Divider />

      <a
        href={projectHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit project (opens in a new tab)"
        className={TOOL_ACTIVE}
      >
        <span className="sm:hidden">Visit</span>
        <span className="hidden sm:inline">Visit Project</span>
        <Icon>
          <path d="M7 17L17 7" />
          <path d="M8 7h9v9" />
        </Icon>
      </a>

      <Divider />

      <ThemeToggle />
    </nav>
  );
}
