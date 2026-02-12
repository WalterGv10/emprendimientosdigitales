import HeroSection from "@/components/sections/HeroSection";
import LivesSpecialization from "@/components/sections/LivesSpecialization";
import Marquee from "@/components/ui/Marquee";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import CtaSection from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-slate-950">
        <Marquee />
      </div>
      <LivesSpecialization />
      <ProblemSection />
      <div className="bg-slate-50">
        <Marquee />
      </div>
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
