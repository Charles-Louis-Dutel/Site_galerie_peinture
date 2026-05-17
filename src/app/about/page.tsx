import Image from "next/image";

export default function AboutPage() {
    
    return (
        <section>
            <div className="w-full py-10 md:py-20 px-6 md:px-12">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2
                    gap-y-12 py-20 md:pb-32"
                >
                    <div className="flex flex-col gap-4 md:gap-8 justify-center px-6 md:px-12">
                        <span className="text-xs md:text-sm font-sans text-gray-500">
                            Derrière les œuvres
                        </span>

                        <h1 className="text-2xl md:text-3xl font-serif text-gray-600">
                            Une peinture inspirée par la lumière et les paysages
                        </h1>

                        <p className="md:text-lg text-gray-500">
                            La peinture occupe une place importante dans sa vie depuis
                            toujours. Inspirée par la nature, les paysages et les variations
                            de lumière, Sophie Dutel crée des œuvres où les couleurs et les 
                            matières cherchent avant tout à transmettre une émotion et une 
                            atmosphère apaisante.
                        </p>
                    </div>

                    <div className="relative w-full lg:max-h-[50dvh] aspect-3/4">
                        <Image
                            src="/images/artiste.jpeg"
                            alt="Artiste en train de peindre"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="flex w-full justify-center">
                    <div className="w-[75dvw] border-b border-gray-200"></div>
                </div>

                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2
                    gap-y-12 py-20 md:py-32"
                >
                    <div className="order-2 lg:order-1 relative w-full lg:max-h-[50dvh]
                        aspect-4/3"
                    >
                        <Image
                            src="/images/saint-jean.jpg"
                            alt="Couché de soleil sur la jeté de Saint-Jean-de-Monts"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-8
                        justify-center px-6 md:px-12"
                    >
                            <h2 className="text-2xl md:text-3xl font-serif text-gray-600">
                                Une passion née du regard porté sur la nature
                            </h2>

                            <p className="md:text-lg text-gray-500">
                                La plupart des œuvres naissent d'un paysage, d'une lumière ou
                                d'une atmosphère qui attire particulièrement son regard.
                                <br />
                                <br />
                                Les couleurs et les contrastes se construisent ensuite
                                progressivement, de manière instinctive, au fil de la peinture.
                            </p>
                        </div>
                </div>
            </div>
        </section>
    );
}