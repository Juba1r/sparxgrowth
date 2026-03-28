"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { services, industries } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020818] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #2563eb, #06b6d4, transparent)" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10 flex flex-col items-center text-center">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 mb-6 group">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110">
            <Zap size={20} className="text-white" fill="white" />
          </div>
          <span className="font-heading font-bold text-2xl text-white tracking-tight">
            Sparx<span className="glow-text">Growth</span>
          </span>
        </Link>
        
        <p className="text-white/50 text-base leading-relaxed max-w-md mx-auto mb-10">
          London&apos;s premier digital marketing agency helping ambitious brands grow faster through data-driven SEO, PPC, and social media strategies.
        </p>

        {/* Contact info row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-14">
          <div className="flex items-center gap-2.5 text-sm text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <MapPin size={14} className="text-blue-400" />
            </div>
            <span>London, EC2M 7PY</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <Phone size={14} className="text-blue-400" />
            </div>
            <span>+44 20 7123 4567</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm text-white/70">
            <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
              <Mail size={14} className="text-blue-400" />
            </div>
            <span>hello@sparxgrowth.co.uk</span>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 w-full max-w-3xl justify-center mb-16 text-left sm:text-center">
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Industries</h4>
            <ul className="space-y-3">
              {industries.slice(0, 4).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Case Studies", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="w-full pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} SparxGrowth Ltd. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["in", "𝕏", "ig", "f"].map((label, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.06] transition-all text-xs font-bold"
              >
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
