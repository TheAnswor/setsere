import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Setsere Holdings | Trusted Mining Supplies & Services in South Africa",
  description:
    "Setsere Holdings has built itself up over 6 years as a trusted supplier of mining equipment in South Africa, delivering welding, high capacity pumps, underground mining equipment and key mining-facility services.",
  keywords: [
    "Setsere Holdings",
    "mining equipment South Africa",
    "mining supplies",
    "waste management",
    "fluid management",
    "safety logbooks",
    "water treatment",
    "mining services",
  ],
  authors: [{ name: "Setsere Holdings" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Setsere Holdings | Trusted Mining Supplies & Services",
    description:
      "Trusted with mining supplies for almost a decade. Mining equipment, fabrication, waste management and facility services across South Africa.",
    url: "https://setsere.co.za/",
    siteName: "Setsere Holdings",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Setsere Holdings | Trusted Mining Supplies & Services",
    description:
      "Trusted with mining supplies for almost a decade. Mining equipment, fabrication, waste management and facility services across South Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
