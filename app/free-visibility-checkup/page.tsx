import type { Metadata } from "next";
import { FreeCheckupClient } from "./FreeCheckupClient";

export const metadata: Metadata = {
  title: "Free Digital Visibility Check-Up",
  description: "Get a completely free digital marketing audit. We'll analyse your SEO, PPC, social media, and website to identify your biggest growth opportunities.",
};

export default function FreeCheckupPage() {
  return <FreeCheckupClient />;
}
