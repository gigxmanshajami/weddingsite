import type { Metadata } from "next";
import { Cabin, Poppins, Roboto } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const cabin = Cabin({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-subheading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Moments — Luxury Indian Wedding Planning | Destination Weddings Across India",
  description:
    "India's premier luxury wedding planning company. We create breathtaking celebrations across 50+ destinations including Jaipur, Udaipur, Goa, and Kerala. 500+ weddings delivered with perfection.",
  keywords: [
    "luxury wedding planner India",
    "destination wedding India",
    "Indian wedding planning",
    "royal wedding planner",
    "palace wedding India",
    "Jaipur wedding planner",
    "Udaipur wedding planner",
    "luxury wedding decor",
  ],
  authors: [{ name: "Dream Moments Weddings" }],
  creator: "Dream Moments",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dreammoments.in",
    title: "Dream Moments — Luxury Indian Wedding Planning",
    description:
      "India's premier luxury wedding planning company. Crafting unforgettable celebrations across 50+ destinations.",
    siteName: "Dream Moments Weddings",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Moments — Luxury Indian Wedding Planning",
    description:
      "India's premier luxury wedding planning company. Crafting unforgettable celebrations across 50+ destinations.",
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
    <html
      lang="en"
      className={`${cabin.variable} ${poppins.variable} ${roboto.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventPlanner",
              name: "Dream Moments Weddings",
              description: "India's premier luxury wedding planning company",
              url: "https://dreammoments.in",
              telephone: "+91-98765-43210",
              email: "hello@dreammoments.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "42, Connaught Place",
                addressLocality: "New Delhi",
                addressCountry: "IN",
                postalCode: "110001",
              },
              areaServed: "India",
              priceRange: "₹₹₹₹",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
