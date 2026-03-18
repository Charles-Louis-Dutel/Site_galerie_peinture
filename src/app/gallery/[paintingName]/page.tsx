import Image from "next/image";
import { paintings } from "@/src/lib/painting";

export default async function SpecificPaintingPage({
    params,
}: { params: Promise<{ paintingName: string }>
}) {
    const { paintingName } = await params;
    const [paint] = paintings.filter((painting) => {
        return (painting.slug === paintingName);
    });
    
    return (
        <div>
            <h1>{paint.title}</h1>
            <Image src={paint.src} alt={paint.title} width={500} height={500}/>
        </div>
    );
} 