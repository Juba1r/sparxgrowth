import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About SparxGrowth",
  description: "Meet the team behind London's premier digital marketing agency. Learn about our story, values, and the people who deliver exceptional results.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
