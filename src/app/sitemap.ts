import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";

const BASE_URL = "https://www.walwebs.com";

export default function sitemap(): MetadataRoute.Sitemap {
    const servicePages = SERVICES.map((service) => ({
        url: `${BASE_URL}/servicios/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/servicios`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        ...servicePages,
        {
            url: `${BASE_URL}/contacto`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7,
        },
        // Walwebs Profile Section
        {
            url: `${BASE_URL}/perfil`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/perfil/servicios`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/perfil/trabajo`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];
}
