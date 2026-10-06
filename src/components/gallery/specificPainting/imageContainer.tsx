import Image from "next/image";
import Link from "next/link";
import { Paintings } from "@/src/lib/types/types";
import '@/src/app/globals.css';


type ImageContainerProps = {
    painting: Paintings;
}


export default function ImageContainer({ painting }: ImageContainerProps) {

    return (
        <div className="flex flex-col md:col-span-2 2xl:col-span-4
                2xl:col-start-2 items-center">
            <div className="flex flex-col items-start">
                <div className="flex mb-4 md:mb-8 gap-1">
                    <p>{'<'}-{' '}</p>
                    <Link
                        href="/gallery"
                        className="nav-link cursor-pointer"
                    >
                        Retour a la galerie
                    </Link>
                </div>

                <div className="inline-flex p-3 md:p-5 bg-stone-100 border
                    border-zinc-300/30 ">
                    <Image
                        src={ `https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/${painting.image_path}` }
                        alt={painting.alt}
                        width={painting.image_width}
                        height={painting.image_height}
                        className="block w-auto h-auto max-w-full max-h-[75dvh]"
                    />
                </div>
            </div>
        </div>
    );
}