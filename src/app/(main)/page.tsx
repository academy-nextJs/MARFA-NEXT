import HeroSection from "@/components/HomeContainer/HeroSectionComponent/HeroSection";
import LandingPage from "./landing/page";

export default async function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center m-10 text-2xl">
          <HeroSection />
        </div>
        <LandingPage />
      </main>
    </>
  );
}
