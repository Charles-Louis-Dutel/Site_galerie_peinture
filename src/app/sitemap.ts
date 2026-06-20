import { MetadataRoute } from "next";
import { createClient } from "@/src/lib/supabase/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const supabase = createClient();

    const { data: paintings, error } = await supabase
        .from("paintings")
        .select("slug");

    if (error) {
        console.error(error);

        return [];
    }

    const paintingsUrls = paintings.map((painting) => ({
        url: `https://sophiedutel-art.fr/gallery/${painting.slug}`,
        lastModified: new Date(),
    }));

    return [
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
        ...paintingsUrls,
    ];
}