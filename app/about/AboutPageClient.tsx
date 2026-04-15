"use client";

import { motion } from "framer-motion";
import {
  AnimatedSection,
  StaggeredList,
} from "@/components/ui/AnimatedSection";
import { CTAButton } from "@/components/ui/CTAButton";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Award, Target, Heart, TrendingUp } from "lucide-react";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

const team = [
  {
    name: "Shrief",
    role: "Founder & Director",
    specialty: "Growth Strategy",
    initials: "S",
    color: "#2563eb",
  },
  {
    name: "Nabila",
    role: "Head of Sales",
    specialty: "Sales & Marketing",
    initials: "N",
    color: "#06b6d4",
  },
  {
    name: "Ehsanul Haque Zobaer",
    role: "Head of Marketing",
    specialty: "Strategic Growth Leadership",
    initials: "EHZ",
    color: "#8b5cf6",
  },
  {
    name: "Farhad Hossain",
    role: "SEO & Content Specialist",
    specialty: "Brand & Content",
    initials: "FH",
    color: "#f59e0b",
  },
  {
    name: "Jubair Ibn Khaled",
    role: "Software Engineer",
    specialty: "Web & App Development",
    initials: "JIK",
    color: "#10b981",
  },
  {
    name: "Mahmudul Nayeem",
    role: "Video Editor",
    specialty: "Video Editing",
    initials: "MN",
    color: "#ef4444",
  },
];

const values = [
  {
    icon: Target,
    title: "Results-First",
    desc: "Every strategy, every campaign, every decision is anchored to measurable business outcomes.",
    color: "#2563eb",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    desc: "We treat your business like our own. Your growth is our success metric.",
    color: "#06b6d4",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven",
    desc: "We don't guess. Every recommendation is backed by data, research, and proven methodology.",
    color: "#8b5cf6",
  },
  {
    icon: Award,
    title: "Excellence Always",
    desc: "We hold ourselves to the highest standards and continuously push to improve our craft.",
    color: "#f59e0b",
  },
];

const timeline = [
  {
    year: "2018",
    title: "SparxGrowth Founded",
    desc: "Started in a Shoreditch co-working space with 2 clients and a big vision.",
  },
  {
    year: "2019",
    title: "First 50 Clients",
    desc: "Rapid growth through referrals as results consistently exceeded expectations.",
  },
  {
    year: "2021",
    title: "Team of 12",
    desc: "Expanded our specialist team and moved to our Liverpool Street offices.",
  },
  {
    year: "2023",
    title: "250+ Brands Served",
    desc: "Now one of London's most trusted digital marketing agencies with UK-wide reach.",
  },
  {
    year: "2024",
    title: "Agency of the Year",
    desc: "Recognised by Marketing Week as one of the UK's top independent digital agencies.",
  },
];

export function AboutPageClient() {
  return (
    <div style={{ paddingTop: "128px" }}>
      {/* Hero */}
      <section
        style={{ paddingTop: "64px", paddingBottom: "80px" }}
        className="relative overflow-hidden"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-[0.08] pointer-events-none"
          style={{ background: "#2563eb" }}
        />
        <div className="section-container-sm text-center relative">
          <AnimatedSection>
            <span className="section-tag mb-6 inline-flex">About Us</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-6">
              London&apos;s Most{" "}
              <span className="glow-text">Results-Driven</span> Agency
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
              Founded in 2018, SparxGrowth has helped 250+ brands across London
              and the UK achieve extraordinary digital growth. We combine
              strategic thinking with technical excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-24">
        <div className="section-container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              What We <span className="glow-text">Stand For</span>
            </h2>
          </AnimatedSection>
          <StaggeredList
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            staggerDelay={0.1}
          >
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="glass-card p-7 text-center group">
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `${v.color}20`,
                      border: `1px solid ${v.color}30`,
                    }}
                  >
                    <Icon size={22} style={{ color: v.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </StaggeredList>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Our <span className="glow-text">Story</span>
            </h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/50 via-cyan-400/30 to-transparent" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className="flex gap-8 items-start">
                    <div className="relative shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-sm font-bold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #2563eb, #06b6d4)",
                        }}
                      >
                        {item.year}
                      </div>
                    </div>
                    <div className="glass-card p-6 flex-1">
                      <h3 className="text-white font-semibold text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="section-container">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
              Meet the <span className="glow-text">Team</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              A team of specialists who are passionate about driving growth for
              our clients.
            </p>
          </AnimatedSection>
          <StaggeredList
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            staggerDelay={0.09}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                className="glass-card p-7 group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white mb-5 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}, #06b6d4)`,
                  }}
                >
                  {member.initials}
                </div>
                <h3 className="text-white font-semibold text-base">
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium mb-1.5"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
                <p className="text-white/40 text-sm">{member.specialty}</p>
              </motion.div>
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
              Join 250+ Brands Growing <span className="glow-text">Faster</span>
            </h2>
            <p className="text-white/60 mb-8">
              Ready to work with London&apos;s best digital marketing team?
            </p>
            <CTAButton href="/contact" size="lg">
              Start Your Growth Journey
            </CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
