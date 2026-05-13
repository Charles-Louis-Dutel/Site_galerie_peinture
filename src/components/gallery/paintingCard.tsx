import Image from "next/image";
import { Paintings } from "@/src/lib/painting";

type PaintingProps = {
    paintingProps: Paintings;
}

export default function PaintingCard({ paintingProps }: PaintingProps) {

    return (
        <div 
            className='relative w-full'
            //style={{aspectRatio: `${paintingProps.imageWidth}/${paintingProps.imageHeight}`}}
            style={{aspectRatio: `${paintingProps.featured ? 
                                    `${paintingProps.orientation === 'portrait' ? "3/4" : `${paintingProps.imageWidth}/${paintingProps.imageHeight}`}` :
                                    `${paintingProps.imageWidth}/${paintingProps.imageHeight}`}` }}
        >
                <Image
                    src={ paintingProps.src }
                    alt={ paintingProps.alt }
                    fill
                    
                />
        </div>
    );
}