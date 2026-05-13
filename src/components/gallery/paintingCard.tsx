import Image from "next/image";
import { Paintings } from "@/src/lib/painting";

type PaintingProps = {
    paintingProps: Paintings;
}

export default function PaintingCard({ paintingProps }: PaintingProps) {

    return (
        <div className={`w-full aspect-auto`}>
            <Image
                src={ paintingProps.src }
                alt={ paintingProps.alt }
                fill  
            />
        </div>
    );
}