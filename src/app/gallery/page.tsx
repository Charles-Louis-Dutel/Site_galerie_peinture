import { paintings } from "@/src/lib/painting";
import Gallery from "@/src/components/gallery/gallery";

export default function GalleryPage() {
    return (
        <>
            <Gallery paintings={paintings}/>
        </>
    );
}

{/* <ul>
    {paintings.map((painting) => (
        <li key={painting.slug}>
            <Link href={`/gallery/${painting.slug}`}>{painting.title}</Link>
        </li>
    ))}
</ul> */}