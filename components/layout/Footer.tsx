"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, MapPin, Phone, Mail, ArrowRight, ExternalLink } from "lucide-react";
import { services, industries } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020818]">
      {/* Top gradient line */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #2563eb, #06b6d4, transparent)" }} />

      <div className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                <Zap size={18} className="text-white" fill="white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Sparx<span className="glow-text">Growth</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              London&apos;s premier digital marketing agency helping ambitious brands grow faster through data-driven strategies.
            </p>
            <div className="space-y-2.5 text-sm text-white/50">
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-blue-400 shrink-0" />
                <span>123 Liverpool Street, London, EC2M 7PY</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <span>+44 20 7123 4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <span>hello@sparxgrowth.co.uk</span>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              {["in", "𝕏", "ig", "f"].map((label, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-white/50 hover:text-white hover:border-blue-500/50 transition-all text-xs font-bold"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/50 hover:text-white flex items-center gap-1.5 group transition-colors">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-400" />
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Industries</h4>
            <ul className="space-y-2.5">
              {industries.slice(0, 6).map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="text-sm text-white/50 hover:text-white flex items-center gap-1.5 group transition-colors">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-400" />
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Blog", href: "/blog" },
                { label: "Free Check-Up", href: "/free-visibility-checkup" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-white/50 hover:text-white flex items-center gap-1.5 group transition-colors">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} SparxGrowth Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link key={item} href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
