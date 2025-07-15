import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import { TimelineDemo } from "./components/Home/Timeline";
import ContactSection from "./components/Home/ContactSection";
import PortfolioTabs from "./components/Home/PortfolioTabs";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TimelineDemo />
      <PortfolioTabs />
      <ContactSection />
    </div>
  );
}
