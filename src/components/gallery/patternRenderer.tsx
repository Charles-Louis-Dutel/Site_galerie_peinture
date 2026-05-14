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
    const paintingsLeft = [];
    let index: number = 0;
    let indexPortraits: number = 0;
    let indexLandscape: number = 0;
    let indexPortraitsFeatured: number = 0;
    let indexLandscapeFeatured: number = 0;
    const allPaintings: number = portraitPaints.length + landscapePaints.length + portraitFeatured.length + landscapeFeatured.length;


    while (index < allPaintings) {

        if (indexLandscapeFeatured < landscapeFeatured.length && indexLandscape + 1 < landscapePaints.length)
        {
            //Pattern A: 1 featured landscape, 2 landscapes
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
        else if (indexPortraitsFeatured < portraitFeatured.length && indexPortraits + 1 < portraitPaints.length)
        {
            //Pattern B: 1 featured portrait, 2 portraits
            patterns.push(
                {
                    type: "B",
                    paintings: [portraitFeatured[indexPortraitsFeatured],
                                portraitPaints[indexPortraits],
                                portraitPaints[indexPortraits + 1]],
                }
            );
            indexPortraitsFeatured++;
            indexPortraits += 2;
            index += 3;
        }
        else if (indexLandscapeFeatured >= landscapeFeatured.length && indexLandscape + 2 < landscapePaints.length)
        {
            //Pattern C: 3 landscapes
            patterns.push(
                {
                    type: "C",
                    paintings: [landscapePaints[indexLandscape],
                                landscapePaints[indexLandscape + 1],
                                landscapePaints[indexLandscape + 2]],
                }
            );
            indexLandscape += 3;
            index += 3;
        }
        else if (indexPortraitsFeatured >= portraitFeatured.length && indexPortraits + 2 < portraitPaints.length)
        {
            //Pattern D: 3 portraits
            patterns.push(
                {
                    type: "D",
                    paintings: [portraitPaints[indexPortraits],
                                portraitPaints[indexPortraits + 1],
                                portraitPaints[indexPortraits + 2]],
                }
            );
            indexPortraits += 3;
            index += 3;
        }
        else
        {
            while (index < allPaintings)
            {
                while (indexLandscapeFeatured < landscapeFeatured.length)
                {
                    paintingsLeft.push(landscapeFeatured[indexLandscapeFeatured]);
                    indexLandscapeFeatured++;
                    index++;
                }
                while (indexPortraitsFeatured < portraitFeatured.length)
                {
                    paintingsLeft.push(portraitFeatured[indexPortraitsFeatured]);
                    indexPortraitsFeatured++;
                    index++;
                }
                while (indexLandscape < landscapePaints.length)
                {
                    paintingsLeft.push(landscapePaints[indexLandscape]);
                    indexLandscape++;
                    index++;
                }
                while (indexPortraits < portraitPaints.length)
                {
                    paintingsLeft.push(portraitPaints[indexPortraits]);
                    indexPortraits++;
                    index++;
                }
            }

            //Pattern default
            patterns.push(
                {
                    type: "Default",
                    paintings: paintingsLeft,
                }
            );
        }
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