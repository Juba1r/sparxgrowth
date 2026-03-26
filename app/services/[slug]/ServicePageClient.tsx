"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { CheckCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  color: string;
  features: string[];
  stat: string;
  statLabel: string;
}

const processSteps = [
  { step: "01", title: "Discovery & Audit", desc: "We analyse your current position, competitors, and growth opportunities." },
  { step: "02", title: "Strategy & Planning", desc: "We build a bespoke roadmap tailored to your goals and budget." },
  { step: "03", title: "Execution & Launch", desc: "Our experts execute the strategy with precision and velocity." },
  { step: "04", title: "Optimise & Scale", desc: "We continuously test, learn, and scale what works best." },
];

const faqs = [
  { q: "How long before I see results?", a: "Most clients see measurable improvements within 60–90 days. SEO typically takes 3–6 months for significant organic growth, while PPC can show ROI within days." },
  { q: "Do you work with small businesses?", a: "Absolutely. We work with businesses of all sizes, from ambitious startups to established enterprises. We tailor our approach to your budget and goals." },
  { q: "How do you measure success?", a: "We track KPIs specific to your goals — whether that's organic traffic, conversion rates, ROAS, or revenue. You'll receive clear monthly reports." },
  { q: "Do you offer long-term contracts?", a: "We offer flexible month-to-month arrangements with no lock-in contracts. We earn your business every month through results." },
];

export function ServicePageClient({ service }: { service: Service }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ paddingTop: '128px' }}>
      {/* Hero */}
      <section style={{ paddingTop: '40px', paddingBottom: '96px' }} className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
            style={{ background: service.color }}
          />
        </div>

        <div className="section-container relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white/80">{service.shortTitle}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: `${service.color}20`, border: `1px solid ${service.color}40`, color: service.color }}
              >
                {service.shortTitle} Agency London
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl font-heading font-bold text-white mb-6"
              >
                {service.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-lg leading-relaxed mb-8"
              >
                {service.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {service.features.map((f) => (
                  <span key={f} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/70 border border-white/10">
                    <CheckCircle size={13} style={{ color: service.color }} />
                    {f}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-4"
              >
                <CTAButton href="/contact" size="lg">Get a Free Proposal</CTAButton>
                <CTAButton href="/free-visibility-checkup" variant="outline" size="lg" icon={false}>
                  Free Audit
                </CTAButton>
              </motion.div>
            </div>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="glass-card p-12 text-center relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `radial-gradient(circle at 50% 30%, ${service.color}60, transparent 60%)` }}
              />
              <div
                className="text-7xl sm:text-8xl font-heading font-bold mb-3"
                style={{ color: service.color, textShadow: `0 0 30px ${service.color}60` }}
              >
                {service.stat}
              </div>
              <p className="text-white/60 text-lg">{service.statLabel}</p>
              <p className="text-white/30 text-sm mt-2">Average client result</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-14">
            <span className="section-tag mb-5 inline-flex">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white">
              How We <span className="glow-text">Deliver Results</span>
            </h2>
          </AnimatedSection>

          <StaggeredList
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {processSteps.map((step) => (
              <div key={step.step} className="glass-card p-7 group relative overflow-hidden">
                <div className="text-6xl font-heading font-bold opacity-[0.06] absolute top-4 right-4 select-none">{step.step}</div>
                <div
                  className="text-sm font-bold mb-4"
                  style={{ color: service.color }}
                >
                  Step {step.step}
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </StaggeredList>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container-sm">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Frequently Asked <span className="glow-text">Questions</span>
            </h2>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-semibold">{faq.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 text-white/40 shrink-0"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-white/60 text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-white/[0.06]">
        <div className="section-container-sm text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/60 mb-8">
              Book a free strategy call with our {service.shortTitle} specialists today.
            </p>
            <CTAButton href="/contact" size="lg">Book a Free Call</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
