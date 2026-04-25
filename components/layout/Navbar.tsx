"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
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
      setScrolled(y > 60);
      setScrolledUp(y < lastScrollY.current || y < 80);
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
      {/* ─── Navbar ─── */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: scrolledUp ? 0 : -100, opacity: scrolledUp ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
      >
        {/* ── Mobile bar (< lg): full-width, logo left / hamburger right ── */}
        <div
          className={cn(
            "pointer-events-auto flex items-center justify-between px-5 transition-all duration-500",
            mobileOpen
              ? "hidden"
              : "lg:hidden",
            scrolled
              ? "h-16 bg-[#030f07]/95 backdrop-blur-xl border-b border-white/[0.07] shadow-lg shadow-black/30"
              : "h-20 bg-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/SparxGrowth Logo.png"
                alt="SparxGrowth"
                width={320}
                height={90}
                className="h-28 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2.5 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.07] transition-all"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Desktop pill (lg+): centered floating pill ── */}
        <div
          className="hidden lg:flex justify-center pointer-events-none"
          style={{ paddingTop: scrolled ? "12px" : "20px", transition: "padding 0.4s ease" }}
        >
          <div
            className={cn(
              "pointer-events-auto flex items-center gap-2 transition-all duration-500",
              scrolled
                ? "bg-[#030f07]/90 backdrop-blur-2xl border border-white/[0.10] shadow-2xl shadow-black/40 rounded-2xl px-3 py-2"
                : "bg-transparent px-4 py-2"
            )}
          >
          {/* Logo */}
          <Link href="/" className="flex items-center group mr-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/SparxGrowth Logo.png"
                alt="SparxGrowth"
                width={300}
                height={84}
                className="h-24 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-white/10 mx-1" />

          {/* Desktop nav links */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap",
                      activeDropdown === link.label || pathname.startsWith(link.href)
                        ? "text-white bg-white/10"
                        : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                    )}
                  >
                    {link.label}
                    <motion.span
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={13} />
                    </motion.span>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 block whitespace-nowrap",
                      pathname === link.href
                        ? "text-white bg-white/10"
                        : "text-white/65 hover:text-white hover:bg-white/[0.07]"
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full" style={{ background: 'linear-gradient(135deg, #064226, #1b9058, #ffde59)' }}
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
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[240px] p-1.5 rounded-2xl border border-[#1b9058]/20 bg-[#030f07]/97 backdrop-blur-2xl shadow-2xl shadow-black/60"
                        >
                          {link.label === "Services" &&
                            services.map((s, i) => (
                              <motion.div
                                key={s.slug}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.035 }}
                              >
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-sm text-white/65 hover:text-white hover:bg-white/[0.07] transition-all duration-150 group"
                                >
                                  <span
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
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
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.035 }}
                              >
                                <Link
                                  href={`/industries/${ind.slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-sm text-white/65 hover:text-white hover:bg-white/[0.07] transition-all duration-150 group"
                                >
                                  <span
                                    className="w-1.5 h-1.5 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform"
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

          {/* Divider */}
          <div className="hidden lg:block w-px h-5 bg-white/10 mx-1" />

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/free-visibility-checkup"
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 whitespace-nowrap"
              style={{ color: '#ffde59', border: '1px solid rgba(255,222,89,0.30)', background: 'transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,222,89,0.65)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,222,89,0.07)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,222,89,0.30)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Free Check-Up
            </Link>
            <Link
              href="/contact"
              className="relative overflow-hidden px-5 py-2 rounded-xl text-sm font-bold text-white whitespace-nowrap group"
              style={{ background: "linear-gradient(135deg, #064226, #1b9058)" }}
            >
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative flex items-center gap-1.5">
                <Phone size={12} />
                Let's Talk
              </span>
            </Link>
          </div>
        </div>
        </div>
      </motion.header>

      {/* ─── Mobile full-screen menu ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[99] bg-[#030f07]/98 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/[0.06]">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <Image
                  src="/SparxGrowth Logo.png"
                  alt="SparxGrowth"
                  width={300}
                  height={84}
                  className="h-24 w-auto object-contain"
                />
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white/70 hover:text-white">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
              <div className="space-y-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.06, duration: 0.36 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3.5 rounded-xl text-lg font-semibold transition-all",
                        pathname === link.href
                          ? "text-white bg-white/10"
                          : "text-white/65 hover:text-white hover:bg-white/[0.06]"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8 space-y-3"
              >
                <Link
                  href="/free-visibility-checkup"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold transition-all"
                  style={{ color: '#ffde59', border: '1px solid rgba(255,222,89,0.35)' }}
                >
                  Free Visibility Check-Up
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #064226, #1b9058)" }}
                >
                  <Phone size={14} />
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mobile sticky bottom CTA ─── */}
      <motion.div
        initial={{ y: 80 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[90] lg:hidden p-4 bg-[#030f07]/90 backdrop-blur-xl border-t border-white/[0.06]"
      >
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl text-sm font-bold text-white"
          style={{ background: "linear-gradient(135deg, #064226, #1b9058)" }}
        >
          <Phone size={14} />
          Let's Talk
        </Link>
      </motion.div>
    </>
  );
}
