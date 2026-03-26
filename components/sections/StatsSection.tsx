"use client";

import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="py-24 relative">
      {/* Gradient line top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), rgba(6,182,212,0.4), transparent)" }} />

      <div className="section-container">
        <AnimatedSection className="text-center mb-14">
          <span className="section-tag mb-5 inline-flex">Our Results</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-5">
            Numbers That <span className="glow-text">Speak for Themselves</span>
          </h2>
        </AnimatedSection>

        <StaggeredList
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-8 text-center relative overflow-hidden group"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 60%)" }}
              />
              <div className="text-5xl sm:text-6xl font-heading font-bold mb-2">
                <span className="glow-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </span>
              </div>
              <p className="text-white/60 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </StaggeredList>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)" }} />
    </section>
  );
}
