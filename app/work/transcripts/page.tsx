import type { Metadata } from "next";
import Image from "next/image";

import CaseStudyNav from "@/app/components/case-study/CaseStudyNav";
import { Prose, SectionHeading } from "@/app/components/case-study/primitives";

export const metadata: Metadata = {
  title: "Bitcoin Transcripts 2.0 — Afolabi Oluwatobiloba",
  description:
    "Redesigning Bitcoin Transcripts: unlocking the knowledge in bitcoin talks and making it searchable and accessible to everyone.",
};

const COLUMN = "(max-width: 1439px) calc(100vw - 3rem), 1313px";

/** Body copy at the intro's 24px size (Prose is the 20px variant). */
function Lead({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[855px] text-center text-[clamp(1.0625rem,1.67vw,24px)] leading-[1.6] tracking-[0.02em] text-ink">
      {children}
    </div>
  );
}

/*
 * The three tablet frames, cropped from Figma's 2x render (their vector UI has
 * no reachable node ids). Radius is the bezel's 38px over each frame's size, so
 * the white export corners clip away at any width.
 */
const DEVICES = [
  { h: 880, alt: "Final design: the Categories page with an A–Z jump list" },
  { h: 881, alt: "Final design: a source page listing its transcripts" },
  { h: 1023, alt: "Final design: a transcript with a table of contents and collapsible details" },
];

const METRICS = [
  "Taming Cognitive Load: The legacy design confronted users with a monolithic wall of 178 undifferentiated text tags and an unbroken, pipe-separated index. The new layout introduces an interactive A-Z jump grid and encapsulated category cards with explicit count indicators, transforming a visual chore into quick, scannable wayfinding.",
  "Eradicating Scroll Fatigue: Previously, discovering a topic required tedious vertical scrolling through a single, rigid column. The introduction of a persistent right-hand Table of Contents allows users to instantly bypass noise and jump directly to relevant sections of the text.",
  "Prioritizing Content Engagement: The new interface features a strategic “Hide Details” toggle that collapses the administrative metadata panel. This UI choice pulls the core transcript text directly above the fold, immediately reducing time-to-value for the reader.",
];

export default function TranscriptsCaseStudy() {
  return (
    <>
      <main
        id="top"
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-24 px-6 pt-24 pb-[136px] md:px-10 lg:gap-[104px] lg:px-16"
      >
        {/* Intro */}
        <section className="flex w-full flex-col items-center gap-8">
          <div className="@container relative aspect-[1313/583] w-full overflow-hidden bg-surface">
            <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[0.873cqw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/bitcoin-circle.svg"
                alt=""
                width={129}
                height={129}
                className="block size-[9.824cqw] shrink-0"
              />
              <span className="font-logo text-[6.986cqw] leading-[normal] font-bold whitespace-nowrap text-ink italic">
                Transcripts
              </span>
            </div>
          </div>
          <div className="flex w-full max-w-[1090px] flex-col items-center gap-8">
            <h1 className="font-display text-center text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-balance text-ink lg:whitespace-nowrap">
              Bitcoin{" "}
              <em className="font-medium italic text-muted">Transcripts 2.0</em>
            </h1>
            <Lead>
              <p>
                <strong className="font-bold">Bitcoin&rsquo;s</strong> technical
                lore is often shared in videos, presentations, meetups, and
                podcast episodes, but absorbing that knowledge isn&rsquo;t always
                easy.
              </p>
              <p>
                If you missed a live talk or don&rsquo;t have hours to watch
                recordings, you might never know what you missed.
              </p>
              <p>
                Bitcoin Transcripts aims to change that by unlocking the wisdom
                from those talks and making it accessible to everyone.
              </p>
            </Lead>
          </div>
        </section>

        {/* Photo band */}
        <section className="w-full opacity-96">
          <div className="relative aspect-[1312/583] w-full overflow-hidden">
            <Image
              src="/assets/transcripts/photo.webp"
              alt="A developer's desk: code on two monitors and a phone playing a podcast"
              width={2499}
              height={1601}
              sizes={COLUMN}
              className="absolute top-0 left-0 h-[144.08%] w-full max-w-none object-cover"
            />
          </div>
        </section>

        {/* Problem */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8 opacity-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/divest/seal-question.svg"
            alt=""
            width={202}
            height={202}
            className="block size-[clamp(120px,14vw,202px)] shrink-0"
          />
          <SectionHeading lead="Problem" accent="Definition" />
          <Prose width={855}>
            <p>
              A huge amount of bitcoin&rsquo;s knowledge and history has been
              trapped in audio/video recordings. While these talks and podcasts
              are full of valuable insights, they&rsquo;re not very accessible.
              There&rsquo;s no way to quickly search a video or skim it for a
              specific detail.
            </p>
            <p className="mt-[1lh]">
              In the past, a few dedicated individuals (like bitcoin developer
              Bryan Bishop, who transcribed hundreds of talks by hand) tried to
              solve this by manually writing transcripts, but it&rsquo;s
              time-consuming. As a result, most events never get transcribed.
            </p>
          </Prose>
        </section>

        {/* Solution */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="Our" accent="Solution" />
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/transcripts/lightbulb.svg"
              alt=""
              width={202}
              height={202}
              className="block size-[clamp(120px,14vw,202px)] shrink-0"
            />
            <p className="text-center text-[clamp(1.125rem,1.67vw,24px)] leading-[normal] font-medium text-ink">
              Ideas
            </p>
          </div>
          <Prose width={855}>
            Bitcoin Transcripts tackles this by combining automation and
            community effort. We use speech-to-text AI to automatically
            transcribe bitcoin talks, and then we rely on human reviewers from
            the community to fix errors and polish the text.
          </Prose>
        </section>

        {/* How it was built */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="How Was it" accent="Built?" nowrap />
          <div className="w-full max-w-[855px] text-[clamp(1rem,1.39vw,20px)] leading-[1.92] tracking-[0.02em] text-ink">
            <p>
              This version of Bitcoin Transcripts is a redesign of an older
              version of the product.
            </p>
            <p className="mt-[1lh]">
              We knew the old site needed the following changes
            </p>
            <ul className="list-disc pl-[60px] font-bold">
              <li>Modernised design</li>
              <li>Improved discoverability of transcripts</li>
              <li>Cleaned up information architecture</li>
              <li>Upgraded typography</li>
              <li>Refined metadata</li>
            </ul>
            <p className="mt-[1lh]">
              We put the new product through testing with users as we built it
              to ensure an agile and iterative creation process.
            </p>
          </div>
        </section>

        {/* The old site */}
        <section className="flex w-full max-w-[1103px] flex-col items-center gap-[60px]">
          <SectionHeading lead="What Does The Old Design" accent="Look Like?" stacked />
          <div className="artboard relative aspect-[1103/1292] w-full overflow-hidden rounded-[8px] border border-solid border-dash bg-shell p-1">
            <div className="relative size-full overflow-hidden">
              <Image
                src="/assets/transcripts/old-site.webp"
                alt="The previous Bitcoin Transcripts site: a sidebar of sources and a Tags page listing every category as plain text"
                fill
                sizes="(max-width: 1150px) calc(100vw - 3rem), 1093px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Iterations */}
        <section className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full max-w-[1090px] flex-col items-center gap-8">
            <SectionHeading lead="UI" accent="Iterations" />
            <Prose width={855}>
              <p>
                The team iterated alot because we really wanted to present the
                best interface for users that makes navigation and interaction
                with the product really easy.
              </p>
              <p className="mt-[1lh]">
                These are a few screenshots that shows how much work went into
                iterations.
              </p>
            </Prose>
          </div>
          <div className="flex w-full max-w-[1218px] flex-col gap-5">
            {[
              { n: 1, h: 639.45, alt: "Iterations of the search filters and individual transcript pages on the Figma canvas" },
              { n: 2, h: 639.167, alt: "Iterations of the transcript page layout on the Figma canvas" },
            ].map(({ n, h, alt }) => (
              <div
                key={n}
                className="artboard relative w-full overflow-hidden"
                style={{ aspectRatio: `1218 / ${h}` }}
              >
                <Image
                  src={`/assets/transcripts/iteration-${n}.webp`}
                  alt={alt}
                  fill
                  sizes="(max-width: 1266px) calc(100vw - 3rem), 1218px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Final design */}
        <section className="flex w-full max-w-[1091px] flex-col items-center gap-16">
          <SectionHeading
            lead="What Does The Final Design/"
            accent="Solution Look Like?"
            stacked
          />
          <div className="flex w-full flex-col gap-6">
            {DEVICES.map(({ h, alt }, i) => (
              <Image
                key={alt}
                src={`/assets/transcripts/device-${i + 1}.webp`}
                alt={alt}
                width={1091}
                height={h}
                sizes="(max-width: 1139px) calc(100vw - 3rem), 1091px"
                className="device-shot h-auto w-full"
                style={{ borderRadius: `${((38 / 1091) * 100).toFixed(3)}% / ${((38 / h) * 100).toFixed(3)}%` }}
              />
            ))}
          </div>
        </section>

        {/* Metrics — brand orange in both themes, so its type stays black */}
        <section className="flex w-full flex-col gap-4 rounded-[clamp(32px,6vw,80px)] bg-btc px-6 pt-12 pb-12 text-black md:px-12 lg:min-h-[687px] lg:px-20 lg:pt-20 lg:pb-[68px]">
          <h2 className="font-display text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-balance">
            Metrics to <em className="font-medium italic">Measure Success</em>
          </h2>
          <ul className="flex flex-wrap justify-center gap-x-[11px] gap-y-[12px]">
            {METRICS.map((copy, i) => (
              <li
                key={i}
                className="w-full max-w-[525px] px-2.5 pt-[11px] pb-[5px] text-center text-[clamp(0.9375rem,1.11vw,16px)] leading-[1.45]"
                style={{
                  // The artboard's card heights (the third is 4px shorter).
                  minHeight: i === 2 ? 207 : 211,
                  borderStyle: "solid",
                  borderColor: "transparent",
                  borderWidth: 28,
                  borderImage: `url(/assets/transcripts/brush-${i + 1}.png) 56 / 28px stretch`,
                }}
              >
                {copy}
              </li>
            ))}
          </ul>
        </section>

        {/* Lessons */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="Lessons Learnt" accent="from Project" nowrap />
          <Prose width={855}>
            <p>
              Building this product with the Bitcoin Dev Project team at
              Chaincode Labs was really a test to critical thinking, considering
              the fact that I was building for developers.
            </p>
            <p>
              Getting to understand that even the best developers and techies
              still need a product that can help them learn and understand how
              bitcoin works humbles me in a way.
            </p>
          </Prose>
        </section>
      </main>

      <CaseStudyNav
        previousHref="/work/cardplug"
        nextHref="/work/zeus"
        projectHref="https://btctranscripts.com/"
      />
    </>
  );
}
