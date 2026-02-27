import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shapepal.fit";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "ShapePal – Workout Plan, Calorie Counter & Lose Fat App",
    template: "%s | ShapePal",
  },
  description:
    "ShapePal helps you plan workouts, count calories and lose fat with a structured workout plan. Track progress, burn fat and achieve your fitness transformation with ShapePal.",
  keywords: [
    "ShapePal",
    "ShapePal workouts",
    "ShapePal plan",
    "calorie counter",
    "fitness transformation",
    "workout plan",
    "lose fat",
    "lose weight",
    "fat loss workout plan",
    "fitness app",
    "body transformation",
    "calorie tracker",
    "workout tracker",
  ],
  authors: [{ name: "ShapePal", url: siteUrl }],
  creator: "ShapePal",
  publisher: "ShapePal",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ShapePal",
    title: "ShapePal – Workout Plan, Calorie Counter & Lose Fat App",
    description:
      "Plan workouts, count calories and follow a fat loss workout plan to lose fat and transform your body with ShapePal.",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "ShapePal – Fitness & Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShapePal – Workout Plan, Calorie Counter & Lose Fat App",
    description:
      "Plan workouts, count calories and follow a fat loss workout plan to lose fat and transform your body with ShapePal.",
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Add your verification codes when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "fitness",
};

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "ShapePal",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "ShapePal helps you plan workouts, count calories, and achieve your fitness transformation. Track progress and build custom workout plans.",
    url: siteUrl,
    offers: {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    featureList: [
      "Workout plans",
      "Calorie counter",
      "Fitness transformation tracking",
      "Progress tracking",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <JsonLd />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/img/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
