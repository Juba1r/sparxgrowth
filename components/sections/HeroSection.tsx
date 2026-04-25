"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone, Play, Star } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="w-full relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background orbs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div
          className="hero-glow animate-orb"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
            top: "5%",
            left: "calc(50% - 300px)",
          }}
        />
        <div
          className="hero-glow animate-orb"
          style={{
            width: 400,
            height: 400,
            background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
            top: "30%",
            right: "5%",
            animationDelay: "-3s",
          }}
        />
        <div
          className="hero-glow animate-orb"
          style={{
            width: 300,
            height: 300,
            background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
            bottom: "10%",
            left: "10%",
            animationDelay: "-5s",
          }}
        />
      </motion.div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />

      <motion.div
        style={{ opacity }}
        className="max-w-7xl mx-auto justify-center px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-8"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <span className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-glow" />
            London&apos;s #1 Digital Marketing Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-6 text-balance"
        >
          We Make Your Brand{" "}
          <span className="glow-text">Grow Fast.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-subheading"
        >
          Data-driven digital marketing for ambitious London brands. SEO, PPC, social media and conversion strategies that deliver measurable ROI.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <CTAButton href="/contact" size="lg">
            Book a Free Strategy Call
          </CTAButton>
          <CTAButton href="/case-studies" variant="outline" size="lg" icon={false}>
            <Play size={16} className="fill-current" />
            View Our Results
          </CTAButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-white/50"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span>5.0 on Google</span>
          </div>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <span>250+ Brands Grown</span>
          <div className="w-px h-4 bg-white/20 hidden sm:block" />
          <span>Based in London, UK</span>
        </motion.div>
      </motion.div>

    </section>
  );
}
