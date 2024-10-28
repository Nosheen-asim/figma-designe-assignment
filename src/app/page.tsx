// pages/Home.tsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CardSection from "../components/CardSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-8 lg:px-16 bg-[#252B42] overflow-hidden">
      <Navbar />
      <HeroSection />
      <CardSection />
    </div>
  );
}

