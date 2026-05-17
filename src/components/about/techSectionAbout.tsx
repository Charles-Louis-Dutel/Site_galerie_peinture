import Image from "next/image";


export default function TechnicalSectionAbout() {

    return (
        <section>
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2
                lg:grid-cols-12 gap-y-12 py-20 md:py-32">
                <div className="flex flex-col w-full md:col-span-2 lg:col-span-4 gap-4 md:gap-8
                    justify-center px-6 md:px-12">
                    <h2 className="text-2xl md:text-3xl font-serif text-gray-600">
                        L'univers de création
                    </h2>

                    <p className="md:text-lg text-gray-500">
                        La plupart des œuvres sont réalisées à l'acrylique,
                        une technique appréciée pour sa spontanéité et la richesse des
                        textures qu'elle permet de créer.
                        <br />
                        <br />
                        Certaines peintures sont également travaillées à l'huile, afin
                        d'explorer d'autres nuances, matières et jeux de lumière.
                    </p>
                </div>

                <div className="md:col-span-2 lg:col-span-7 lg:col-start-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:block gap-6 lg:relative">
                        <div className="relative w-full aspect-4/3">
                            <Image
                                src="/images/atelier-peinture.jpg"
                                alt="Atelier de peinture"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative lg:absolute w-full lg:w-[35%] lg:-bottom-16
                            lg:-left-12 lg:z-10 aspect-square">
                            <Image
                                src="/images/pinceaux.jpg"
                                alt="Pinceaux et palette de couleurs"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}