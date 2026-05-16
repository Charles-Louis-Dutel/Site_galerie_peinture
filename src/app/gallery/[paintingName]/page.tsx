import Image from "next/image";
import { Paintings, paintings } from "@/src/lib/painting";


export default async function SpecificPaintingPage({
    params,
}: {
    params: Promise<{ paintingName: string }>
}) {
    const { paintingName } = await params;

    console.log(paintingName);
    const painting: Paintings[] = paintings.filter((paint) => paint.slug === paintingName);

    return (
        <div className="w-full py-20 px-20 2xl:px-40">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center">
                <div className="relative md:col-span-2 w-full max-h-[80dvh]"
                     style={{aspectRatio: `${painting[0].imageWidth} / ${painting[0].imageHeight}`}}
                >
                    <Image
                        src={painting[0].src}
                        alt={painting[0].alt}
                        fill
                        className="object-contain justify-end"
                    />
                </div>

                <div className="flex flex-col w-full">
                    <h1 className="text-4xl text-center 2xl:text-start">
                        {painting[0].title}
                    </h1>
                </div>
            </div>
        </div>
    );
} 