import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shapepal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "ShapePal – Workouts, Calorie Counter & Fitness Transformation Plan",
    template: "%s | ShapePal",
  },
  description:
    "ShapePal helps you plan workouts, count calories, and achieve your fitness transformation. Track progress, build custom workout plans, and reach your body goals with ShapePal.",
  keywords: [
    "ShapePal",
    "ShapePal workouts",
    "ShapePal plan",
    "calorie counter",
    "fitness transformation",
    "workout plan",
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
    title: "ShapePal – Workouts, Calorie Counter & Fitness Transformation",
    description:
      "Plan workouts, count calories, and achieve your fitness transformation with ShapePal.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ShapePal – Fitness & Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShapePal – Workouts, Calorie Counter & Fitness Transformation",
    description:
      "Plan workouts, count calories, and achieve your fitness transformation with ShapePal.",
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
        <link rel="icon" href="/img/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/img/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
