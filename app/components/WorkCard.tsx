import type { ReactNode } from "react";

type WorkCardProps = {
  /** Frame name, shown above the artboard the way a design tool labels one. */
  frame: string;
  title: string;
  description: string;
  href?: string;
  media: ReactNode;
};

export default function WorkCard({
  frame,
  title,
  description,
  href = "#",
  media,
}: WorkCardProps) {
  return (
    <article className="group flex flex-col gap-2">
      <p className="flex items-center gap-2 font-cv-mono text-[12px] text-cv-dim transition-colors group-hover:text-cv-select">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M4 4h16v16H4z" />
        </svg>
        {frame}
      </p>

      <div className="flex flex-1 flex-col overflow-hidden rounded border border-solid border-cv-line bg-cv-panel shadow-[0_8px_24px_rgba(21,23,28,0.06)] transition-shadow group-hover:shadow-[0_18px_40px_rgba(21,23,28,0.12)]">
        {/* @container so each artwork keeps the proportions it was drawn at */}
        <div className="@container relative aspect-[646/598] w-full overflow-hidden">
          {media}
        </div>

        <div className="flex flex-1 flex-col gap-5 p-6 lg:p-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-cv-serif text-[clamp(1.5rem,2.2vw,34px)] leading-[1.05] tracking-[-0.01em] text-cv-ink">
              {title}
            </h3>
            <p className="text-[clamp(0.9375rem,1.1vw,17px)] leading-[1.55] text-cv-body">
              {description}
            </p>
          </div>

          <a
            href={href}
            className="mt-auto flex h-[52px] w-fit items-center gap-2.5 rounded-[10px] bg-cv-select-fill px-5 text-[16px] font-semibold whitespace-nowrap text-white transition-opacity hover:opacity-90"
          >
            Read Case Study
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden
              className="shrink-0"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
