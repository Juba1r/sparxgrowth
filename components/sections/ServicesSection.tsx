"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/data";
import {
  AnimatedSection,
  StaggeredList,
} from "@/components/ui/AnimatedSection";
import {
  ArrowRight,
  Search,
  Target,
  Share2,
  FileText,
  Monitor,
  Mail,
  BarChart2,
} from "lucide-react";

const iconMap: Record<
  string,
  React.ComponentType<{
    size?: number;
    className?: string;
    style?: React.CSSProperties;
  }>
> = {
  Search,
  Target,
  Share2,
  FileText,
  Monitor,
  Mail,
  BarChart2,
};

export function ServicesSection({
  hideHeader = false,
  hideViewAll = false,
  compact = false,
}: {
  hideHeader?: boolean;
  hideViewAll?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      className={
        compact ? "pb-14 lg:pb-20 relative" : "py-16 lg:py-24 relative"
      }
    >
      <div className="section-container">
        {!hideHeader && (
          <AnimatedSection className="text-center mb-12 flex flex-col items-center gap-4">
            <span className="section-tag">Our Services</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight text-balance max-w-3xl">
              Everything You Need to{" "}
              <span className="glow-text">Dominate Online</span>
            </h2>
            <p className="text-white/60 max-w-2xl text-lg leading-relaxed text-balance">
              Full-stack digital marketing services that work together to
              maximise your growth.
            </p>
          </AnimatedSection>
        )}

        {/* 
          StaggeredList uses display:contents on each wrapper motion.div
          so the grid layout is applied directly to the Link/card children.
          7 cards → 4+3, the last row is naturally left-aligned in a grid.
          We use justify-items-center + a special last-row trick with CSS.
        */}
        <StaggeredList
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          staggerDelay={0.07}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="h-full"
              >
                <motion.div
                  className="glass-card p-6 h-full flex flex-col items-center text-center group cursor-pointer relative overflow-hidden"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${service.color}18 0%, transparent 60%)`,
                    }}
                  />
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{
                      background: `${service.color}20`,
                      border: `1px solid ${service.color}30`,
                    }}
                  >
                    <Icon size={20} style={{ color: service.color }} />
                  </div>
                  <div
                    className="text-2xl font-heading font-bold mb-1"
                    style={{ color: service.color }}
                  >
                    {service.stat}
                  </div>
                  <div className="text-xs text-white/50 mb-4 font-medium">
                    {service.statLabel}
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                    {service.description}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-xs font-semibold mt-auto transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: service.color }}
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </StaggeredList>

        {!hideViewAll && (
          <AnimatedSection className="flex justify-center mt-10" delay={0.3}>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/20 px-7 py-3 rounded-full transition-all"
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}
