import Image from "next/image";
import HeroSection from "./components/Home/HeroSection";
import { TimelineDemo } from "./components/Home/Timeline";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TimelineDemo />
    </div>
  );
}
