import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import BottomNav from "./components/BottomNav";

export default function Home() {
  return (
    <div className="cv-dots min-h-screen font-cv-sans">
      <main
        id="top"
        className="mx-auto w-full max-w-[1440px] px-6 pt-20 pb-[136px] md:px-8 lg:px-6"
      >
        <Hero />
        <div className="mt-28 lg:mt-36">
          <SelectedWorks />
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
