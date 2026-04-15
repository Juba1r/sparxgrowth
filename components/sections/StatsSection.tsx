"use client";

import {
  AnimatedSection,
  StaggeredList,
} from "@/components/ui/AnimatedSection";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section className="w-full py-24 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(6,66,38,0.4), rgba(27,144,88,0.4), transparent)",
        }}
      />

      <div className="section-container">
        <AnimatedSection className="text-center mb-12 flex flex-col items-center gap-4">
          <span className="section-tag">Our Results</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight text-balance max-w-3xl">
            Numbers That <span className="glow-text">Speak for Themselves</span>
          </h2>
          <p className="text-white/60 max-w-2xl text-lg leading-relaxed text-balance">
            Real results, delivered for real London businesses.
          </p>
        </AnimatedSection>

        <StaggeredList
          className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mx-auto justify-center"
          staggerDelay={0.12}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card p-4 sm:p-6 lg:p-8 text-center relative overflow-hidden group flex flex-col justify-center"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(27,144,88,0.15) 0%, transparent 70%)",
                }}
              />
              <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-1 sm:mb-2 whitespace-nowrap tracking-tight flex items-center justify-center">
                <span className="glow-text">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </span>
              </div>
              <p className="text-white/60 text-sm font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </StaggeredList>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(27,144,88,0.3), transparent)",
        }}
      />
    </section>
  );
}
