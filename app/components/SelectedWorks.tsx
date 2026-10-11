import Image from "next/image";
import WorkCard from "./WorkCard";

/* Artwork sizes are expressed in cqw against the 646px-wide media window of
   the artboard, so every composition keeps its designed proportions as the
   grid narrows. */

const CARD_SIZES = "(max-width: 767px) 100vw, (max-width: 1439px) 50vw, 646px";

function DivestMedia() {
  return (
    <Image
      src="/assets/work-divest.png"
      alt="Divest app shown on a phone held up to camera"
      fill
      sizes={CARD_SIZES}
      className="object-cover"
    />
  );
}

function CardplugMedia() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <Image
        src="/assets/work-divest.png"
        alt=""
        fill
        sizes={CARD_SIZES}
        className="object-cover"
      />
      <Image
        src="/assets/work-cardplug.png"
        alt=""
        fill
        sizes={CARD_SIZES}
        className="object-cover"
      />
    </div>
  );
}

function TranscriptsMedia() {
  return (
    <div className="flex size-full items-center justify-center bg-cv-bg">
      <div className="flex items-center justify-center gap-[1.775cqw]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/bitcoin-circle.svg"
          alt=""
          width={129}
          height={129}
          className="block size-[19.967cqw] shrink-0"
        />
        <span className="font-logo text-[14.199cqw] leading-[normal] font-bold italic whitespace-nowrap text-cv-ink">
          Transcripts
        </span>
      </div>
    </div>
  );
}

function BitsaccoMedia() {
  return (
    <div className="flex size-full items-center justify-center bg-night">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/bitsacco-logo.svg"
        alt="Bitsacco"
        width={547}
        height={547}
        className="block size-[84.675cqw]"
      />
    </div>
  );
}

function ZeusMedia() {
  return (
    <div className="relative size-full overflow-hidden bg-cv-bg">
      <Image
        src="/assets/work-zeus-bg.png"
        alt=""
        aria-hidden
        width={1000}
        height={1131}
        sizes="(max-width: 767px) 109vw, (max-width: 1439px) 55vw, 701px"
        className="pointer-events-none absolute top-0 left-[-4.23%] h-[111.92%] w-[108.46%] max-w-none object-cover"
      />
      <div className="absolute left-1/2 top-1/2 flex w-[50.619cqw] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[2.477cqw]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/zeus-logo.svg"
          alt="Zeus Wallet"
          width={327}
          height={126}
          className="block h-[19.507cqw] w-full"
        />
        <span className="font-grotesk w-full text-center text-[2.786cqw] leading-[1.222] font-semibold text-white">
          Zeus Wallet
        </span>
      </div>
    </div>
  );
}

type Project = {
  /** The artboard's name on the canvas. */
  frame: string;
  title: string;
  description: string;
  media: React.ReactNode;
  href?: string;
};

const PROJECTS: Project[] = [
  {
    frame: "Divest.fig",
    title: "Divest",
    href: "/work/divest",
    description:
      "Bridging the gap between fiat currencies and digital assets, making it easy to move value across borders.",
    media: <DivestMedia />,
  },
  {
    frame: "Cardplug.fig",
    title: "Cardplug Mobile App Redesign",
    href: "/work/cardplug",
    description:
      "A secure digital marketplace that enables users to instantly convert unused gift cards into cash.",
    media: <CardplugMedia />,
  },
  {
    frame: "BitcoinTranscripts.fig",
    href: "/work/transcripts",
    title: "Bitcoin Transcripts 2.0",
    description:
      "An organized, searchable FOSS archive of transcripts from bitcoin meetups, conferences, podcasts, and more.",
    media: <TranscriptsMedia />,
  },
  {
    frame: "Bitsacco.fig",
    title: "Bitsacco 2.0",
    description:
      "Bitsacco is a platform that aims to revolutionise personal and collective savings in Bitcoin.",
    media: <BitsaccoMedia />,
  },
  {
    frame: "ZeusWallet.fig",
    href: "/work/zeus",
    title: "Zeus Wallet - Bitcoin Designathon ’25",
    description:
      "Zeus Wallet puts the Lightning Network in your pocket. Connect to your own Bitcoin node or run one right on your phone.",
    media: <ZeusMedia />,
  },
];

export default function SelectedWorks() {
  return (
    <section id="projects" className="flex flex-col items-start gap-8">
      <div className="flex flex-col gap-2">
        <p className="font-cv-mono text-[12px] text-cv-dim">6 frames · Page 1</p>
        <h2 className="font-cv-serif text-[clamp(2rem,4.5vw,64px)] leading-[0.95] tracking-[-0.02em] text-cv-ink">
          Selected <em className="text-cv-select not-italic italic">Works</em>
        </h2>
      </div>

      <div className="grid w-full grid-cols-1 items-stretch gap-x-6 gap-y-12 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <WorkCard
            key={project.title}
            frame={project.frame}
            title={project.title}
            description={project.description}
            media={project.media}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
}
