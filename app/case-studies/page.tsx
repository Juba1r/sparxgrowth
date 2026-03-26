import type { Metadata } from "next";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Real results from real clients. Explore how SparxGrowth has helped 250+ brands achieve extraordinary digital marketing results.",
};

const caseStudies = [
  {
    client: "The Grand Mayfair Hotel",
    industry: "Hospitality",
    service: "SEO + PPC",
    result: "+340% Direct Bookings",
    duration: "6 months",
    color: "#f59e0b",
    desc: "Full digital transformation including technical SEO, content strategy, and targeted Google Ads campaigns that tripled direct bookings.",
  },
  {
    client: "Luxe Eats Group",
    industry: "Restaurant",
    service: "SEO + Social Media",
    result: "#1 Google Rankings",
    duration: "4 months",
    color: "#ef4444",
    desc: "Achieved #1 rankings for all primary search terms and built an engaged social following of 50k+ across platforms.",
  },
  {
    client: "TechLaunch UK",
    industry: "Technology",
    service: "PPC + Content",
    result: "5x ROAS",
    duration: "3 months",
    color: "#6366f1",
    desc: "Restructured Google and LinkedIn Ads campaigns to achieve 5x return on ad spend while reducing cost-per-acquisition by 40%.",
  },
  {
    client: "Bloom Wellness Clinics",
    industry: "Healthcare",
    service: "SEO + Local",
    result: "3x Patient Enquiries",
    duration: "5 months",
    color: "#06b6d4",
    desc: "Local SEO strategy that pushed all clinic locations to the top of Google Maps and tripled inbound patient enquiries.",
  },
  {
    client: "Prime Properties London",
    industry: "Real Estate",
    service: "PPC + Social",
    result: "4.2x Lead Generation",
    duration: "4 months",
    color: "#8b5cf6",
    desc: "Targeted paid campaigns across Google and Meta platforms generating qualified buyer and vendor leads at exceptional cost efficiency.",
  },
  {
    client: "FreshBox Ecommerce",
    industry: "E-Commerce",
    service: "SEO + Email + CRO",
    result: "£2M Revenue Added",
    duration: "8 months",
    color: "#10b981",
    desc: "Combined organic growth, email automation, and conversion optimisation to add over £2M in annual recurring revenue.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div style={{ paddingTop: '128px' }}>
      <div style={{ paddingTop: '64px', paddingBottom: '64px' }} className="section-container-sm text-center">
        <AnimatedSection>
          <span className="section-tag mb-6 inline-flex">Proven Results</span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
            Our <span className="glow-text">Case Studies</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">
            Real clients. Real results. Here&apos;s how we&apos;ve helped ambitious brands achieve extraordinary growth.
          </p>
        </AnimatedSection>
      </div>

      <section className="pb-24">
        <div className="section-container">
          <StaggeredList
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.1}
          >
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="glass-card p-7 group cursor-pointer relative overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${cs.color}15, transparent 60%)` }}
                />
                <div className="flex items-start justify-between mb-6">
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: `${cs.color}20`, color: cs.color, border: `1px solid ${cs.color}30` }}
                    >
                      {cs.industry}
                    </span>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full border border-white/[0.1] text-white/50">
                      {cs.service}
                    </span>
                  </div>
                  <span className="text-xs text-white/30">{cs.duration}</span>
                </div>

                <div
                  className="text-2xl font-heading font-bold mb-1"
                  style={{ color: cs.color }}
                >
                  {cs.result}
                </div>
                <h3 className="text-white font-semibold text-base mb-3">{cs.client}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{cs.desc}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      <FinalCTASection />
    </div>
  );
}
