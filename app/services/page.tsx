import type { Metadata } from "next";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Digital Marketing Services",
  description: "Explore SparxGrowth's full suite of digital marketing services including SEO, PPC, social media, content marketing, and more.",
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '128px' }}>
      <div style={{ paddingTop: '64px', paddingBottom: '64px' }} className="section-container-sm text-center">
        <AnimatedSection>
          <span className="section-tag mb-6 inline-flex">What We Do</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Our <span className="glow-text">Services</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto font-subheading">
            A complete suite of digital marketing services designed to fuel your growth and maximise ROI.
          </p>
        </AnimatedSection>
      </div>
      <ServicesSection hideHeader hideViewAll compact />
      <FinalCTASection />
    </div>
  );
}
