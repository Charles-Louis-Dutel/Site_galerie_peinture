import { Paintings, paintings } from "@/src/lib/painting";
import ImageContainer from "@/src/components/gallery/specificPainting/imageContainer";
import ImageDescription from "@/src/components/gallery/specificPainting/imageDescription";
import Link from "next/link";


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
            <div className="w-full py-4 md:py-14 px-2 md:px-20 2xl:px-40 mb-[60]">
                <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-7 gap-10">
                    <ImageContainer painting={painting} />
                    <ImageDescription painting={painting} />
                </div>
            </div>

            <div className="w-full bg-gray-50 mt-[60] px-6 md:px-12 py-[60]">
                <div className="flex flex-col items-center max-w-7xl mx-auto gap-6">
                    <span>
                        Cette œuvre vous intéresse ?
                    </span>

                    <p>
                        Si vous voulez plus de renseignements ou si vous avez des questions
                        concernant une oeuvre, n'hésitez pas à prendre contact.
                    </p>

                    <button 
                        type="button"
                        className="border py-4 px-8 bg-black text-white"
                    >
                            <Link href="/contact">
                                Contacter l'artiste
                            </Link>
                    </button>
                </div>
            </div>
        </section>
    );
} 