import Image from "next/image";
import Link from "next/link";
import { Paintings, paintings } from "@/src/lib/painting";
import '@/src/app/globals.css';


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
        <div className="w-full py-14 px-2 md:px-20 2xl:px-40">
            <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-7 gap-10">
                <div className="flex flex-col md:col-span-2 2xl:col-span-4
                        2xl:col-start-2 items-center">
                        <div className="flex flex-col items-start">
                            <div className="flex mb-8 gap-1">
                                <p>{'<'}-{' '}</p>
                                <Link href="/gallery" className="nav-link">Retour a la galerie</Link>
                            </div>

                            <div className="inline-flex p-3 md:p-5 bg-stone-100 border
                                border-zinc-300/30 ">
                                <Image
                                    src={painting.src}
                                    alt={painting.alt}
                                    width={painting.imageWidth}
                                    height={painting.imageHeight}
                                    className="block w-auto h-auto max-w-full max-h-[75dvh]"
                                />
                            </div>
                        </div>
                </div>

                <div className="2xl:col-span-2 flex flex-col w-full gap-4 text-start md:pl-20
                    md:py-20 font-serif">
                    <div className="py-20">
                        <h1 className="text-5xl">
                            {painting.title}
                        </h1>
                        <div className="border-b border-gray-300 w-10 py-1"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="font-sans text-sm">
                                Technique
                            </span>
                            <p className="text-2xl">
                                {painting.medium}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-sans text-sm">
                                Dimensions
                            </span>
                            <p className="text-2xl">
                                {`${painting.width} x ${painting.height} cm`}
                            </p>
                        </div>

                        <div className="flex flex-col">
                            <span className="font-sans text-sm">
                                Année
                            </span>
                            <p className="text-2xl">
                                {painting.year}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 