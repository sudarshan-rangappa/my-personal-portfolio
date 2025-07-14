import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import { TimelineDemo } from "./components/Home/Timeline";
import ContactSection from "./components/Home/ContactSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TimelineDemo />
      <ContactSection />
    </div>
  );
}
