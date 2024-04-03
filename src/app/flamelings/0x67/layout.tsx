import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Flameling ($0x67)",
  description: "A Flameling Dividend Token",
  applicationName: "Flameling ($0x67)",
  twitter: {
    card: "summary_large_image",
    site: "buyholdearn.com",
    creator: "@buyholdearn",
    images: "https://buyholdearn.com/flamelings/0x67.png",
  },
  openGraph: {
    type: "website",
    url: "https://buyholdearn.com",
    title: "Flameling ($0x67)",
    description: "A Flameling Dividend Token",
    siteName: "Flameling ($0x67)",
    images: [
      {
        url: "https://buyholdearn.com/flamelings/0x67.png",
      },
    ],
  },
};

export default function FlamelingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}

