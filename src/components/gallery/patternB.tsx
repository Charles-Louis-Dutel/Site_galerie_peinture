import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";


type PatternBType = {
    patternBPaints: Paintings[];
    placement: number;
    onPaintingClick: (painting: Paintings) => void;
}


export default function PatternB ({ patternBPaints, placement, onPaintingClick }: PatternBType) {

    const featured: Paintings[] = patternBPaints.filter((paint) => paint.featured);
    const normal: Paintings[] = patternBPaints.filter((paint) => !paint.featured);
    const isLeft: Boolean = placement % 2 === 0 ? true : false;
    
    return (
        <div className="py-2">
            {isLeft ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense">
                    <div className="relative w-full md:col-span-2 md:row-span-2 overflow-hidden">
                        <PaintingCard paintingProps={featured[0]} onPaintingClick={onPaintingClick}/>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <PaintingCard paintingProps={normal[0]} onPaintingClick={onPaintingClick}/>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <PaintingCard paintingProps={normal[1]} onPaintingClick={onPaintingClick}/>
                    </div>
                </div>
                    :
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 grid-flow-dense">
                    <div className="relative w-full overflow-hidden">
                        <PaintingCard paintingProps={normal[0]} onPaintingClick={onPaintingClick}/>
                    </div>

                    <div className="relative w-full md:col-span-2 md:row-span-2 overflow-hidden">
                        <PaintingCard paintingProps={featured[0]} onPaintingClick={onPaintingClick}/>
                    </div>

                    <div className="relative w-full overflow-hidden">
                        <PaintingCard paintingProps={normal[1]} onPaintingClick={onPaintingClick}/>
                    </div>
                </div>
            }        
        </div>
    );
}