import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";


type PatternCType = {
    patternCPaints: Paintings[];
}


export default function PatternC ({ patternCPaints }: PatternCType) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {patternCPaints.map((painting) => (
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