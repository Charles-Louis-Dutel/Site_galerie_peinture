import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";

type GalleryProps = {
    paintings: Paintings[];
}

export default function Gallery ({ paintings }: GalleryProps) {

    return (
        <section>
            <div className="w-full px-6 md:px-12 py-[60]">
                <div className="max-w-7xl mx-auto text-gray-500">
                    <div className="flex flex-col w-full items-center gap-8 text-center pb-60">
                        <h1 className="text-4xl md:text-6xl font-serif font-medium">
                            Galerie
                        </h1>

                        <p className="text-lg md:text-xl">
                            Des peintures à  l’acrylique inspirées par
                            la lumière,  
                            <br className="hidden sm:block"/>
                            {" "}les couleurs et les paysages naturels.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {paintings.map((painting) => (
                            <div
                                key={painting.id} 
                                className={`relative w-full h-full ${ painting.featured ? "col-span-2" : "col-span-1" }`}
                            >
                                    <PaintingCard paintingProps={painting}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}