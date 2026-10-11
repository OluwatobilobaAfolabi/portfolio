import type { Metadata } from "next";
import {
  Callout,
  Figure,
  LabelChip,
  Prose,
  SectionHeading,
} from "@/app/components/case-study/primitives";
import CaseStudyNav from "@/app/components/case-study/CaseStudyNav";

export const metadata: Metadata = {
  title: "CardPlug Mobile App Redesign — Afolabi Oluwatobiloba",
  description:
    "Cardplug is a fintech mobile application designed to simplify the exchange of gift cards. A case study on the end-to-end redesign.",
};

/* Every still is a 2x export of its region on the artboard; the width/height
   passed to Figure are the artboard's own CSS dimensions. */
const FULL = "(max-width: 1439px) calc(100vw - 3rem), 1312px";
const PANEL = "(max-width: 1439px) calc(100vw - 3rem), 1091px";
const NARROW = "(max-width: 1439px) 40vw, 322px";

/** Sections are 104px apart; blocks inside a section are 32px apart. */
function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center gap-8 lg:gap-8">
      {children}
    </section>
  );
}

/**
 * A 322 x 697 phone (8px bezel, 28px outer / 20px inner radius, kept as ratios)
 * whose screen is an animation. Reduced motion gets the first frame instead.
 */
function AnimatedPhone({ src, still, alt }: { src: string; still: string; alt: string }) {
  return (
    <div className="device-shot aspect-[322/697] w-full rounded-[8.7%/4.02%] bg-black p-[2.48%]">
      <div className="relative size-full overflow-hidden rounded-[6.54%/2.94%] bg-[#f9f9f9]">
        <picture>
          <source media="(prefers-reduced-motion: reduce)" srcSet={still} />
          <img
            src={src}
            alt={alt}
            width={612}
            height={1324}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </picture>
      </div>
    </div>
  );
}

/*
 * The splash panel, rebuilt from the flattened artboard so each phone can play
 * its animation. Geometry is the artboard's: a 1091px panel, 193 x 104 chips,
 * 322 x 697 phones with an 8px bezel, sitting 59px from the left with 246px
 * between them (the pair is deliberately left of centre in the design).
 */
const SPLASHES = [
  {
    n: 1,
    alt: "Splash iteration 1: the gift icon becomes the Cardplug wordmark, then a fan of gift cards sweeps across",
  },
  {
    n: 2,
    alt: "Splash iteration 2: brand icons for gift cards fall and stack at the bottom of the screen, then the Cardplug logo appears",
  },
];

function SplashIterations() {
  return (
    // Grid tracks, not padding: track percentages resolve against this panel,
    // padding percentages would resolve against the wider page column.
    <div className="grid w-full max-w-[1091px] grid-cols-2 gap-6 bg-paper px-4 pt-8 pb-[33px] lg:grid-cols-[5.41%_29.51%_22.55%_29.51%_1fr] lg:gap-0 lg:px-0">
      {SPLASHES.map(({ n, alt }) => (
        <div
          key={n}
          className={`flex flex-col items-center gap-8 ${n === 1 ? "lg:col-start-2" : "lg:col-start-4"}`}
        >
          <span className="inline-flex items-center gap-[10px] rounded-[24px] border border-dashed border-dash bg-paper px-4 py-4 font-display text-[clamp(0.875rem,1.39vw,20px)] leading-[1.92] font-medium whitespace-nowrap text-ink sm:px-8 sm:py-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/divest/info.svg"
              alt=""
              width={24}
              height={24}
              className="glyph-mono block size-5 shrink-0 sm:size-6"
            />
            Iteration {n}
          </span>
          <AnimatedPhone
            src={`/assets/cardplug/splash-${n}.webp`}
            still={`/assets/cardplug/splash-${n}-still.webp`}
            alt={alt}
          />
        </div>
      ))}
    </div>
  );
}

/** Final Decision: the 1091 x 897 panel, chip and phone centred. */
function FinalDecision() {
  return (
    <div className="flex w-full max-w-[1091px] flex-col items-center gap-8 bg-paper px-4 pt-8 pb-[33px]">
      <span className="inline-flex items-center justify-center rounded-[24px] border border-dashed border-dash bg-paper px-8 py-8 font-display text-[clamp(0.875rem,1.39vw,20px)] leading-[1.92] font-medium whitespace-nowrap text-ink">
        Final Decision
      </span>
      <div className="w-full max-w-[322px]">
        <AnimatedPhone
          src="/assets/cardplug/final-decision-anim.webp"
          still="/assets/cardplug/final-decision-still.webp"
          alt="The chosen onboarding: cards cycle through Best Rates, Instant Cash; No middleman, No delay; and Trade More, Unlock Rewards"
        />
      </div>
    </div>
  );
}

export default function CardplugCaseStudy() {
  return (
    <>
      <main
        id="top"
        className="mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-6 pt-24 pb-[136px] md:px-10 lg:gap-[104px] lg:px-16"
      >
        {/* Intro */}
        <section className="flex flex-col items-center gap-8">
          <Figure
            src="/assets/cardplug/hero.webp"
            alt="Cardplug leaderboard screen shown on a phone against a lilac gradient"
            width={1313}
            height={583}
            sizes={FULL}
          />
          <h1 className="font-display text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-balance text-ink lg:whitespace-nowrap">
            CardPlug <em className="font-medium italic text-muted">Mobile App</em>{" "}
            Redesign
          </h1>
          <div className="flex w-full flex-col items-center gap-4">
            <Prose width={855}>
              <p>
                <strong className="font-bold">Cardplug</strong> is a fintech
                mobile application designed to simplify the exchange of gift
                cards. Primarily functioning as a secure digital marketplace,
                the platform enables users to instantly convert unused gift
                cards into cash, purchase airtime, and settle utility bills
                seamlessly. <strong className="font-bold">Cardplug</strong>{" "}
                provides a unified, fast, and secure financial ecosystem for
                everyday transactions.
              </p>
            </Prose>
            <Callout>
              My responsibility on this product was to redesign end to end and
              improve the general experience. Also figure out a way for users to
              stay engaged and complete transactions which ends up making more
              money.
            </Callout>
          </div>
        </section>

        {/* Where it All Begins */}
        <Section>
          <SectionHeading lead="Where it All" accent="Begins" />
          <Prose>
            We introduced the use of{" "}
            <strong className="font-bold italic">ilcons illustration pack</strong>{" "}
            into Cardplug to fit the art direction we had envisioned.
          </Prose>
          {/* the artboard frame carries 30px below the artwork itself */}
          <div className="w-full pb-[30px]">
            <Figure
              src="/assets/cardplug/icon-grid.webp"
              alt="The ilcons illustration pack: rows of blue and black spot illustrations"
              width={775}
              height={165}
              sizes="(max-width: 1439px) 60vw, 775px"
            />
          </div>
        </Section>

        {/* Splash Screens */}
        <Section>
          <SectionHeading lead="Splash" accent="Screens" />
          <Prose>
            We came up with two splash screen prototypes that excited a few test
            users and we got positive feedback from them which indicated we were
            off to a great start.
          </Prose>
          <SplashIterations />
          <Callout>
            After conducting an A/B test, the result tilted towards Iteration 1.
          </Callout>
        </Section>

        {/* Onboarding Screens */}
        <Section>
          <SectionHeading lead="Onboarding" accent="Screens" />
          <Prose>
            We worked on a few iterations on how users get onboarded on Cardplug.
          </Prose>
          <Figure
            src="/assets/cardplug/onboarding.webp"
            darkSrc="/assets/cardplug/onboarding-dark.webp"
            alt="Four onboarding screen iterations"
            width={1091}
            height={1695}
            sizes={PANEL}
          />
          <FinalDecision />
          <Callout>
            We chose the 4th Iteration because of how the prototype was engaging
            and it leaned closer towards the art direction that was chosen.
            Another reason was it told the story better.
          </Callout>
        </Section>

        {/* Home Screen Iterations */}
        <Section>
          <SectionHeading lead="Home Screen" accent="Iterations" />
          <LabelChip>Old Design</LabelChip>
          <div className="mt-[-8px] w-full">
            <Figure
              src="/assets/cardplug/home-old.webp"
            darkSrc="/assets/cardplug/home-old-dark.webp"
              alt="The original Cardplug home screen"
              width={322}
              height={653}
              sizes={NARROW}
            />
          </div>
          <Prose>
            Working on the Home screen was very interesting because we had to add
            new features like rate calculator and banners while creating an
            interface that&rsquo;s pleasing to use.
          </Prose>
          <Callout>
            We created 4 iterations with each screen with a different though
            process.
          </Callout>
          <div className="grid w-full grid-cols-2 justify-items-center gap-y-6 lg:grid-cols-4">
            {["Iteration 1", "Iteration 2", "Iteration 3", "Iteration 4"].map(
              (label) => (
                <LabelChip key={label}>{label}</LabelChip>
              ),
            )}
          </div>
          <div className="mt-[-8px] w-full">
            <Figure
              src="/assets/cardplug/home-iterations.webp"
            darkSrc="/assets/cardplug/home-iterations-dark.webp"
              alt="Four home screen iterations side by side"
              width={1312}
              height={653}
              sizes={FULL}
            />
          </div>
          <Callout>
            We decided to move with the 4th Iteration. We validated our decision
            to move with the 4th Iteration because we had more room for
            scalability, and it was visually an upgrade to what previously
            existed.
          </Callout>
        </Section>

        {/* Cardplug Rewards Screens */}
        <Section>
          <SectionHeading lead="Cardplug Rewards" accent="Screens" />
          <LabelChip>Old Design</LabelChip>
          <div className="mt-[-8px] w-full">
            <Figure
              src="/assets/cardplug/rewards-old.webp"
            darkSrc="/assets/cardplug/rewards-old-dark.webp"
              alt="The original Cardplug rewards screens"
              width={1018}
              height={653}
              sizes="(max-width: 1439px) calc(100vw - 3rem), 1018px"
            />
          </div>
          <Prose>
            Cardplug rewards was focused at gamifying users experience. It was
            created to expand user growth by letting users refer their friends
            and earn a reward. We focused on redesigning only the interface
            because the experience was already working for Cardplug.
          </Prose>
          <LabelChip>New Design</LabelChip>
          <div className="mt-[-8px] w-full">
            <Figure
              src="/assets/cardplug/rewards-new.webp"
            darkSrc="/assets/cardplug/rewards-new-dark.webp"
              alt="The redesigned Cardplug rewards screens"
              width={1018}
              height={653}
              sizes="(max-width: 1439px) calc(100vw - 3rem), 1018px"
            />
          </div>
          <Callout>
            Because we had improved our design system and added illustrations,
            improvement on the UI was easy to implement.
          </Callout>
        </Section>

        {/* Metrics */}
        <section className="flex w-full flex-col gap-12 bg-sky px-8 py-14 lg:min-h-[516px] lg:flex-row lg:gap-16 lg:px-20 lg:py-[72px]">
          <div className="flex flex-col gap-4 lg:w-[620px] lg:shrink-0">
            <h2 className="font-display text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-ink">
              Metrics to{" "}
              <em className="font-medium italic text-deep">Measure Success</em>
            </h2>
            <p className="text-[clamp(1rem,1.39vw,20px)] leading-[1.4] text-deep">
              During my time on this project, my contribution led to these
              numbers.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {[
              "Improving the design system increased productivity for the design team by",
              "Test users who achieved goal on the product in comparison to the old design",
            ].map((label) => (
              <div key={label} className="flex max-w-[442px] flex-col">
                <p className="text-[clamp(1rem,1.67vw,24px)] leading-[1.42] text-deep">
                  {label}
                </p>
                <p className="font-display text-[clamp(2.5rem,5vw,72px)] leading-[1.1] font-medium text-ink">
                  100%
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learnt */}
        <Section>
          <SectionHeading lead="Lessons Learnt" accent="from Project" />
          <Prose>
            <p>
              Redesigning Cardplug was an interesting one because of the
              decisions that went into it. Balancing the new organisation goals
              and user needs had to be the priority.
            </p>
            <p>
              I had to rework the design system to fit the art direction we were
              going with.
            </p>
            <p>
              Keep an eye out for more feature that will be rolling out in the
              coming months.
            </p>
          </Prose>
        </Section>
      </main>

      <CaseStudyNav previousHref="/work/divest" nextHref="/work/transcripts" projectHref="#" />
    </>
  );
}
