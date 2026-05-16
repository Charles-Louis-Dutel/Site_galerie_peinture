import { Paintings } from "@/src/lib/painting"


type ImageDescriptionProps = {
    painting: Paintings;
}


export default function ImageDescription({ painting }: ImageDescriptionProps) {

    return (
        <div className="2xl:col-span-2 flex flex-col w-full gap-4 text-center md:text-start
            md:pl-10 lg:pl-20 md:py-10 lg:py-20 font-serif">
            <div className="py-6 xl:py-20">
                <h1 className="text-3xl md:text-4xl xl:text-5xl">
                    {painting.title}
                </h1>
                <div className="border-b border-gray-300 w-15 md:w-10 py-1
                    place-self-center md:place-self-auto"
                >
                </div>
            </div>

            <div className="space-y-4 md:space-y-6">
                <div className="flex flex-col">
                    <span className="font-sans text-xs xl:text-sm">
                        Technique
                    </span>
                    <p className="text-xl xl:text-2xl">
                        {painting.medium}
                    </p>
                </div>

                <div className="flex flex-col">
                    <span className="font-sans text-xs xl:text-sm">
                        Dimensions
                    </span>
                    <p className="text-xl xl:text-2xl">
                        {`${painting.width} x ${painting.height} cm`}
                    </p>
                </div>

                <div className="flex flex-col">
                    <span className="font-sans text-xs xl:text-sm">
                        Année
                    </span>
                    <p className="text-xl xl:text-2xl">
                        {painting.year}
                    </p>
                </div>
            </div>
        </div>
    );
}