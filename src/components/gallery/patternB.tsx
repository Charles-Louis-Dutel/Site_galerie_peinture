import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";


type PatternBType = {
    patternBPaints: Paintings[];
    placement: number;
}


export default function PatternB ({ patternBPaints, placement }: PatternBType) {

    const featured: Paintings[] = patternBPaints.filter((paint) => paint.featured);
    const normal: Paintings[] = patternBPaints.filter((paint) => !paint.featured);
    const isLeft: Boolean = placement % 2 === 0 ? true : false;
    
    return (
        <div className="py-2">
            {isLeft ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense">
                    <div className="relative w-full md:col-span-2 md:row-span-2">
                        <PaintingCard paintingProps={featured[0]} />
                    </div>

                    <div className="relative w-full">
                        <PaintingCard paintingProps={normal[0]} />
                    </div>

                    <div className="relative w-full">
                        <PaintingCard paintingProps={normal[1]} />
                    </div>
                </div>
                    :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense">
                    <div className="relative w-full">
                        <PaintingCard paintingProps={normal[0]} />
                    </div>

                    <div className="relative w-full md:col-span-2 md:row-span-2">
                        <PaintingCard paintingProps={featured[0]} />
                    </div>

                    <div className="relative w-full">
                        <PaintingCard paintingProps={normal[1]} />
                    </div>
                </div>
            }        
        </div>
    );
}