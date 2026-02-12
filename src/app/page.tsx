import dynamic from 'next/dynamic';
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/ui/Marquee";

// Dynamic imports for below-fold sections to reduce initial bundle size
const LivesSpecialization = dynamic(() => import("@/components/sections/LivesSpecialization"));
const ProblemSection = dynamic(() => import("@/components/sections/ProblemSection"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"));
const CtaSection = dynamic(() => import("@/components/sections/CtaSection"));

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
