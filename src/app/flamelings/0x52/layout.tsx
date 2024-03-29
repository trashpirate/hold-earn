import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Flameling ($0x52)",
  description: "A Flameling Dividend Token",
  applicationName: "Flameling ($0x52)",
  twitter: {
    card: "summary_large_image",
    site: "buyholdearn.com",
    creator: "@buyholdearn",
    images: "https://buyholdearn.com/flamelings/0x52.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://buyholdearn.com",
    title: "Flameling ($0x52)",
    description: "A Flameling Dividend Token",
    siteName: "Flameling ($0x52)",
    images: [
      {
        url: "https://buyholdearn.com/flamelings/0x52.jpg",
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

