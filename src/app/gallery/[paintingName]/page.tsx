import { Paintings } from "@/src/lib/types/types";
import ImageContainer from "@/src/components/gallery/specificPainting/imageContainer";
import ImageDescription from "@/src/components/gallery/specificPainting/imageDescription";
import ArtworkInterestSection from "@/src/components/gallery/specificPainting/interestSection";
import supabase from "@/src/lib/supabase";
import { notFound } from "next/navigation";


export default async function SpecificPaintingPage({
    params,
}: {
    params: Promise<{ paintingName: string }>
}) {
    const { paintingName } = await params;
    const { data: painting, error } = await supabase.from("paintings")
                                        .select()
                                        .eq('slug', paintingName)
                                        .maybeSingle();

    if (error)
    {
        console.error(error);
        throw error;
    }
    
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
                </div>
            </div>

            <div className="w-full bg-gray-50 my-16 px-12 py-20 md:py-32">
                <ArtworkInterestSection />
            </div>
        </section>
    );
} 