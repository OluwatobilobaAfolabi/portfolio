import Image from "next/image";

import {
  Collaborators,
  InspectPanel,
  LayersPanel,
} from "./canvas/panels";

const LINKS = [
  { label: "Email me", href: "mailto:afolabitobi20@gmail.com", primary: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwatobiloba-afolabi-7b7a6718a/",
    primary: false,
  },
];

function ArrowOut() {
  return (
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
  );
}

export default function Hero() {
  return (
    <section className="relative">
      <Collaborators />

      <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)_240px] lg:items-start">
        <div className="hidden lg:block">
          <LayersPanel />
        </div>

        <div className="flex flex-col gap-2">
          {/* Frame label, the way a design tool names the artboard */}
          <p className="flex items-center gap-2 font-cv-mono text-[12px] text-cv-select">
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
            Afolabi Oluwatobiloba — Senior Product Designer
          </p>

          {/* The artboard */}
          <div className="relative rounded border border-solid border-cv-line bg-cv-panel px-6 py-10 shadow-[0_30px_60px_rgba(21,23,28,0.08)] sm:px-10 lg:px-14 lg:py-14">
            <h1 className="font-cv-serif text-[clamp(2.5rem,7vw,100px)] leading-[0.92] tracking-[-0.02em] text-cv-ink">
              Complex problems,
              <br />
              <em className="text-cv-select not-italic italic">made intuitive.</em>
              <span
                aria-hidden
                className="cv-caret ml-2 inline-block h-[0.78em] w-[4px] translate-y-[0.08em] bg-cv-select align-baseline"
              />
            </h1>

            <div className="mt-10 flex flex-col gap-10 lg:mt-12 lg:flex-row lg:items-start lg:gap-10">
              <div className="relative flex max-w-[380px] flex-col gap-7">
                {/* Spacing annotation, as a design file would draw it */}
                <span
                  aria-hidden
                  className="absolute -top-11 -left-7 hidden items-center lg:flex"
                >
                  <span className="relative block h-12 w-[2px] bg-cv-measure">
                    <span className="absolute -top-px -left-[7px] block h-[2px] w-4 bg-cv-measure" />
                    <span className="absolute -bottom-px -left-[7px] block h-[2px] w-4 bg-cv-measure" />
                  </span>
                  <span className="ml-1.5 rounded bg-cv-measure-fill px-1.5 py-0.5 font-cv-mono text-[11px] text-white">
                    48
                  </span>
                </span>

                <p className="text-[clamp(1rem,1.25vw,18px)] leading-[1.55] text-cv-body">
                  I&rsquo;m{" "}
                  <strong className="font-semibold text-cv-ink">
                    Afolabi Oluwatobiloba
                  </strong>
                  , a Senior Product Designer with 5 years crafting intuitive,
                  data-driven <strong className="font-semibold text-cv-ink">web</strong>{" "}
                  and <strong className="font-semibold text-cv-ink">mobile</strong>{" "}
                  experiences using <strong className="font-semibold text-cv-ink">AI</strong>{" "}
                  and expert <strong className="font-semibold text-cv-ink">Figma</strong>{" "}
                  craft to ship user-centric solutions with cross-functional
                  teams.
                </p>

                <div className="flex flex-wrap gap-3">
                  {LINKS.map(({ label, href, primary }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={
                        primary
                          ? "flex h-[52px] items-center gap-2.5 rounded-[10px] bg-cv-select-fill px-5 text-[16px] font-semibold text-white transition-opacity hover:opacity-90"
                          : "flex h-[52px] items-center gap-2.5 rounded-[10px] border border-solid border-cv-line px-5 text-[16px] font-semibold text-cv-ink transition-colors hover:bg-cv-bg"
                      }
                    >
                      {label}
                      <ArrowOut />
                    </a>
                  ))}
                </div>
              </div>

              {/* Portrait, drawn as a selected layer */}
              <div className="relative mx-auto w-full max-w-[330px] shrink-0 lg:mx-0">
                <div className="relative aspect-[330/400] w-full">
                  <Image
                    src="/assets/hero-portrait.png"
                    alt="Afolabi Oluwatobiloba"
                    fill
                    priority
                    sizes="(max-width: 1023px) 90vw, 330px"
                    className="rounded-[4px] object-cover object-[50%_10%]"
                  />
                  <span
                    aria-hidden
                    className="absolute -inset-px border-2 border-solid border-cv-select"
                  />
                  {[
                    "-top-1.5 -left-1.5",
                    "-top-1.5 -right-1.5",
                    "-bottom-1.5 -left-1.5",
                    "-bottom-1.5 -right-1.5",
                  ].map((corner) => (
                    <span
                      key={corner}
                      aria-hidden
                      className={`absolute ${corner} block size-2.5 border-2 border-solid border-cv-select bg-cv-panel`}
                    />
                  ))}
                  <span
                    aria-hidden
                    className="absolute -bottom-[34px] left-1/2 -translate-x-1/2 rounded bg-cv-select-fill px-2 py-[3px] font-cv-mono text-[11px] whitespace-nowrap text-white"
                  >
                    5 yrs × ∞ iterations
                  </span>
                </div>

                {/* A reviewer's comment pinned to the layer */}
                <span
                  aria-hidden
                  className="absolute -top-[30px] left-[82px] z-10 hidden items-center gap-2 rounded-[16px_16px_16px_4px] whitespace-nowrap bg-cv-ink px-3 py-2 text-[13px] text-cv-panel shadow-[0_10px_24px_rgba(21,23,28,0.18)] lg:flex"
                >
                  <span className="block size-5 rounded-full bg-cv-eng" />
                  &ldquo;Ship it — users love this flow.&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <InspectPanel />
        </div>
      </div>
    </section>
  );
}
