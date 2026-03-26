import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CheckUpBanner } from "@/components/sections/CheckUpBanner";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "SparxGrowth | London's Premier Digital Marketing Agency",
  description:
    "SparxGrowth is London's leading digital marketing agency. We help ambitious brands grow faster through data-driven SEO, PPC, social media, and conversion strategies.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <StatsSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CheckUpBanner />
      <BlogPreview />
      <FinalCTASection />
    </>
  );
}
