import Image from "next/image";
import { Paintings, paintings } from "@/src/lib/painting";


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
        <div className="w-full py-24 px-2 md:px-20 2xl:px-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="flex md:col-span-2 justify-center">
                    <div className="inline-flex p-3 md:p-5 bg-stone-100 border
                        border-zinc-300/30 ">
                        <Image
                            src={painting.src}
                            alt={painting.alt}
                            width={painting.imageWidth}
                            height={painting.imageHeight}
                            className="block w-auto h-auto max-w-full max-h-[80dvh]"
                        />
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <h1 className="text-4xl text-center 2xl:text-start">
                        {painting.title}
                    </h1>
                </div>
            </div>
        </div>
    );
} 