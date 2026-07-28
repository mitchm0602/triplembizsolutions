import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://triplem-consulting.com";
const SITE_TITLE = "Triple M Business Solutions | Build Your Back Office";
const SITE_DESCRIPTION =
  "Bookkeeping, QuickBooks Online organization, and back-office infrastructure for small construction and trade companies — from single projects to fractional COO-level oversight. QBO Certified, OSHA 30 Certified.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Triple M Business Solutions",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Triple M Business Solutions",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 2048,
        height: 1152,
        alt: "A residential home under construction at sunrise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-bg.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Triple M Business Solutions",
  alternateName: "Triple M",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-transparent.png`,
  image: `${SITE_URL}/images/hero-bg.jpg`,
  email: "mitchell@triplem-consulting.com",
  areaServed: "US",
  priceRange: "$$",
  knowsAbout: [
    "Bookkeeping",
    "QuickBooks Online",
    "Construction Accounting",
    "HR & Compliance",
    "Insurance Negotiation",
    "Surety Bonding",
    "Fractional COO Services",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-navy">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
