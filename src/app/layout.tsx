import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

import { IBM_Plex_Sans } from "next/font/google";
const globalFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BUY, HOLD, EARN, BURN",
  description: "BuyHoldEarn Website",
  applicationName: "BuyHoldEarn Website",
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "https://buyholdearn.com/logo.jpg",
  },
  openGraph: {
    type: "website",
    url: "https://buyholdearn.com",
    title: "BUY, HOLD, EARN, BURN",
    description: "BuyHoldEarn Website",
    siteName: "BUY, HOLD, EARN, BURN",
    images: [
      {
        url: "https://buyholdearn.com/logo.png",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={globalFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
