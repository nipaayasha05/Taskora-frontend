import Hero from "@/components/modules/hompage/Hero";
import HowItWorks from "@/components/modules/hompage/HowItWorks";
import WhyTaskora from "@/components/modules/hompage/WhyUs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />
      <HowItWorks />
      <WhyTaskora />
    </div>
  );
}
