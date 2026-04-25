import type { Metadata } from "next";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "SparxGrowth provides specialist digital marketing for hospitality, restaurants, e-commerce, healthcare, professional services, and more.",
};

export default function IndustriesPage() {
  return (
    <div style={{ paddingTop: '128px' }}>
      <div style={{ paddingTop: '64px', paddingBottom: '64px' }} className="section-container-sm text-center">
        <AnimatedSection>
          <span className="section-tag mb-6 inline-flex">Sector Expertise</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Industries We <span className="glow-text">Specialise In</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto font-subheading">
            Sector-specific digital marketing strategies that resonate with your exact audience.
          </p>
        </AnimatedSection>
      </div>
      <IndustriesSection hideHeader />
      <FinalCTASection />
    </div>
  );
}
