'use client'

import Image from "next/image"
import { Paintings } from "@/src/lib/painting"
import { useEffect } from "react"
import '@/src/app/globals.css';

type PaintingLightBoxProps = {
    painting: Paintings;
    onClose: () => void;
}


export default function PaintingLightBox({ painting, onClose }: PaintingLightBoxProps) {

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return (() => {
            window.removeEventListener('keydown', handleKeyDown);
        });
    }, [onClose]);

    return (
        <div className="relative">
            <div 
                className="fixed inset-0 z-50 top-0 left-0 w-full h-full bg-black/70
                    flex justify-center p-10 animate-[fadeIn_250ms_ease-out]"
                onClick={() => onClose()}
            >
                <div 
                    className="absolute z-50 top-2 right-2 text-white hover:text-red-500"
                    onClick={() => onClose()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                        stroke-width="1.5" stroke="currentColor" 
                        className="size-6">
        
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>


                <div className="relative max-h-[80vh] max-w-[80vw] animate-[imageReveal_320ms_ease-out]"
                    style={{aspectRatio: `${painting.imageWidth}/${painting.imageHeight}`}}
                    onClick={(event) => event.stopPropagation()}
                >
                    <Image
                        src={painting.src}
                        alt={painting.alt}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}