import Image from "next/image";
import { Paintings } from "@/src/lib/painting";

type PaintingProps = {
    paintingProps: Paintings;
}

export default function PaintingCard({ paintingProps }: PaintingProps) {

    return (
        <div 
            className=''
            style={{aspectRatio: `${paintingProps.imageWidth}/${paintingProps.imageHeight}`}}
        >
                <Image
                    src={ paintingProps.src }
                    alt={ paintingProps.alt }
                    fill
                    className="object-contain"
                />
        </div>
    );
}