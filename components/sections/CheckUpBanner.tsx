"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Full website SEO audit",
  "Competitor analysis",
  "Google Ads account review",
  "Social media assessment",
  "Actionable growth roadmap",
  "100% free, no obligation",
];

export function CheckUpBanner() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden p-px"
            style={{ background: "linear-gradient(135deg, #064226, #1b9058, #064226)" }}>
            <div className="relative rounded-[calc(1.5rem-1px)] p-8 sm:p-12 lg:p-16"
              style={{ background: "linear-gradient(135deg, #020d06 0%, #061a0e 50%, #020d06 100%)" }}>

              {/* Glow orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ background: "radial-gradient(circle, #1b9058, transparent)" }} />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl opacity-15 pointer-events-none"
                style={{ background: "radial-gradient(circle, #ffde59, transparent)" }} />

              {/* Center-aligned header */}
              <div className="relative text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                  style={{ color: '#ffde59', borderColor: 'rgba(255,222,89,0.35)', background: 'rgba(255,222,89,0.07)' }}>
                  <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>✦</motion.span>
                  Free &amp; No Obligation
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-5 leading-tight">
                  Get Your Free{" "}
                  <span className="glow-text">Visibility Check-Up</span>
                </h2>
                <p className="text-white/60 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                  Discover exactly where your digital marketing is losing money and missing opportunities. Our experts will analyse your entire online presence for free.
                </p>
                <CTAButton href="/free-visibility-checkup" size="lg">
                  Claim Your Free Check-Up
                </CTAButton>
              </div>

              {/* Benefits grid */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <CheckCircle size={16} className="shrink-0" style={{ color: '#1b9058' }} />
                    <span className="text-sm text-white/80 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
