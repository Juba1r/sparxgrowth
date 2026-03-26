"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { industries } from "@/lib/data";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { ArrowRight, Building2, UtensilsCrossed, ShoppingBag, Briefcase, Heart, Home, Cpu, GraduationCap } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Building2, UtensilsCrossed, ShoppingBag, Briefcase, Heart, Home, Cpu, GraduationCap,
};

export function IndustriesSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
      />

      <div className="section-container relative">
        {!hideHeader && (
          <AnimatedSection className="text-center mb-16">
            <span className="section-tag mb-5 inline-flex">Industries</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
              We Know Your{" "}
              <span className="glow-text">Industry</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Sector-specific expertise means campaigns that resonate with your exact audience.
            </p>
          </AnimatedSection>
        )}

        <StaggeredList
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          staggerDelay={0.07}
        >
          {industries.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                <motion.div
                  className="group relative glass-card p-6 text-center cursor-pointer overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 40%, ${ind.color}20 0%, transparent 70%)`,
                    }}
                  />
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ background: `${ind.color}15`, border: `1px solid ${ind.color}25` }}
                  >
                    <Icon size={22} style={{ color: ind.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-white/90">
                    {ind.title}
                  </h3>
                  <div className="flex items-center justify-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                    style={{ color: ind.color }}>
                    Explore <ArrowRight size={10} />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </StaggeredList>
      </div>
    </section>
  );
}
