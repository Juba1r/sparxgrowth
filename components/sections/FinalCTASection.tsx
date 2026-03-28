"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { Phone } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
        />
      </div>

      {/* Centred content — CTA sections are an explicit exception to the left-align rule */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <AnimatedSection>
          <span className="section-tag mb-6 inline-flex">Let&apos;s Grow Together</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mt-4 mb-6 leading-tight">
            Ready to <span className="glow-text">Accelerate</span> Your Growth?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute strategy call with our London-based team. No fluff, just honest advice and a clear roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/contact" size="lg">
              <Phone size={16} />
              Book Your Free Strategy Call
            </CTAButton>
            <CTAButton href="/free-visibility-checkup" variant="outline" size="lg" icon={false}>
              Get Your Free Check-Up
            </CTAButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-white/40">
            {["No contracts", "Results in 90 days", "London-based team"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400" />
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
