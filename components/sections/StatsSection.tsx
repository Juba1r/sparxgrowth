"use client";

import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="w-full py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.4), rgba(6,182,212,0.4), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 w-full flex flex-col items-center gap-5">
          <span className="section-tag inline-flex">Our Results</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight text-balance max-w-3xl mx-auto">
            Numbers That <span className="glow-text">Speak for Themselves</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed text-center text-balance">
            Real results, delivered for real London businesses.
          </p>
        </AnimatedSection>

        <StaggeredList className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-auto justify-center" staggerDelay={0.12}>
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-8 text-center relative overflow-hidden group">
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.1) 0%, transparent 60%)" }}
              />
              <div className="text-5xl sm:text-6xl font-heading font-bold mb-2">
                <span className="glow-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2} />
                </span>
              </div>
              <p className="text-white/60 text-sm font-medium leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </StaggeredList>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)" }} />
    </section>
  );
}
