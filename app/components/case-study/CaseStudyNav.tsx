import Link from "next/link";

/*
 * Artboard 641:10066 — an 868 x 74 pill, 69% white with a 5px backdrop blur and
 * a #525252 hairline. Home sits at left:31, Previous/Next are a centred pair
 * 16px apart, and Visit Project is pinned at 50% + 324.5px. Every control is a
 * 135px pill except Visit Project, which hugs its label.
 *
 * Below lg the absolute placement is dropped for a flex row and the labels
 * collapse to their carets so all four still fit a phone.
 */

const PILL =
  "flex h-[47px] shrink-0 items-center justify-center gap-1 rounded-[30px] border border-solid bg-shell px-3 font-display text-[15px] leading-[normal] whitespace-nowrap lg:w-[135px] lg:px-0 lg:text-[18px]";

/*
 * Figma exports two copies of CaretDoubleRight: a black one for live controls
 * and a #808080 one for the disabled Previous. `flip` mirrors it to point left,
 * exactly as the artboard does.
 */
function Caret({ flip = false, dim = false }: { flip?: boolean; dim?: boolean }) {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={
        dim
          ? "/assets/divest/caret-double-left.svg"
          : "/assets/divest/caret-double-right.svg"
      }
      alt=""
      width={16}
      height={16}
      className={`glyph-mono block size-4 shrink-0${flip ? " -scale-x-100" : ""}`}
    />
  );
}

export default function CaseStudyNav({
  previousHref,
  nextHref,
  projectHref = "#",
}: {
  /** Omit to render Previous in its disabled state, as the artboard does. */
  previousHref?: string;
  nextHref?: string;
  projectHref?: string;
}) {
  return (
    <nav className="fixed bottom-8 left-1/2 z-50 h-[74px] w-[868px] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-[90px] border border-solid border-hairline bg-shell/[0.69] px-3 backdrop-blur-[5px] lg:px-0">
      <div className="relative flex h-full items-center justify-between gap-2">
        <Link
          href="/"
          className={`${PILL} border-ink text-ink transition-colors hover:bg-surface lg:absolute lg:top-[11px] lg:left-[31px]`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/divest/house.svg"
            alt=""
            width={20}
            height={20}
            className="glyph-mono block size-5 shrink-0"
          />
          <span className="hidden sm:inline">Home</span>
        </Link>

        <div className="flex items-center gap-2 lg:absolute lg:top-[11px] lg:left-1/2 lg:-translate-x-1/2 lg:gap-4">
          {previousHref ? (
            <Link
              href={previousHref}
              className={`${PILL} border-ink text-ink transition-colors hover:bg-surface`}
            >
              <Caret flip />
              <span className="hidden sm:inline">Previous</span>
              <span className="sr-only sm:hidden">Previous</span>
            </Link>
          ) : (
            <span
              aria-disabled
              className={`${PILL} cursor-not-allowed border-muted text-muted`}
            >
              <Caret flip dim />
              <span className="hidden sm:inline">Previous</span>
              <span className="sr-only sm:hidden">Previous (unavailable)</span>
            </span>
          )}

          {nextHref ? (
            <Link
              href={nextHref}
              className={`${PILL} border-ink text-ink transition-colors hover:bg-surface`}
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sr-only sm:hidden">Next</span>
              <Caret />
            </Link>
          ) : (
            <span
              aria-disabled
              className={`${PILL} cursor-not-allowed border-muted text-muted`}
            >
              <span className="hidden sm:inline">Next</span>
              <span className="sr-only sm:hidden">Next (unavailable)</span>
              <Caret dim />
            </span>
          )}
        </div>

        <a
          href={projectHref}
          target="_blank"
          rel="noreferrer"
          className="flex h-[47px] shrink-0 items-center justify-center rounded-[30px] bg-accent px-4 font-display text-[15px] leading-[normal] whitespace-nowrap text-white transition-opacity hover:opacity-90 lg:absolute lg:top-1/2 lg:left-[calc(50%+324.5px)] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:px-8 lg:text-[18px]"
        >
          Visit Project
        </a>
      </div>
    </nav>
  );
}
