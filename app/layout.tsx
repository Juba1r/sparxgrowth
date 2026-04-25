import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { CursorFollower } from "@/components/ui/CursorFollower";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

export const metadata: Metadata = {
  title: {
    default: "SparxGrowth | London's Premier Digital Marketing Agency",
    template: "%s | SparxGrowth",
  },
  description:
    "SparxGrowth is London's leading digital marketing agency specialising in SEO, PPC, social media, and conversion optimisation for ambitious brands.",
  keywords: [
    "digital marketing agency London",
    "SEO agency London",
    "PPC agency",
    "social media marketing",
    "SparxGrowth",
  ],
  authors: [{ name: "SparxGrowth" }],
  creator: "SparxGrowth",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://sparxgrowth.co.uk",
    siteName: "SparxGrowth",
    title: "SparxGrowth | London's Premier Digital Marketing Agency",
    description:
      "Data-driven digital marketing that delivers measurable results. SEO, PPC, social media and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SparxGrowth | London's Premier Digital Marketing Agency",
    description:
      "Data-driven digital marketing that delivers measurable results.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Barriecito&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Loader />
        <ScrollProgress />
        <CursorFollower />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
