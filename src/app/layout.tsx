import type { Metadata } from "next";
import { Quicksand, Inter } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sugar & Bloom Bakery | Custom Cakes & Pastries in Tucson, AZ",
  description:
    "Sugar & Bloom Bakery crafts custom cakes, cupcakes, French pastries, wedding cakes, and seasonal treats in Tucson, Arizona. Order online or book a consultation today.",
  keywords: [
    "bakery",
    "custom cakes",
    "cupcakes",
    "wedding cakes",
    "pastries",
    "Tucson",
    "Arizona",
    "macarons",
    "croissants",
  ],
  openGraph: {
    title: "Sugar & Bloom Bakery | Custom Cakes & Pastries in Tucson, AZ",
    description:
      "Handcrafted cakes, pastries, and wedding cakes in Tucson, AZ. Life is sweet — we just bake it better.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  name: "Sugar & Bloom Bakery",
  description:
    "Handcrafted custom cakes, cupcakes, French pastries, and wedding cakes in Tucson, Arizona.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4201 E Speedway Blvd",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    postalCode: "85712",
    addressCountry: "US",
  },
  telephone: "(520) 555-0182",
  email: "hello@sugarandbloom.com",
  url: "https://sugarandbloom.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
  servesCuisine: "Bakery",
  image: "https://sugarandbloom.com/og-image.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-base text-foreground antialiased">
        {/* Mesh Gradient Background */}
        <div className="mesh-gradient" aria-hidden="true">
          <div className="mesh-orb mesh-orb--pink" />
          <div className="mesh-orb mesh-orb--gold" />
          <div className="mesh-orb mesh-orb--mint" />
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
