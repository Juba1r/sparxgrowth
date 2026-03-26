"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { CheckCircle, ArrowRight } from "lucide-react";

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
    <section className="py-24 relative overflow-hidden">
      <div className="section-container">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden p-1"
            style={{ background: "linear-gradient(135deg, #1e3a8a, #0e7490, #1e3a8a)" }}>
            <div className="relative rounded-[22px] p-10 sm:p-16"
              style={{ background: "linear-gradient(135deg, #020818 0%, #0a1a35 50%, #020818 100%)" }}>

              {/* Glow orbs */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
                style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
              <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full blur-3xl opacity-15"
                style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-cyan-400 border border-cyan-400/30"
                    style={{ background: "rgba(6,182,212,0.08)" }}>
                    <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>✦</motion.span>
                    Free &amp; No Obligation
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5">
                    Get Your Free{" "}
                    <span className="glow-text">Visibility Check-Up</span>
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">
                    Discover exactly where your digital marketing is losing money and missing opportunities. Our experts will analyse your entire online presence for free.
                  </p>
                  <CTAButton href="/free-visibility-checkup" size="lg">
                    Claim Your Free Check-Up
                  </CTAButton>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <CheckCircle size={16} className="text-cyan-400 shrink-0" />
                      <span className="text-sm text-white/80 font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
