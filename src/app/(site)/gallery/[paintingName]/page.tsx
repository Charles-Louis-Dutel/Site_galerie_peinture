import ImageContainer from "@/src/components/gallery/specificPainting/imageContainer";
import ImageDescription from "@/src/components/gallery/specificPainting/imageDescription";
import PaintingDescription from "@/src/components/gallery/specificPainting/paintingDescription";
import ArtworkInterestSection from "@/src/components/gallery/specificPainting/interestSection";
import { createClient } from "@/src/lib/supabase/client";
import { notFound } from "next/navigation";
import { Metadata } from "next";


type SpecificPaintingPageProps = {
    params: Promise<{ paintingName: string }>;
};


async function getPainting(paintingName: string) {
    const supabase = createClient();

    const { data: painting, error } = await supabase.from("paintings")
                                                    .select()
                                                    .eq('slug', paintingName)
                                                    .maybeSingle();

    if (error)
    {
        throw error;
    }

    return (painting);
}


export async function generateMetadata({
    params,
}: SpecificPaintingPageProps): Promise<Metadata> {
    const { paintingName } = await params;
    const painting = await getPainting(paintingName);

    if (!painting)
    {
        return ({
            title: "Œuvre introuvable",
            description: "Cette œuvre n'existe pas ou n'est plus disponible.",
        });
    }

    const title = `${painting.title} | Sophie Dutel`;
    const description = painting.description || 
        `${painting.title} est une peinture originale réalisé par Sophie Dutel.
        Découvrez cette œuvre dans la galerie en ligne.`;
    // URL relative : résolue en absolu grâce au metadataBase du layout racine.
    const url = `/gallery/${painting.slug}`;
    const imageUrl = `https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/${painting.image_path}`;

    return ({
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [
                {
                    url: imageUrl,
                    width: painting.image_width,
                    height: painting.image_height,
                    alt: painting.alt,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                {
                    url: imageUrl,
                    alt: painting.alt,
                },
            ],
        },
    });
}


export default async function SpecificPaintingPage({
    params,
}: SpecificPaintingPageProps) {
    
    const { paintingName } = await params;
    const painting = await getPainting(paintingName);
    
    if (!painting)
    {
        notFound();
    }

    return (
        <section>
            <div className="w-full py-4 md:pt-14 pb-20 md:pb-32 px-2 md:px-20 2xl:px-40 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-7 gap-10">
                    <ImageContainer painting={painting} />
                    <ImageDescription painting={painting} />
                    <PaintingDescription painting={painting} />
                </div>
            </div>

            <div className="w-full bg-gray-50 my-16 px-12 py-20 md:py-32">
                <ArtworkInterestSection />
            </div>
        </section>
    );
} 