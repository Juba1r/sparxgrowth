"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { services, industries } from "@/lib/data";

const footerLinks = {
  Services: services
    .slice(0, 5)
    .map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })),
  Industries: industries
    .slice(0, 5)
    .map((i) => ({ label: i.title, href: `/industries/${i.slug}` })),
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Free Check-Up", href: "/free-visibility-checkup" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
];

const contactDetails = [
  {
    icon: MapPin,
    value: "123 Liverpool Street, London, EC2M 7PY",
    color: "#1b9058",
  },
  { icon: Phone, value: "+44 20 7123 4567", color: "#ffde59" },
  { icon: Mail, value: "hello@sparxgrowth.co.uk", color: "#22b56c" },
];

const trust = [
  { stat: "250+", label: "Brands Grown" },
  { stat: "98%", label: "Retention Rate" },
  { stat: "£12M+", label: "Revenue Generated" },
  { stat: "6 yrs", label: "In Business" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030f07] overflow-hidden flex flex-col">
      {/* ── Top gradient border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #064226 25%, #1b9058 50%, #ffde59 75%, transparent 100%)",
        }}
      />

      {/* ── Ambient glows ── */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
        style={{ background: "#064226" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-[0.07] pointer-events-none"
        style={{ background: "#1b9058" }}
      />

      {/* ─────────────────────────────────────────
            UPPER BAND — Brand + trust numbers
         ───────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            {/* Brand */}
            <div className="max-w-sm">
              <Link
                href="/"
                className="inline-flex items-center group mb-5"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/SparxGrowth Logo.png"
                    alt="SparxGrowth"
                    width={150}
                    height={42}
                    className="h-11 w-auto object-contain"
                  />
                </motion.div>
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                London&apos;s digital growth partner. We combine data-driven
                strategy with creative execution to help ambitious brands
                dominate their market.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-2">
                {socialLinks.map(({ svg, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all duration-200"
                  >
                    {svg}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Trust stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6">
              {trust.map((t, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -2 }}
                  className="flex flex-col items-center text-center px-5 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <span
                    className="text-2xl font-heading font-bold mb-0.5"
                    style={{
                      background: "linear-gradient(135deg, #1b9058, #ffde59)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {t.stat}
                  </span>
                  <span className="text-xs text-white/40 font-medium">
                    {t.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
            MIDDLE BAND — Links grid + contact
         ───────────────────────────────────────── */}
      <div className="relative border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {/* Link columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5 opacity-90">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-white/45 hover:text-white transition-colors duration-200"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact column */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-5 opacity-90">
                Get In Touch
              </h4>
              <ul className="space-y-3">
                {contactDetails.map(({ icon: Icon, value, color }) => (
                  <li key={value}>
                    <div className="flex items-start gap-2.5">
                      <div
                        className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: `${color}18`,
                          border: `1px solid ${color}30`,
                        }}
                      >
                        <Icon size={11} style={{ color }} />
                      </div>
                      <span className="text-xs text-white/45 leading-relaxed">
                        {value}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 mt-5 text-xs font-semibold transition-colors group"
                style={{ color: '#ffde59' }}
              >
                Book a free call
                <ArrowUpRight
                  size={12}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
            BOTTOM BAR — copyright + back-to-top
         ───────────────────────────────────────── */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/30 text-center sm:text-left">
              © {new Date().getFullYear()} SparxGrowth Ltd. All rights reserved.
              Registered in England &amp; Wales.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                Cookies
              </Link>
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                aria-label="Back to top"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
