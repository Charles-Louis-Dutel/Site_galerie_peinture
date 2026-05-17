'use client'

import Image from "next/image";
import { Paintings } from "@/src/lib/painting";

type PaintingProps = {
    paintingProps: Paintings;
    onPaintingClick: (painting: Paintings) => void;
}

export default function PaintingCard({ paintingProps, onPaintingClick }: PaintingProps) {

    return (
        <section style={{aspectRatio: `${paintingProps.imageWidth}/${paintingProps.imageHeight}`}} >
            <Image
                src={ paintingProps.src }
                alt={ paintingProps.alt }
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                onClick={() => onPaintingClick(paintingProps)}
            />
        </section>
    );
}