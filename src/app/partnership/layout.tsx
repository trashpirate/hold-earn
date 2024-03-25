import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "EARN Partnership Program",
    description: "Elevate your crypto project and enroll in the EARN Partnership Program!",
    applicationName: "Flamelings",
    twitter: {
        card: "summary_large_image",
        site: "buyholdearn.com/partnership",
        creator: "@buyholdearn",
        images: "https://buyholdearn.com/earn_partnership.jpg",
    },
    openGraph: {
        type: "website",
        url: "https://buyholdearn.com/partnership",
        title: "EARN Partnership Program",
        description: "Elevate your crypto project and enroll in the EARN Partnership Program!",
        siteName: "EARN Partnership Program",
        images: [
            {
                url: "https://buyholdearn.com/earn_partnership.jpg",
            },
        ],
    },
};

export default function PartnershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <main>{children}</main>;
}