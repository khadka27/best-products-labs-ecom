import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { CategoryProvider } from "@/context/CategoryContext";
import ConditionalHeader from "@/components/ConditionalHeader";
import ConditionalFooter from "@/components/ConditionalFooter";
import SessionProvider from "@/components/providers/SessionProvider";
import { OrganizationSchema, WebSiteSchema } from "@/components/SEOSchema";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "OfficialProductsLab | Premium E‑Commerce Store for Lifestyle & Tech Products",
  description:
    "Shop online at OfficialProductsLab for premium gadgets, smart devices, and lifestyle essentials. Enjoy secure checkout, fast delivery, and exclusive deals on top products.",
  keywords: [
    "ecommerce store",
    "online shopping",
    "premium gadgets",
    "smart devices",
    "lifestyle products",
    "electronics online",
    "tech accessories",
    "home essentials",
    "fashion and lifestyle",
    "trusted online store",
    "exclusive deals",
  ],


  authors: [{ name: "OfficialProductsLab", url: "https://officialproductslab.com" }],
  creator: "OfficialProductsLab",
  publisher: "OfficialProductsLab",
  metadataBase: new URL("https://officialproductslab.com"),
  alternates: {
    canonical: "https://officialproductslab.com",
  },
  openGraph: {
  type: "website",
  locale: "en_US",
  url: "https://officialproductslab.com",
  siteName: "OfficialProductsLab",
  title: "OfficialProductsLab - Premium Lifestyle & Tech Products Online",
  description:
    "Shop premium gadgets, smart devices, and lifestyle essentials at OfficialProductsLab. Enjoy secure checkout, fast delivery, and exclusive deals on top products.",
  images: [
    {
      url: "https://officialproductslab.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "OfficialProductsLab - Premium Lifestyle & Tech Products",
    },
  ],
},

 twitter: {
  card: "summary_large_image",
  title: "OfficialProductsLab - Premium Lifestyle & Tech Products Online",
  description:
    "Shop premium gadgets, smart devices, and lifestyle essentials at OfficialProductsLab. Secure checkout, fast delivery, and exclusive deals on top products.",
  images: ["https://officialproductslab.com/og-image.png"],
},
robots: {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
},

  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1E1E1E" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className={`${roboto.variable} antialiased`} suppressHydrationWarning>
        <SessionProvider>
          <CategoryProvider>
            <ConditionalHeader />
            {children}
            <ConditionalFooter />
          </CategoryProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
