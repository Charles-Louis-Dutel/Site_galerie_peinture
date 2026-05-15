import { Paintings } from "@/src/lib/painting";
import PatternA from "@/src/components/gallery/patternA";
import PatternB from "@/src/components/gallery/patternB";
import PatternDefault from "@/src/components/gallery/patternDefault";


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


function extractSquarePainting(paintings: Paintings[]) : Paintings[] {
    const squarePaints: Paintings[] = paintings.filter((painting) =>
        (painting.orientation === "square" && !painting.featured));

    return (squarePaints);
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


function extractSquareFeatured(paintings: Paintings[]) : Paintings[] {
    const squareFeatured: Paintings[] = paintings.filter((painting) =>
        (painting.orientation === "square" && painting.featured));

    return (squareFeatured);
}


export default function PatternRenderer({ paintings }: PatternRendererProps) {

    const portraitPaints: Paintings[] = extractPortraitPainting(paintings);
    const landscapePaints: Paintings[] = extractLandscapePainting(paintings);
    const squarePaints: Paintings[] = extractSquarePainting(paintings);
    const portraitFeatured: Paintings[] = extractPortraitFeatured(paintings);
    const landscapeFeatured: Paintings[] = extractLandscapeFeatured(paintings);
    const squareFeatured: Paintings[] = extractSquareFeatured(paintings);

    const patterns = [];
    const paintingsLeft = [];
    let index: number = 0;
    let leftRightPlacement: number = 0;
    let indexPortraits: number = 0;
    let indexLandscape: number = 0;
    let indexSquare: number = 0;
    let indexPortraitsFeatured: number = 0;
    let indexLandscapeFeatured: number = 0;
    let indexSquareFeatured: number = 0;
    let patternCreated: boolean = false;
    const allPaintings: number = portraitPaints.length + landscapePaints.length + portraitFeatured.length + landscapeFeatured.length + squarePaints.length + squareFeatured.length;


    while (index < allPaintings)
    {
        patternCreated = false

        if (indexLandscapeFeatured < landscapeFeatured.length && indexLandscape + 1 < landscapePaints.length)
        {
            //Pattern A: 1 featured landscape, 2 landscapes
            patterns.push(
                {
                    type: "A",
                    paintings: [landscapeFeatured[indexLandscapeFeatured],
                                landscapePaints[indexLandscape],
                                landscapePaints[indexLandscape + 1]],
                    leftRightPlacement, 
                }
            );
            leftRightPlacement++;
            indexLandscapeFeatured++;
            indexLandscape += 2;
            index += 3;
            patternCreated = true;
        }
        if (indexPortraitsFeatured < portraitFeatured.length && indexPortraits + 1 < portraitPaints.length)
        {
            //Pattern B: 1 featured portrait, 2 portraits
            patterns.push(
                {
                    type: "B",
                    paintings: [portraitFeatured[indexPortraitsFeatured],
                                portraitPaints[indexPortraits],
                                portraitPaints[indexPortraits + 1]],
                    leftRightPlacement,
                }
            );
            leftRightPlacement++;
            indexPortraitsFeatured++;
            indexPortraits += 2;
            index += 3;
            patternCreated = true;
        }
        if (indexSquareFeatured < squareFeatured.length && indexSquare + 1 < squarePaints.length)
        {
            //Patern S: 1 featured square, 2 squares
            patterns.push(
                {
                    type: "S",
                    paintings: [squareFeatured[indexSquareFeatured],
                                squarePaints[indexSquare],
                                squarePaints[indexSquare + 1]],
                    leftRightPlacement,
                }
            );
            leftRightPlacement++;
            indexSquareFeatured++;
            indexSquare += 2;
            index += 3;
            patternCreated = true;
        }
        if (patternCreated === false)
        {
            while (indexLandscapeFeatured < landscapeFeatured.length)
            {
                landscapePaints.push(landscapeFeatured[indexLandscapeFeatured]);
                indexLandscapeFeatured++;
            }
            while (indexPortraitsFeatured < portraitFeatured.length)
            {
                portraitPaints.push(portraitFeatured[indexPortraitsFeatured]);
                indexPortraitsFeatured++;
            }
            while (indexSquareFeatured < squareFeatured.length)
            {
                squarePaints.push(squareFeatured[indexSquareFeatured]);
                indexSquareFeatured++;
            }
            break;
        }
    }

    while (index < allPaintings)
    {
        patternCreated = false;

        if (indexLandscape + 2 < landscapePaints.length)
        {
            //Pattern C: 3 landscapes
            patterns.push(
                {
                    type: "C",
                    paintings: [landscapePaints[indexLandscape],
                                landscapePaints[indexLandscape + 1],
                                landscapePaints[indexLandscape + 2]],
                    leftRightPlacement: 0,
                }
            );
            indexLandscape += 3;
            index += 3;
            patternCreated = true;
        }
        if (indexPortraits + 2 < portraitPaints.length)
        {
            //Pattern D: 3 portraits
            patterns.push(
                {
                    type: "D",
                    paintings: [portraitPaints[indexPortraits],
                                portraitPaints[indexPortraits + 1],
                                portraitPaints[indexPortraits + 2]],
                    leftRightPlacement: 0,
                }
            );
            indexPortraits += 3;
            index += 3;
            patternCreated = true;
        }
        if (indexSquare + 2 < squarePaints.length)
        {
            //Pattern s: 3 squares
            patterns.push(
                {
                    type: "s",
                    paintings: [squarePaints[indexSquare],
                                squarePaints[indexSquare + 1],
                                squarePaints[indexSquare + 2]],
                    leftRightPlacement: 0,
                }
            );
            indexSquare += 3;
            index += 3;
            patternCreated = true;
        }
        if (patternCreated === false)
            break;
    }

    while (index < allPaintings)
    {
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
        while (indexSquare < squarePaints.length)
        {
            paintingsLeft.push(squarePaints[indexSquare]);
            indexSquare++;
            index++;
        }
    }

    //Pattern default
    if (paintingsLeft.length > 0)
    {
        patterns.push(
            {
                type: "Default",
                paintings: paintingsLeft,
                leftRightPlacement: 0,
            }
        );
    }

    return (
        <div>
            {patterns.map((pattern, index) => {
                
                switch (pattern.type)
                {
                    case "A":
                        return (<PatternA 
                                    key={`pattern-a-${index}`}
                                    patternAPaints={pattern.paintings}
                                    placement={pattern.leftRightPlacement} />);
                    case "B":
                        return (<PatternB
                                    key={`pattern-b-${index}`}
                                    patternBPaints={pattern.paintings}
                                    placement={pattern.leftRightPlacement} />);
                    case "C":
                        return (<PatternDefault 
                                    key={`pattern-c-${index}`}
                                    patternDefPaints={pattern.paintings} />);
                    case "D":
                        return (<PatternDefault 
                                    key={`pattern-d-${index}`}
                                    patternDefPaints={pattern.paintings} />);
                    case "S":
                        return (<PatternB
                                    key={`pattern-S-${index}`}
                                    patternBPaints={pattern.paintings}
                                    placement={pattern.leftRightPlacement} />);
                    case "s":
                        return (<PatternDefault 
                                    key={`pattern-s-${index}`}
                                    patternDefPaints={pattern.paintings} />);
                    default:
                        return (<PatternDefault
                                    key={`pattern-default-${index}`}
                                    patternDefPaints={pattern.paintings} />);
                }
            })}
        </div>
    )
}
