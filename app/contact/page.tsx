import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SparxGrowth. Book a free strategy call with our London-based digital marketing specialists.",
};

export default function ContactPage() {
  return <ContactClient />;
}
