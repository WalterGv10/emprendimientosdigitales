import type { Metadata } from "next";
import { BUSINESS } from "./constants";

const BASE_URL = "https://emprendedorasdigital.com"; // ← Reemplazar con dominio real

export const siteMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: `${BUSINESS.name} — ${BUSINESS.tagline}`,
        template: `%s | ${BUSINESS.name}`,
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
        images: [
            {
                url: "/og/og-default.jpg",
                width: 1200,
                height: 630,
                alt: BUSINESS.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${BUSINESS.name} — ${BUSINESS.tagline}`,
        description: BUSINESS.description,
        images: ["/og/og-default.jpg"],
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
