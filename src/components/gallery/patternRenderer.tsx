import { Paintings } from "@/src/lib/painting"
import PaintingCard from "@/src/components/gallery/paintingCard";

type PatternRendererProps = {
    paintings: Paintings[];
}


function extractPortraitPainting(paintings : Paintings[]) : Paintings[] {
    const portraitPaints: Paintings[] = paintings.filter((painting) => 
        (painting.orientation === "portrait" && !painting.featured));

    return (portraitPaints);
}


function extractLandscapePainting(paintings : Paintings[]) : Paintings[] {
    const landscapePaints: Paintings[] = paintings.filter((painting) =>
        (painting.orientation === "landscape" && !painting.featured));

    return (landscapePaints);
}


function extractPortraitFeatured(paintings: Paintings[]) : Paintings[] {
    const portraitFeatured: Paintings[] = paintings.filter((painting) => 
        (painting.orientation === "portrait" && painting.featured));

    return (portraitFeatured);
}


function extractLandscapeFeatured(paintings: Paintings[]) : Paintings[] {
    const landscapeFeatured: Paintings[] = paintings.filter((painting) =>
        (painting.orientation === "landscape" && painting.featured));

    return (landscapeFeatured);
}


export default function PatternRenderer({ paintings }: PatternRendererProps) {

    const portraitPaints: Paintings[] = extractPortraitPainting(paintings);
    const landscapePaints: Paintings[] = extractLandscapePainting(paintings);
    const portraitFeatured: Paintings[] = extractPortraitFeatured(paintings);
    const landscapeFeatured: Paintings[] = extractLandscapeFeatured(paintings);

    const patterns = [];
    let index: number = 0;
    let indexPortraits: number = 0;
    let indexLandscape: number = 0;
    let indexPortraitsFeatured: number = 0;
    let indexLandscapeFeatured: number = 0;
    const allPaintings: number = portraitPaints.length + landscapePaints.length + portraitFeatured.length + landscapeFeatured.length;


    while (index < allPaintings) {
        //Pattern A: 1 featured landscape, 2 landscape
        if (indexLandscapeFeatured < landscapeFeatured.length && indexLandscape + 1 < landscapePaints.length)
        {
            patterns.push(
                {
                    type: "A",
                    paintings: [landscapeFeatured[indexLandscapeFeatured],
                                landscapePaints[indexLandscape],
                                landscapePaints[indexLandscape + 1]], 
                }
            );
            indexLandscapeFeatured++;
            indexLandscape += 2;
            index += 3;
        }

        //Pattern B: 1 featured portrait, 2 portrait

    }

    return (
        <>
        </>
    )
}


{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-4 grid-flow-dense"
>
    {landscapePaints.map((painting) => (
        <div
            key={painting.id} 
            className={`relative overflow-hidden
                ${ painting.featured ? 
                    "md:col-span-2 md:row-span-2" : 
                    "md:col-span-1 md:row-span-1" }`}
        >
                <PaintingCard paintingProps={painting}/>
        </div>
    ))}

    {portraitPaints.map((painting) => (
        <div
            key={painting.id} 
            className={`relative overflow-hidden
                ${ painting.featured ? 
                    "md:col-span-2 md:row-span-2" : 
                    "md:col-span-1 md:row-span-1" }`}
        >
                <PaintingCard paintingProps={painting}/>
        </div>
    ))}

</div> */}