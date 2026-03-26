import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { AnimatedSection, StaggeredList } from "@/components/ui/AnimatedSection";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Blog",
  description: "Expert insights on SEO, PPC, social media, and digital marketing strategy from the SparxGrowth team.",
};

const allPosts = [
  ...blogPosts,
  {
    slug: "local-seo-london",
    title: "The Ultimate Guide to Local SEO for London Businesses",
    excerpt: "How to dominate local search results and get found by the right customers in your area.",
    category: "Local SEO",
    readTime: "8 min read",
    date: "March 5, 2026",
    image: "/blog/local-seo.jpg",
  },
  {
    slug: "email-automation-2025",
    title: "Email Automation Flows That Convert in 2026",
    excerpt: "The 7 essential email automation sequences every growing business should have running right now.",
    category: "Email",
    readTime: "6 min read",
    date: "February 28, 2026",
    image: "/blog/email.jpg",
  },
  {
    slug: "cro-tips-hotels",
    title: "12 CRO Tips That Hotel Websites Often Ignore",
    excerpt: "Simple changes to your hotel website that can significantly increase direct bookings overnight.",
    category: "CRO",
    readTime: "5 min read",
    date: "February 20, 2026",
    image: "/blog/cro.jpg",
  },
];

export default function BlogPage() {
  const featured = allPosts[0];
  const rest = allPosts.slice(1);

  return (
    <div style={{ paddingTop: '128px' }}>
      <div style={{ paddingTop: '40px', paddingBottom: '56px' }} className="section-container-sm text-center">
        <AnimatedSection>
          <span className="section-tag mb-6 inline-flex">Expert Insights</span>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-white mb-4">
            The SparxGrowth <span className="glow-text">Blog</span>
          </h1>
          <p className="text-white/60 text-xl max-w-xl mx-auto">
            Actionable digital marketing insights to help you grow faster.
          </p>
        </AnimatedSection>
      </div>

      <div className="section-container" style={{ paddingBottom: '96px' }}>
        {/* Featured */}
        <AnimatedSection className="mb-14">
          <Link href={`/blog/${featured.slug}`}>
            <div className="glass-card overflow-hidden group grid lg:grid-cols-2 gap-0 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <div className="h-64 lg:h-auto relative"
                style={{ background: "linear-gradient(135deg, #0a1628, #1e3a8a)" }}>
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <div className="w-32 h-32 rounded-full border border-blue-400/50" />
                  <div className="absolute w-20 h-20 rounded-full border border-cyan-400/30" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-cyan-400"
                  style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.25)" }}>
                  Featured · {featured.category}
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                  <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-blue-300 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-400 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </AnimatedSection>

        {/* All posts */}
        <StaggeredList
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.09}
        >
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="glass-card overflow-hidden group cursor-pointer h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="h-44 relative"
                  style={{ background: "linear-gradient(135deg, #0a1628, #1e3a8a)" }}>
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="w-20 h-20 rounded-full border border-blue-400/40" />
                  </div>
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-cyan-400"
                    style={{ background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.25)" }}>
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </StaggeredList>
      </div>
    </div>
  );
}
