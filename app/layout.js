import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Silver Mountain Pte Ltd | Global Wholesale Trading & Logistics",
  description:
    "Silver Mountain Pte Ltd is a global leader in wholesale trading and logistics, specializing in oil, natural rubber, and wood pellets. Experience unmatched supply chain excellence worldwide.",
  keywords: [
    "wholesale trading",
    "logistics",
    "oil trading",
    "natural rubber",
    "wood pellets",
    "supply chain solutions",
    "Silver Mountain",
  ],
  metadataBase: new URL("https://www.silvermountainpteltd.com"),
  openGraph: {
    title: "Silver Mountain Pte Ltd | Global Wholesale Trading & Logistics",
    description:
      "Silver Mountain Pte Ltd leads the global market in wholesale trading and logistics solutions, offering premium oil, natural rubber, and wood pellets.",
    url: "https://www.silvermountainpteltd.com",
    type: "website",
    images: [
      {
        url: "https://www.silvermountainpteltd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silver Mountain Global Trading",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SilverMountain",
    title: "Silver Mountain Pte Ltd | Global Wholesale Trading & Logistics",
    description:
      "A trusted leader in wholesale trading & logistics. We supply oil, natural rubber, and wood pellets with a commitment to excellence worldwide.",
    images: ["https://www.silvermountainpteltd.com/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Silver Mountain Pte Ltd",
  url: "https://www.silvermountainpteltd.com",
  logo: "https://www.silvermountainpteltd.com/logo.png",
  description:
    "Global leader in wholesale trading & logistics. Specializing in oil, natural rubber, and wood pellets.",
  sameAs: [
    "https://www.facebook.com/SilverMountain",
    "https://www.twitter.com/SilverMountain",
    "https://www.linkedin.com/company/SilverMountain",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+65 1234 5678",
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Mandarin"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data Script */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
