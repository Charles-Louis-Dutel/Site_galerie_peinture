"use client"

import { Paintings } from "@/src/lib/painting"
import PatternRenderer from "@/src/components/gallery/patternRenderer";
import PaintingLightBox from "@/src/components/gallery/paintingLightBox";
import { useState } from "react";

type GalleryProps = {
    paintings: Paintings[];
}


export default function Gallery ({ paintings }: GalleryProps) {

    const [selectedPainting, setSelectedPainting] = useState<Paintings | null>(null);

    function onPaintingClick(painting: Paintings) {
        setSelectedPainting(painting);
    }

    function onClose() {
        setSelectedPainting(null);
    }

    return (
        <section>
            <div className="w-full px-6 md:px-12 pt-20 pb-64">
                <div className="max-w-7xl mx-auto text-gray-500">
                    <section className="flex flex-col w-full items-center gap-8 text-center pb-60">
                        <h1 className="text-4xl md:text-6xl font-serif font-medium">
                            Galerie
                        </h1>

                        <p className="text-lg md:text-xl">
                            Des peintures à l'huile et à l’acrylique inspirées par
                            la lumière,  
                            <br className="hidden sm:block"/>
                            {" "}les couleurs et les paysages naturels.
                        </p>
                    </section>

                    <PatternRenderer paintings={paintings} onPaintingClick={onPaintingClick}/>

                    <section>
                        {selectedPainting
                            ? <PaintingLightBox painting={selectedPainting} onClose={onClose}/>
                            : <></>
                        }
                    </section>
                </div>
            </div>

            <div className="flex w-full justify-center px-6 md:px-12">
                <div className="w-full border-b border-gray-100"></div>
            </div>
        </section>
    );
}
