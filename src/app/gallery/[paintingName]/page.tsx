import { Paintings, paintings } from "@/src/lib/painting";
import ImageContainer from "@/src/components/gallery/specificPainting/imageContainer";
import ImageDescription from "@/src/components/gallery/specificPainting/imageDescription";
import ArtworkInterestSection from "@/src/components/gallery/specificPainting/interestSection";


export default async function SpecificPaintingPage({
    params,
}: {
    params: Promise<{ paintingName: string }>
}) {
    const { paintingName } = await params;

    console.log(paintingName);
    const painting: Paintings | undefined = paintings.find((paint) => paint.slug === paintingName);

    if (!painting) {
        return (
            <div>
                Tableau introuvable
            </div>
        );
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