import { MetadataRoute } from "next";
import { createClient } from "@/src/lib/supabase/client";

// Régénère le sitemap au plus toutes les heures pour inclure les nouvelles œuvres.
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = createClient();

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: "https://sophiedutel-art.fr",
            lastModified: new Date(),
        },
        {
            url: "https://sophiedutel-art.fr/gallery",
            lastModified: new Date(),
        },
        {
            url: "https://sophiedutel-art.fr/about",
            lastModified: new Date(),
        },
        {
            url: "https://sophiedutel-art.fr/contact",
            lastModified: new Date(),
        },
    ];

    const { data: paintings, error } = await supabase
        .from("paintings")
        .select("slug, updated_at");

    if (error) {
        console.error(error);

        return staticPages;
    }

    const paintingsUrls = paintings.map((painting) => ({
        url: `https://sophiedutel-art.fr/gallery/${painting.slug}`,
        lastModified: painting.updated_at ? new Date(painting.updated_at) : new Date(),
    }));

    return [
        ...staticPages,
        ...paintingsUrls,
    ];
}
