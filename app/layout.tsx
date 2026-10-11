import type { Metadata } from "next";
import {
  Instrument_Sans,
  Instrument_Serif,
  JetBrains_Mono,
  Newsreader,
  Ubuntu,
} from "next/font/google";
import ThemeToggle from "./components/ThemeToggle";
import "./globals.css";

/* Stand-in for "Test Martina Plantijn" — a Plantin-derived serif with a true
   italic, which the display headings rely on. */
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-newsreader",
  display: "swap",
});

/* Used only by the Bitcoin Transcripts logotype. */
const ubuntu = Ubuntu({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700"],
  variable: "--font-ubuntu",
  display: "swap",
});

/* "Live File" faces — the home page. */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afolabi Oluwatobiloba — Senior Product Designer",
  description:
    "Senior Product Designer with 5 years of experience crafting intuitive, data-driven web and mobile experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${ubuntu.variable} ${instrumentSerif.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          // Resolve the theme before the first paint so the page never flashes
          // light before switching to dark.
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <ThemeToggle />
      </body>
    </html>
  );
}
