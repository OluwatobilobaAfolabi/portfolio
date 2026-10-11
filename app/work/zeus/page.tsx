import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";

import CaseStudyNav from "@/app/components/case-study/CaseStudyNav";
import { Prose, SectionHeading } from "@/app/components/case-study/primitives";

export const metadata: Metadata = {
  title: "Zeus Wallet — Bitcoin Designathon ’25 — Afolabi Oluwatobiloba",
  description:
    "Redesigning onboarding for Zeus, a self-custodial Bitcoin and Lightning wallet, at the Bitcoin Design Community designathon.",
};

const COLUMN = "(max-width: 1439px) calc(100vw - 3rem), 1312px";
const PROJECT = "https://zeusln.com/";

/* The hi-fi frames. The first six draw their bezel inside a 272 x 589 frame;
   the "Homepage Explore" three draw it as a 6px outside stroke, so their
   export is 284 x 601 and is let out past the cell by exactly that stroke. */
const PHONES: { alt: string; outset?: boolean }[] = [
  { alt: "Splash screen with the Zeus wordmark and three entry options" },
  { alt: "Onboarding: Payments you can trust" },
  { alt: "Onboarding: On-chain transfers" },
  { alt: "Onboarding: Lightning payments" },
  { alt: "Onboarding: Control the lightning" },
  { alt: "Loading screen: Zeus is starting your node, with an explainer" },
  { alt: "Homepage: an empty wallet with no recent transactions", outset: true },
  { alt: "Homepage: wallet balance with recent transactions", outset: true },
  { alt: "Homepage: the Receive BTC sheet", outset: true },
];

const CURRENT_APP = 6;

/** A still drawn at a fixed size on the artboard; scales down, never up. */
function Still({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={`(max-width: ${width + 48}px) calc(100vw - 3rem), ${width}px`}
      className={`artboard h-auto w-full ${className}`}
      style={{ maxWidth: width }}
    />
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[clamp(1.25rem,1.67vw,24px)] leading-[normal] font-bold text-ink">
      {children}
    </h3>
  );
}

export default function ZeusCaseStudy() {
  return (
    <>
      <main
        id="top"
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-24 px-6 pt-24 pb-[136px] md:px-10 lg:gap-[104px] lg:px-16"
      >
        {/* Intro: the same Zeus artwork card as the home page, on the brand band */}
        <section className="flex w-full flex-col items-center gap-8">
          <div className="relative aspect-[1312/583] w-full overflow-hidden bg-zeus">
            <div className="@container absolute top-1/2 left-1/2 h-[102.57%] w-[49.24%] -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-surface">
              <Image
                src="/assets/work-zeus-bg.png"
                alt=""
                aria-hidden
                width={1000}
                height={1131}
                priority
                sizes="(max-width: 1439px) 54vw, 701px"
                className="pointer-events-none absolute top-0 left-[-4.23%] h-[111.92%] w-[108.46%] max-w-none object-cover"
              />
              <div className="absolute top-1/2 left-1/2 flex w-[50.619cqw] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[2.477cqw]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/zeus-logo.svg"
                  alt="Zeus"
                  width={327}
                  height={126}
                  className="block h-[19.507cqw] w-full"
                />
                <span className="w-full text-center font-grotesk text-[2.786cqw] leading-[1.222] font-semibold text-white">
                  Zeus Wallet
                </span>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center gap-2">
            <h1 className="font-display text-center text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-balance text-ink lg:whitespace-nowrap">
              Zeus Wallet -{" "}
              <em className="font-medium italic text-muted">
                Bitcoin Designathon ’25
              </em>
            </h1>
            <Prose width={928}>
              Zeus Wallet is a self-custodial mobile Bitcoin and Lightning
              Network wallet for both Android and iOS that lets you remotely
              manage your own Lightning node—or even run one directly on your
              phone. It offers complete control over your funds, with no KYC
              requirements, no processing fees, and a fully open-source codebase
              under AGPLv3
            </Prose>
          </div>
        </section>

        {/* What the project was */}
        <section className="flex w-full flex-col items-center gap-8 opacity-96">
          <div className="relative aspect-[1312/583] w-full overflow-hidden">
            <Image
              src="/assets/zeus/designathon.webp"
              alt="The Bitcoin Design Community designathon"
              width={2624}
              height={1539}
              sizes={COLUMN}
              className="absolute top-[-14.295%] left-0 h-[132.02%] w-full max-w-none object-cover"
            />
          </div>
          <div className="flex w-full max-w-[1090px] flex-col items-center gap-2">
            <SectionHeading
              lead="What This"
              accent="Project"
              trail="Was About?"
              nowrap
            />
            <Prose width={928}>
              The Bitcoin Design Community organized a designathon and Zeus
              redesign was one of the projects for designers to work on. My team
              mate Timi and I worked on this project together.
            </Prose>
          </div>
        </section>

        {/* The app as it stood before the redesign */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="What We Are" accent="Redesigning" />
          <div className="grid w-full max-w-[864px] grid-cols-2 gap-6 md:grid-cols-3">
            {Array.from({ length: CURRENT_APP }, (_, i) => (
              <Image
                key={i}
                src={`/assets/zeus/current-${i + 1}.webp`}
                alt={`The Zeus app before the redesign, screen ${i + 1} of ${CURRENT_APP}`}
                width={272}
                height={589}
                sizes="(max-width: 767px) 45vw, 272px"
                className="artboard h-auto w-full"
              />
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <div className="flex w-full flex-col items-center gap-2">
            <SectionHeading lead="How We Approached" accent="This Project?" stacked />
            <Prose width={998}>
              <p>
                With the guidance of Designers we look up to in the Bitcoin
                Design Community (Mo, Christoph, Erik, Design_r), we had to
                define our design process to guide us towards coming up with an
                amazing solution.
              </p>
              <p className="mt-[1lh] font-bold">
                Here is a screenshot of what our process was:
              </p>
            </Prose>
          </div>
          <Still
            src="/assets/zeus/process.webp"
            alt="The design process we followed, step by step"
            width={646}
            height={541}
          />
        </section>

        {/* User research */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-[34px]">
          <div className="flex w-full flex-col items-center gap-2">
            <SectionHeading lead="What" accent="Users" trail="Had To Say" />
            <Prose width={946}>
              <p>
                Because we wanted to come up with a great design for Zeus
                redesign, we decided to hear what users had to say, their
                frustrations and things they love about the product and it
                didn&rsquo;t disappoint at all!
              </p>
              <p className="mt-[1lh]">
                We posted on stacker news, and also got in the telegram channel
                to engage users.
              </p>
            </Prose>
          </div>

          <div className="flex w-full max-w-[757px] flex-col gap-[33px]">
            <div className="flex flex-col gap-4">
              <SubHeading>Telegram</SubHeading>
              <Still
                src="/assets/zeus/telegram-1.webp"
                alt="Telegram feedback from Zeus users"
                width={757}
                height={332}
              />
              <Still
                src="/assets/zeus/telegram-2.webp"
                alt="More Telegram feedback from Zeus users"
                width={757}
                height={204}
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <SubHeading>Stacker News</SubHeading>
                </div>
                <a
                  href="https://stacker.news/items/978900"
                  className="flex shrink-0 items-center gap-1 rounded-[50px] px-6 py-2 text-[18px] text-ink transition-colors hover:bg-surface"
                >
                  Link
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/arrow-up-right.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="glyph-mono block size-6 shrink-0"
                  />
                </a>
              </div>
              {[1, 2, 3].map((n) => (
                <Still
                  key={n}
                  src={`/assets/zeus/stacker-${n}.webp`}
                  alt={`Stacker News thread with user feedback, part ${n}`}
                  width={757}
                  height={401}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Synthesis */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="What We Did With" accent="This Information?" stacked />

          {[
            {
              icon: "/assets/divest/seal-question.svg",
              label: "Friction Points",
              body: (
                <>
                  <p>
                    We went through what users had to say and the common thing
                    we noticed users complained about was the loading time it
                    took to open.
                  </p>
                  <p>
                    Another thing users complained about was the confusion when
                    they began onboarding.
                  </p>
                </>
              ),
            },
            {
              icon: "/assets/zeus/lightbulb.svg",
              label: "Ideas",
              body: (
                <p>
                  Timi and I decided to focus on creating an interesting
                  onboarding flow that educates users and and also design an
                  engaging loading screen that keeps users engaged.
                </p>
              ),
            },
          ].map(({ icon, label, body }) => (
            <div key={label} className="flex w-full flex-col items-center gap-8">
              <div className="flex flex-col items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icon}
                  alt=""
                  width={202}
                  height={202}
                  className="block size-[clamp(120px,14vw,202px)] shrink-0"
                />
                <p className="text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-bold tracking-[0.02em] text-ink">
                  {label}
                </p>
              </div>
              <Prose>{body}</Prose>
            </div>
          ))}
        </section>

        {/* Iterations */}
        <section className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full max-w-[1090px] flex-col items-center gap-2">
            <SectionHeading lead="UI" accent="Iterations" />
            <Prose>
              <p>
                My team mate and I went ahead to brainstorm and we came up with
                two iterations to onboard users.
              </p>
              <p>
                We put up these two iterations on the Bitcoin Design Community on
                discord so we can conduct an A/B test to see what works better
                for users.
              </p>
            </Prose>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:items-start">
            {[
              { n: 1, w: 566, h: 480, alt: "Onboarding iteration one" },
              { n: 2, w: 531, h: 480, alt: "Onboarding iteration two" },
            ].map(({ n, w, h, alt }) => (
              <Image
                key={n}
                src={`/assets/zeus/iteration-${n}.webp`}
                alt={alt}
                width={w}
                height={h}
                sizes={`(max-width: 1023px) calc(100vw - 3rem), ${w}px`}
                className="artboard h-auto w-full rounded-[4px] shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_2px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.1)]"
                style={{ maxWidth: w }}
              />
            ))}
          </div>

          <p className="text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-bold tracking-[0.02em] text-ink">
            We set up a poll and our final decision to what works better was
            made.
          </p>
        </section>

        {/* Final designs */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="Final High Fidelity" accent="Designs" />
          <div className="grid w-full max-w-[864px] grid-cols-2 gap-6 md:grid-cols-3">
            {PHONES.map(({ alt, outset }, i) =>
              outset ? (
                <div key={alt} className="relative aspect-[272/589] w-full">
                  <Image
                    src={`/assets/zeus/phone-${i + 1}.webp`}
                    alt={alt}
                    width={284}
                    height={601}
                    sizes="(max-width: 767px) 47vw, 284px"
                    className="phone-shot phone-shot--outset absolute top-[-1.019%] left-[-2.206%] h-[102.04%] w-[104.41%] max-w-none"
                  />
                </div>
              ) : (
                <Image
                  key={alt}
                  src={`/assets/zeus/phone-${i + 1}.webp`}
                  alt={alt}
                  width={272}
                  height={589}
                  sizes="(max-width: 767px) 45vw, 272px"
                  className="phone-shot h-auto w-full"
                />
              ),
            )}
          </div>
        </section>

        {/* Lessons */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-2">
          <SectionHeading lead="Lessons Learnt" accent="from Project" nowrap />
          <Prose>
            <p>
              I loved this project because I got to really understand the
              importance of in app education in a product, even the most
              technical people still need to understand what a few things in a
              product do.
            </p>
            <p>
              Another take away for me was I got to experience working on an
              open source project and building with transparency.
            </p>
          </Prose>
        </section>
      </main>

      <CaseStudyNav previousHref="/work/transcripts" projectHref={PROJECT} />
    </>
  );
}
