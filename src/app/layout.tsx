import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { MetaDataKeys } from "@/shared/metaData";

export const metadata: Metadata = {
  title: MetaDataKeys.TITLE,
  description: MetaDataKeys.DESCRIPTION,
  keywords: MetaDataKeys.KEYWORDS,
  authors: [{ name: MetaDataKeys.AUTHOR }],
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
};

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NuqsAdapter>
        <body className={`${font.className} antialiased`}>
          {children}
          <Toaster />
          <Sonner />
        </body>
      </NuqsAdapter>
    </html>
  );
}
