import { Paintings } from "@/src/lib/painting"

type GalleryProps = {
    paintings: Paintings[];
}

export default function Gallery ({ paintings }: GalleryProps) {

    return (
        <section>
            <h1>Galerie</h1>
        </section>
    );
}