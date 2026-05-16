import { paintings } from "@/src/lib/painting";
import Gallery from "@/src/components/gallery/gallery";

export default function GalleryPage() {
    return (
        <>
            <Gallery paintings={paintings}/>
        </>
    );
}
