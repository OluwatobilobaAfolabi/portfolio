import type { ReactNode } from "react";

/* Chrome for the "Live File" hero: the panels that frame the artboard.
   Decorative on desktop only — they're hidden below lg, where the artboard
   itself becomes the whole page. */

function PanelShell({
  title,
  aside,
  children,
}: {
  title: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-solid border-cv-line bg-cv-panel text-[13px] shadow-[0_8px_24px_rgba(21,23,28,0.06)]">
      <div className="flex items-center justify-between gap-2 border-b border-solid border-cv-line-soft px-4 py-3.5">
        {title}
        {aside}
      </div>
      {children}
    </div>
  );
}

const LAYERS = [
  { label: "Headline", icon: "type" },
  { label: "Portrait.jpg", icon: "image" },
  { label: "Web", icon: "desktop" },
  { label: "Mobile", icon: "phone" },
  { label: "AI", icon: "spark" },
  { label: "Data", icon: "chart" },
] as const;

function LayerIcon({ name }: { name: (typeof LAYERS)[number]["icon"] }) {
  const common = {
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    "aria-hidden": true,
  } as const;
  switch (name) {
    case "type":
      return (
        <svg {...common}>
          <path d="M4 7V4h16v3M9 20h6M12 4v16" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M21 16l-5-5-8 8" />
        </svg>
      );
    case "desktop":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <path d="M8 21h8" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M3 3v18h18M7 15l4-4 3 3 5-6" />
        </svg>
      );
  }
}

export function LayersPanel() {
  return (
    <PanelShell
      title={
        <div className="flex items-center gap-2.5">
          <span className="flex size-[26px] items-center justify-center rounded-[7px] bg-cv-ink font-cv-serif text-[17px] italic text-cv-panel">
            A
          </span>
          <span className="flex flex-col">
            <span className="font-semibold text-cv-ink">afolabi.portfolio</span>
            <span className="text-[11px] text-cv-dim">Home / Hero</span>
          </span>
        </div>
      }
    >
      <div className="flex flex-col gap-0.5 px-2 py-2.5 font-cv-mono text-[12px] text-cv-ink">
        <span className="px-2 py-1 font-cv-sans text-[11px] font-semibold tracking-[0.06em] text-cv-dim uppercase">
          Layers
        </span>
        <span className="flex items-center gap-2 rounded-md bg-cv-select-fill px-2 py-1.5 text-white">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            <rect x="4" y="4" width="16" height="16" />
          </svg>
          Hero
        </span>
        {LAYERS.map(({ label, icon }) => (
          <span key={label} className="flex items-center gap-2 py-1.5 pr-2 pl-6">
            <LayerIcon name={icon} />
            {label}
          </span>
        ))}
      </div>
    </PanelShell>
  );
}

const SPECS: [string, string][] = [
  ["role", "Senior Product Designer"],
  ["exp", "5 years"],
  ["platforms", "Web, Mobile"],
  ["tools", "Figma + AI"],
  ["approach", "Data-driven"],
  ["works with", "Cross-functional teams"],
];

export function InspectPanel() {
  return (
    <PanelShell
      title={<span className="font-semibold text-cv-ink">Inspect</span>}
      aside={
        <span className="flex items-center">
          <span className="block size-[26px] rounded-full border-2 border-solid border-cv-panel bg-cv-eng" />
          <span className="-ml-2 block size-[26px] rounded-full border-2 border-solid border-cv-panel bg-cv-prod" />
          <span className="-ml-2 block size-[26px] rounded-full border-2 border-solid border-cv-panel bg-cv-ai" />
        </span>
      }
    >
      <dl className="grid grid-cols-[88px_1fr] gap-x-2 gap-y-2.5 px-4 pt-3 pb-4 font-cv-mono text-[12px]">
        {SPECS.map(([key, value]) => (
          <div key={key} className="contents">
            <dt className="text-cv-dim">{key}</dt>
            <dd className="m-0 text-cv-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </PanelShell>
  );
}

const CURSORS = [
  { label: "Engineering", fill: "var(--color-cv-eng)", text: "#15171c", cls: "cv-cursor-a", pos: "top-[36%] left-[72%]" },
  { label: "Product", fill: "var(--color-cv-prod)", text: "#ffffff", cls: "cv-cursor-b", pos: "top-[23%] left-[43%]" },
  { label: "AI assist", fill: "var(--color-cv-ai)", text: "#ffffff", cls: "cv-cursor-c", pos: "top-[64%] left-[85%]" },
];

/** Other people's cursors drifting across the file. */
export function Collaborators() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
      {CURSORS.map(({ label, fill, text, cls, pos }) => (
        <span key={label} className={`absolute ${pos} ${cls} flex flex-col gap-0.5`}>
          <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden>
            <path
              d="M3 2l18 8-8 2.5L10 21z"
              fill={fill}
              stroke="#ffffff"
              strokeWidth="1.5"
            />
          </svg>
          <span
            className="ml-3.5 rounded px-2 py-0.5 text-[12px] font-semibold"
            style={{ background: fill, color: text }}
          >
            {label}
          </span>
        </span>
      ))}
    </div>
  );
}
