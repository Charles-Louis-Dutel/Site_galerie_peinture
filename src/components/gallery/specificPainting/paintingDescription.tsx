import { Paintings } from "@/src/lib/types/types"


type PaintingDescriptionProps = {
    painting: Paintings;
}


export default function PaintingDescription({ painting }: PaintingDescriptionProps) {

    // trim() sert uniquement à savoir s'il faut afficher : le texte rendu reste celui saisi.
    if (!painting.description?.trim())
    {
        return (null);
    }

    return (
        <div className="md:col-span-2 2xl:col-span-4 2xl:col-start-2">
            <p className="font-sans text-sm xl:text-base text-gray-500 leading-relaxed
                whitespace-pre-line text-start max-w-prose mx-auto px-4 md:px-0">
                {painting.description}
            </p>
        </div>
    );
}
