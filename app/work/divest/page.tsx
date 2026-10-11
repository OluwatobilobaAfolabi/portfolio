import type { Metadata } from "next";
import Image from "next/image";
import {
  Callout,
  GlyphTile,
  Prose,
  SectionHeading,
} from "@/app/components/case-study/primitives";
import CaseStudyNav from "@/app/components/case-study/CaseStudyNav";

export const metadata: Metadata = {
  title: "Divest Money Xchange Case Study — Afolabi Oluwatobiloba",
  description:
    "Divest focuses on financial mobility — bridging fiat currencies and digital assets so value moves across borders without the friction of traditional banking.",
};

const COLUMN = "(max-width: 1439px) calc(100vw - 3rem), 1313px";

/** The five audiences, with each glyph's frame insets from the artboard. */
const PERSONAS = [
  {
    icon: "/assets/divest/icon-treestructure.svg",
    inset: "12.5% 12.5% 12.5% 3.13%",
    title: "Relatives",
    copy: "Send funds to your loved ones.",
  },
  {
    icon: "/assets/divest/icon-backpack.svg",
    inset: "3.13% 15.63% 9.38% 15.63%",
    title: "Frequent Traveller",
    copy: "Spend your money on the move.",
  },
  {
    icon: "/assets/divest/icon-laptop.svg",
    inset: "18.75% 6.25% 15.63% 6.25%",
    title: "Remote Workers",
    copy: "Send funds to your loved ones.",
  },
  {
    icon: "/assets/divest/icon-briefcase.svg",
    inset: "9.38% 9.38% 15.63% 9.38%",
    title: "Small Business Owner",
    copy: "Send funds to your loved ones.",
  },
  {
    icon: "/assets/divest/icon-student.svg",
    inset: "9.37% 9.37% 12.46% 9.38%",
    title: "International Students",
    copy: "Receive money to cover upkeep.",
  },
];

const SCREENS = Array.from(
  { length: 10 },
  (_, i) => `/assets/divest/screen-${String(i + 1).padStart(2, "0")}.webp`,
);

/** Dashed aside carrying the 24px Info glyph. */
function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-full items-center justify-center gap-[10px] rounded-[24px] border border-dashed border-dash bg-paper p-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/divest/info.svg"
        alt=""
        width={24}
        height={24}
        className="glyph-mono block size-6 shrink-0"
      />
      <p className="font-display text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-medium tracking-[0.02em] text-ink">
        {children}
      </p>
    </div>
  );
}

export default function DivestCaseStudy() {
  return (
    <>
      <main
        id="top"
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-24 px-6 pt-24 pb-[136px] md:px-10 lg:gap-[104px] lg:px-16"
      >
        {/* Intro */}
        <section className="flex w-full flex-col items-center gap-8">
          <div className="relative aspect-[1313/583] w-full overflow-hidden">
            <Image
              src="/assets/divest/hero.webp"
              alt="A woman in yellow holding up a phone running the Divest app"
              fill
              priority
              sizes={COLUMN}
              className="object-cover"
            />
          </div>
          <div className="flex w-full max-w-[1090px] flex-col gap-8">
            <h1 className="font-display text-center text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium text-balance text-ink lg:whitespace-nowrap">
              Divest{" "}
              <em className="font-medium italic text-muted">Money Xchange</em>{" "}
              Case Study
            </h1>
            <div className="flex flex-col items-center gap-4">
              <Prose width={855}>
                <p>
                  <strong className="font-bold">Divest</strong> focuses on
                  financial mobility. The goal is to bridge the gap between
                  traditional fiat currencies and digital assets (crypto),
                  making it easy to move{" "}
                  <strong className="font-bold italic">value</strong> across
                  borders without the friction of traditional banking or the
                  complexity of raw blockchain tech.
                </p>
              </Prose>
              <Prose width={855}>
                <p>
                  As of early 2026, <strong className="font-bold">Divest</strong>{" "}
                  launched Divest V3, which significantly shifted our product
                  strategy. We moved from a single-focus &quot;crypto-to-cash&quot;
                  product to a dual-interface experience:
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    <strong className="font-bold">Money Xchange:</strong> A
                    high-speed remittance service allowing users to send fiat
                    (cash) between Nigeria, Kenya, Ghana, and South Africa.
                  </li>
                  <li>
                    <strong className="font-bold">Crypto-to-Cash:</strong> Their
                    original core engine, which allows for the instant
                    conversion of digital assets (like USDT or BTC) into local
                    currency.
                  </li>
                </ul>
              </Prose>
            </div>
          </div>
        </section>

        {/* Money Xchange focus */}
        <section className="flex w-full flex-col items-center gap-8">
          <SectionHeading
            lead="This Case Study is Focused on my Work on"
            accent="Money Xchange"
          />
          <div className="artboard relative aspect-[1313/523] w-full overflow-hidden">
            <Image
              src="/assets/divest/mockup-result.webp"
              alt="Money Xchange screens laid out as a mockup composition"
              width={1920}
              height={1080}
              sizes={COLUMN}
              className="absolute top-[-15.49%] left-0 h-[141.22%] w-full max-w-none"
            />
          </div>
        </section>

        {/* Problem Definition */}
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
            Traditional financial systems in Africa were not built for the
            modern, digital-first freelancer or small-scale cross-border
            merchant. These users require a platform that can handle both
            digital assets and fiat currency without the complexity of switching
            between multiple apps. Divest identified a need for a unified
            &apos;Value Movement&apos; platform where Money Xchange serves as the
            fiat bridge, allowing users to move liquidity across borders without
            being penalized by the inefficiencies of traditional correspondent
            banking.
          </Prose>
          <div className="flex w-full items-center justify-center rounded-[24px] border border-dashed border-dash bg-paper p-8">
            <p className="font-display flex-1 text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-medium tracking-[0.02em] text-ink">
              &quot;Cross-border payments within Africa are currently slow,
              expensive, and unpredictable, forcing users to rely on fragmented
              systems that lack transparency and speed.&quot;
            </p>
          </div>
        </section>

        {/* Audience */}
        <section className="flex w-full flex-col items-center gap-8 opacity-96">
          <div className="relative aspect-[1312/583] w-full overflow-hidden">
            <div className="absolute top-0 left-1/2 h-[144.08%] w-full -translate-x-1/2">
              <Image
                src="/assets/divest/photo-base.webp"
                alt=""
                aria-hidden
                fill
                sizes={COLUMN}
                className="object-cover"
              />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/assets/divest/photo-overlay.webp"
                  alt="Commuters on a train, one checking their phone"
                  width={1968}
                  height={2624}
                  sizes={COLUMN}
                  className="absolute top-[-67.38%] left-[0.07%] h-[208.25%] w-full max-w-none"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-[1090px] flex-col items-center gap-8">
            <SectionHeading lead="Who Does This" accent="Product Serve?" nowrap />
            <div className="flex w-full max-w-[1063px] flex-wrap items-start justify-center gap-8">
              {PERSONAS.map(({ icon, inset, title, copy }) => (
                <div
                  key={title}
                  className="flex w-full max-w-[333px] flex-col items-center gap-6"
                >
                  <GlyphTile src={icon} inset={inset} size={56} mono />
                  <div className="flex w-full flex-col items-center text-center leading-[1.6] text-ink">
                    <p className="w-full text-[clamp(1.125rem,1.67vw,24px)] font-bold tracking-[0.02em]">
                      {title}
                    </p>
                    <p className="w-full text-[clamp(1rem,1.39vw,20px)] tracking-[0.02em]">
                      {copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="Research" accent="Done" />
          <div className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/divest/binoculars.svg"
              alt=""
              width={202}
              height={202}
              className="block size-[clamp(120px,14vw,202px)] shrink-0"
            />
            <p className="text-center text-[clamp(1rem,1.39vw,20px)] leading-[normal] font-medium whitespace-nowrap text-ink">
              What we discovered
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-8">
            <div className="flex w-full max-w-[867px] items-center justify-center rounded-[24px] border border-dashed border-dash bg-paper p-8">
              <p className="font-display flex-1 text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-medium tracking-[0.02em] text-ink">
                &quot;To understand the cross-border landscape, I conducted a
                competitive audit of market leaders like Wise, Grey, and LemFi.
                By distilling insights from their user journeys, I developed
                several design iterations and validated them through A/B testing
                with a select group of target users to ensure the most intuitive
                experience.&quot;
              </p>
            </div>
            <div className="flex w-full max-w-[867px] items-center justify-center rounded-[24px] border border-dashed border-dash bg-paper p-8">
              <p className="font-display flex-1 text-center text-[clamp(1rem,1.39vw,20px)] leading-[1.92] font-medium tracking-[0.02em] text-ink">
                &quot;I conducted qualitative user interviews with a cohort of
                Nigerians who frequently send money abroad to better understand
                their behaviors and frustrations. These sessions provided deep
                insights into the real-world friction they encounter, directly
                informing our team&rsquo;s strategy in architecting a more
                seamless and intuitive cross-border flow.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* UI Iterations */}
        <section className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full max-w-[1090px] flex-col gap-8">
            <SectionHeading lead="UI" accent="Iterations" />
            <Prose width={855}>
              The team iterated a lot because we really wanted to present the
              best interface for users that makes navigation and interaction
              with the product really easy.
            </Prose>
          </div>
          <InfoNote>
            Unfortunately the iteration screens cannot be displayed for public
            view.
          </InfoNote>
        </section>

        {/* Final design */}
        <section className="flex w-full flex-col items-center gap-8">
          <SectionHeading
            lead="What Does The"
            accent="Final Design"
            trail="Look Like?"
          />
          <InfoNote>Scroll horizontally to view the screens</InfoNote>
          {/* 10 x 322px stills at gap-24 run 3436px wide, hence the scroll rail */}
          <div className="-mx-6 w-[calc(100%+3rem)] overflow-x-auto md:-mx-10 md:w-[calc(100%+5rem)] lg:-mx-16 lg:w-[calc(100%+8rem)]">
            <div className="flex w-max items-center gap-6 px-6 md:px-10 lg:px-16">
              {SCREENS.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Divest Money Xchange screen ${i + 1}`}
                  width={322}
                  height={652}
                  sizes="322px"
                  className="h-[652px] w-[322px] shrink-0 object-cover"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="flex w-full flex-col gap-10 bg-plum px-8 py-14 lg:min-h-[450px] lg:flex-row lg:justify-between lg:gap-16 lg:px-20 lg:py-20">
          <div className="flex flex-col gap-2 text-white lg:w-[620px] lg:shrink-0">
            <h2 className="font-display text-[clamp(2rem,5vw,72px)] leading-[normal] font-medium">
              Metrics to{" "}
              <em className="font-medium italic text-band-muted">
                Measure Success
              </em>
            </h2>
            <p className="text-[clamp(1rem,1.39vw,20px)] leading-[1.41] tracking-[0.02em]">
              During my time at Divest as a product designer, my contribution to
              the companies growth and success shows as follows:
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:w-[443px]">
            {[
              { label: "From 50K+ Users to", value: "200K+" },
              { label: "Transaction Volume", value: "$200M+" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <p className="text-[clamp(1.125rem,1.67vw,24px)] leading-[1.41] tracking-[0.02em] text-white">
                  {label}
                </p>
                <p className="font-display text-[clamp(2.5rem,5vw,72px)] leading-[normal] font-medium text-mint">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons Learnt */}
        <section className="flex w-full max-w-[1090px] flex-col items-center gap-8">
          <SectionHeading lead="Lessons Learnt" accent="from Project" nowrap />
          <Prose width={855}>
            <p>
              When sending money internationally, users experience high anxiety
              regarding hidden fees and fluctuating exchange rates. I initially
              assumed a simplified UI would reduce friction.
            </p>
            <p>
              However, I learned that surfacing a granular breakdown explicitly
              showing the amount sent, exchange rate, transfer fee, and exact
              amount received didn&rsquo;t overwhelm users. Instead, this radical
              transparency built trust and directly increased conversion.
            </p>
          </Prose>
        </section>
      </main>

      <CaseStudyNav
        nextHref="/work/cardplug"
        projectHref="https://usedivest.com/"
      />
    </>
  );
}
