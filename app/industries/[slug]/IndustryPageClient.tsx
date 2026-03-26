"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { services } from "@/lib/data";
import { CheckCircle, TrendingUp, Users, BarChart2 } from "lucide-react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

interface Industry {
  slug: string;
  title: string;
  icon: string;
  description: string;
  color: string;
}

const industryStats: Record<string, Array<{ value: number; suffix: string; label: string }>> = {
  default: [
    { value: 320, suffix: "%", label: "Avg Traffic Increase" },
    { value: 4, suffix: "x", label: "Lead Generation" },
    { value: 89, suffix: "%", label: "Client Satisfaction" },
    { value: 60, suffix: "+", label: "Brands Helped" },
  ],
};

export function IndustryPageClient({ industry }: { industry: Industry }) {
  const stats = industryStats[industry.slug] || industryStats.default;

  const relevantServices = services.slice(0, 4);

  return (
    <div style={{ paddingTop: '128px' }}>
      {/* Hero */}
      <section style={{ paddingTop: '40px', paddingBottom: '96px' }} className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-[0.08]"
            style={{ background: industry.color }}
          />
        </div>

        <div className="section-container relative">
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-white/80">{industry.title}</span>
          </div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold"
              style={{ background: `${industry.color}20`, border: `1px solid ${industry.color}40`, color: industry.color }}
            >
              {industry.title} Marketing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6"
            >
              Digital Marketing for{" "}
              <span style={{
                background: `linear-gradient(135deg, ${industry.color}, #06b6d4)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {industry.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-xl leading-relaxed mb-8"
            >
              {industry.description} Our specialist team understands the unique challenges and opportunities in your sector, delivering campaigns that drive real business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 flex-wrap"
            >
              <CTAButton href="/contact" size="lg">Get a Free Strategy Session</CTAButton>
              <CTAButton href="/free-visibility-checkup" variant="outline" size="lg" icon={false}>
                Free Visibility Audit
              </CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/[0.06]">
        <div className="section-container">
          <StaggeredList
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-8 text-center group relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${industry.color}15, transparent 60%)` }}
                />
                <div className="text-5xl font-heading font-bold mb-2" style={{ color: industry.color }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Services for this industry */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-5">
              Services for <span className="glow-text">{industry.title}</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We apply our proven methodologies specifically to the needs of {industry.title.toLowerCase()} businesses.
            </p>
          </AnimatedSection>

          <StaggeredList
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            staggerDelay={0.09}
          >
            {relevantServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <motion.div
                  className="glass-card p-6 h-full group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="text-xl font-heading font-bold mb-1"
                    style={{ color: service.color }}
                  >
                    {service.stat}
                  </div>
                  <div className="text-xs text-white/40 mb-4">{service.statLabel}</div>
                  <h3 className="text-white font-semibold mb-2">{service.shortTitle}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </Link>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container-sm text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Ready to Grow Your <span className="glow-text">{industry.title}</span> Business?
            </h2>
            <p className="text-white/60 mb-8">
              Get a free strategy consultation from our {industry.title.toLowerCase()} marketing specialists.
            </p>
            <CTAButton href="/contact" size="lg">Book a Free Consultation</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
