import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Flameling Tokens",
    description: "Flameling Dividend Tokens",
    applicationName: "Flamelings",
    twitter: {
        card: "summary_large_image",
        site: "buyholdearn.com",
        creator: "@buyholdearn",
        images: "https://buyholdearn.com/flamelings/preview.jpeg",
    },
    openGraph: {
        type: "website",
        url: "https://buyholdearn.com",
        title: "Flameling Tokens",
        description: "Flameling Dividend Tokens",
        siteName: "Flameling Tokens",
        images: [
            {
                url: "https://buyholdearn.com/flamelings/preview.jpeg",
            },
        ],
    },
};

export default function FlamelingTokenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}