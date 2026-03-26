"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { ArrowRight, Clock, Tag } from "lucide-react";

export function BlogPreview() {
  return (
    <section className="py-28">
      <div className="section-container">
        <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-tag mb-4 inline-flex">Latest Insights</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white">
              From the <span className="glow-text">SparxGrowth Blog</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white border border-white/10 hover:border-white/20 px-6 py-2.5 rounded-full transition-all whitespace-nowrap"
          >
            View All Posts <ArrowRight size={14} />
          </Link>
        </AnimatedSection>

        <StaggeredList
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                className="glass-card overflow-hidden group cursor-pointer h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Placeholder image */}
                <div className="relative h-48 overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #0a1628, #1e3a8a)" }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <div className="w-24 h-24 rounded-full border border-blue-400/30" />
                    <div className="absolute w-16 h-16 rounded-full border border-cyan-400/20" />
                  </div>
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400"
                    style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.25)" }}
                  >
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all duration-300">
                    Read More <ArrowRight size={13} />
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </StaggeredList>
      </div>
    </section>
  );
}
