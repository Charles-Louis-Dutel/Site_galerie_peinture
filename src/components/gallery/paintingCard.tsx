'use client'

import Image from "next/image";
import { Paintings } from "@/src/lib/types/types";

type PaintingProps = {
    paintingProps: Paintings;
    onPaintingClick: (painting: Paintings) => void;
}

export default function PaintingCard({ paintingProps, onPaintingClick }: PaintingProps) {
    
    return (
        <section style={{aspectRatio: `${paintingProps.image_width}/${paintingProps.image_height}`}} >
            <Image
                src={ `https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/${paintingProps.image_path}` }
                alt={ paintingProps.alt }
                fill
                className="object-cover transition-transform duration-500 ease-out hover:scale-105"
                onClick={() => onPaintingClick(paintingProps)}
            />
        </section>
    );
}