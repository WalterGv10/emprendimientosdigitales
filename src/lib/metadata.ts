import type { Metadata } from "next";
import { BUSINESS } from "./constants";

const BASE_URL = "https://www.walwebs.com"; // Updated Domain

export const siteMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: `${BUSINESS.name} — ${BUSINESS.tagline}`,
        template: `%s | ${BUSINESS.name}`,
    },
    icons: {
        icon: "/logo1.webp",
        apple: "/logo1.webp",
    },
    description: BUSINESS.description,
    keywords: [
        "emprendedoras",
        "ventas en línea",
        "landing page",
        "catálogo digital",
        "ventas por live",
        "Facebook Live ventas",
        "TikTok Live ventas",
        "diseño web emprendedoras",
        "soluciones digitales",
        "Guatemala",
    ],
    authors: [{ name: BUSINESS.name }],
    creator: BUSINESS.name,
    openGraph: {
        type: "website",
        locale: "es_GT",
        url: BASE_URL,
        siteName: BUSINESS.name,
        title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
        description: BUSINESS.description,
        // images: automatically handled by opengraph-image.tsx
    },
    twitter: {
        card: "summary_large_image",
        title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
        description: BUSINESS.description,
        // images: automatically handled by opengraph-image.tsx
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
};
