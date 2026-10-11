import type { ReactNode } from "react";
import Image from "next/image";

/* Shared building blocks for a case study page.
   Specs come from the Figma node 762:9273 design context:
   heading 72px display / body 20px with 38.4px leading and 0.4px tracking /
   callout #fafafa on a dashed #d5d5d5 border, 24px radius, 32px padding. */

/**
 * Section title: black with a grey italic segment, e.g. "Splash <i>Screens</i>".
 * `nowrap` mirrors the artboard's whitespace-nowrap headings; the rest wrap
 * inside their column, which is what `w-[min-content] min-w-full` does there.
 */
export function SectionHeading({
  lead,
  accent,
  trail,
  nowrap = false,
  stacked = false,
}: {
  lead: string;
  accent: string;
  trail?: string;
  nowrap?: boolean;
  /** Put the italic segment on its own line, as some artboards set it. */
  stacked?: boolean;
}) {
  return (
    <h2
      className={`font-display text-center text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-balance text-ink${
        nowrap ? " lg:whitespace-nowrap" : ""
      }`}
    >
      {lead}
      {stacked ? <br /> : " "}
      <em className="font-medium italic text-muted">{accent}</em>
      {trail ? ` ${trail}` : null}
    </h2>
  );
}

/**
 * A Phosphor glyph exported as its own vector. Figma nests the artwork inside a
 * square frame at fractional insets, so the outer box and the inner leaf are
 * kept separate here — scaling the box scales the leaf with it.
 */
export function GlyphTile({
  src,
  alt = "",
  inset,
  size,
  mono = false,
}: {
  src: string;
  alt?: string;
  /** CSS inset shorthand from the artboard: top right bottom left. */
  inset: string;
  /** Outer frame size in px. */
  size: number;
  /** Set for glyphs exported with a flat black fill, so they invert in dark. */
  mono?: boolean;
}) {
  return (
    <div
      className="relative shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <div className="absolute" style={{ inset }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`absolute inset-0 block h-full w-full max-w-none${
            mono ? " glyph-mono" : ""
          }`}
        />
      </div>
    </div>
  );
}

/** Centred body copy. `width` is the design's text-box width in px. */
export function Prose({
  children,
  width = 1090,
}: {
  children: ReactNode;
  width?: number;
}) {
  return (
    <div
      style={{ maxWidth: width }}
      className="w-full text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] tracking-[0.02em] text-ink"
    >
      {children}
    </div>
  );
}

/** Dashed note block — the recurring serif aside. */
export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full max-w-[817px] items-center justify-center rounded-[24px] border border-dashed border-dash bg-paper p-8">
      <p className="font-display text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-medium tracking-[0.02em] text-ink">
        {children}
      </p>
    </div>
  );
}

/** Dashed pill label such as "Old Design" or "Iteration 3". */
export function LabelChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-[24px] border border-dashed border-dash bg-paper px-8 py-8 font-display text-[clamp(0.875rem,1.39vw,20px)] leading-[1.92] font-medium whitespace-nowrap text-ink">
      {children}
    </span>
  );
}

/**
 * A design still. `width`/`height` are the artboard dimensions in CSS px; the
 * source files are 2x exports of the same region, so the leaf keeps its
 * designed aspect ratio at every viewport.
 */
export function Figure({
  src,
  darkSrc,
  alt,
  width,
  height,
  sizes,
}: {
  src: string;
  /** A copy with the board recoloured for dark mode; phones stay untouched. */
  darkSrc?: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
}) {
  const image = (source: string, className = "") => (
    <Image
      src={source}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={`artboard mx-auto h-auto w-full max-w-full ${className}`}
      style={{ maxWidth: width }}
    />
  );
  if (!darkSrc) return image(src);
  return (
    <>
      {image(src, "dark:hidden")}
      {image(darkSrc, "hidden dark:block")}
    </>
  );
}
