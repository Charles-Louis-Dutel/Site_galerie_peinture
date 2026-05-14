import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";


type PatternDefType = {
    patternDefPaints: Paintings[];
}


export default function PatternDefault ({ patternDefPaints }: PatternDefType) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-2">
            {patternDefPaints.map((painting) => (
                <div
                    key={painting.id} 
                    className='relative overflow-hidden'
                >
                    <PaintingCard paintingProps={painting}/>
                </div>
            ))}       
        </div>
    );
}