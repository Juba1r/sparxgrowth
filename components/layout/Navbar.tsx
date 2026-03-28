"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone, Zap } from "lucide-react";
import { services, industries } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Industries", href: "/industries", hasDropdown: true },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledUp, setScrolledUp] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setScrolledUp(y < lastScrollY.current || y < 100);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: scrolledUp ? 0 : -80 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          scrolled
            ? "bg-[#020818]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/30"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "relative flex items-center justify-between transition-all duration-500",
              scrolled ? "h-16" : "h-20"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <motion.div
                className="relative w-8 h-8 rounded-lg overflow-hidden"
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Zap size={16} className="text-white" fill="white" />
                </div>
              </motion.div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Sparx<span className="glow-text">Growth</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className={cn(
                        "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                        activeDropdown === link.label || pathname.startsWith(link.href)
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                      )}
                    >
                      {link.label}
                      <motion.span
                        animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={14} />
                      </motion.span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 block",
                        pathname === link.href
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                      )}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.hasDropdown && (
                    <div
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <AnimatePresence>
                        {activeDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[260px] p-2 rounded-2xl border border-white/[0.08] bg-[#050f1f]/95 backdrop-blur-xl shadow-2xl shadow-black/50"
                          >
                            {link.label === "Services" &&
                              services.map((s, i) => (
                                <motion.div
                                  key={s.slug}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.04 }}
                                >
                                  <Link
                                    href={`/services/${s.slug}`}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group"
                                  >
                                    <span
                                      className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                                      style={{ background: s.color }}
                                    />
                                    {s.shortTitle}
                                  </Link>
                                </motion.div>
                              ))}
                            {link.label === "Industries" &&
                              industries.map((ind, i) => (
                                <motion.div
                                  key={ind.slug}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.04 }}
                                >
                                  <Link
                                    href={`/industries/${ind.slug}`}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-200 group"
                                  >
                                    <span
                                      className="w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
                                      style={{ background: ind.color }}
                                    />
                                    {ind.title}
                                  </Link>
                                </motion.div>
                              ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/free-visibility-checkup"
                className="relative group px-5 py-2.5 rounded-full text-sm font-semibold text-cyan-400 border border-cyan-400/30 hover:border-cyan-400/70 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <span className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-300" />
                Free Check-Up
              </Link>
              <Link
                href="/contact"
                className="relative group px-6 py-2.5 rounded-full text-sm font-bold text-white overflow-hidden"
                style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  <Phone size={13} />
                  Book a Free Call
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] bg-[#020818]/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/[0.06]">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-white" fill="white" />
                </div>
                <span className="font-heading font-bold text-xl text-white">
                  Sparx<span className="glow-text">Growth</span>
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <div className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3.5 rounded-xl text-lg font-semibold transition-all",
                        pathname === link.href
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 space-y-3"
              >
                <Link
                  href="/free-visibility-checkup"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-cyan-400 border border-cyan-400/40 hover:bg-cyan-400/10 transition-all"
                >
                  Free Visibility Check-Up
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
                >
                  <Phone size={14} />
                  Book a Free Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom CTA */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden p-4 bg-[#020818]/90 backdrop-blur-xl border-t border-white/[0.06]"
      >
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, #2563eb, #06b6d4)" }}
        >
          <Phone size={14} />
          Book a Free Call
        </Link>
      </motion.div>
    </>
  );
}
