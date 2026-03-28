"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section className="w-full py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
          style={{ background: "#2563eb", top: "30%", right: "5%" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16 w-full flex flex-col items-center gap-5">
          <span className="section-tag inline-flex">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight text-balance max-w-3xl mx-auto">
            Loved by <span className="glow-text">250+ Brands</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed text-center text-balance">
            Don&apos;t take our word for it — hear from the brands we&apos;ve helped grow.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 sm:p-12 text-center w-full mx-auto"
            >
              <Quote size={36} className="mx-auto mb-6 opacity-20 text-blue-400" />
              <div className="flex justify-center gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-sm font-semibold"
                style={{ background: "rgba(37,99,235,0.15)", border: "1px solid rgba(37,99,235,0.3)", color: "#60a5fa" }}>
                {testimonials[active].result}
              </div>
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                &ldquo;{testimonials[active].content}&rdquo;
              </p>
              <div>
                <p className="text-white font-semibold">{testimonials[active].name}</p>
                <p className="text-white/50 text-sm mt-1">{testimonials[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: i === active ? 32 : 8, background: i === active ? "transparent" : "rgba(255,255,255,0.2)" }}
                >
                  {i === active && (
                    <motion.div
                      layoutId="dot-active"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "linear-gradient(90deg, #2563eb, #06b6d4)" }}
                    />
                  )}
                </button>
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
