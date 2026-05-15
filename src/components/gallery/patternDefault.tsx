import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";


type PatternDefType = {
    patternDefPaints: Paintings[];
    onPaintingClick: (painting: Paintings) => void;
}


export default function PatternDefault ({ patternDefPaints, onPaintingClick }: PatternDefType) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
            {patternDefPaints.map((painting) => (
                <div
                    key={painting.id} 
                    className='relative overflow-hidden'
                >
                    <PaintingCard paintingProps={painting} onPaintingClick={onPaintingClick}/>
                </div>
            ))}       
        </div>
    );
}