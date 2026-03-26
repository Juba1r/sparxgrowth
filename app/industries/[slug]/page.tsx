import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/lib/data";
import { IndustryPageClient } from "./IndustryPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.title} Digital Marketing Agency London`,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((ind) => ind.slug === slug);
  if (!industry) notFound();

  return <IndustryPageClient industry={industry} />;
}
