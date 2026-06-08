
import { createClient } from "../supabase/client";
import * as z from "zod";


type paintingInfos = {
    image_width: number;
    image_height: number;
    slug: string;
    image_path: string;
    alt: string;
    description: string;
    featured: boolean;
    height: number;
    imageUpload: z.core.File;
    medium: string;
    orientation: "landscape" | "portrait" | "square";
    title: string;
    width: number;
    year: number;
}

export default async function insertIntoDB(painting: paintingInfos) {

    const supabase = createClient();

    const { data, error } = await supabase.from('paintings')
                                        .insert([
                                            {
                                                image_width: painting.image_width,
                                                image_height: painting.image_height,
                                                slug: painting.slug,
                                                image_path: painting.image_path,
                                                alt: painting.alt,
                                                description: painting.description,
                                                featured: painting.featured,
                                                height: painting.height,
                                                medium: painting.medium,
                                                orientation: painting.orientation,
                                                title: painting.title,
                                                width: painting.width,
                                                year: painting.year
                                            },
                                        ]);
    
    if (error) 
    {
        console.log(error);
        return ({ success: false, errorMessage: error.message, code: error.code });
    }
    return ({ success: true });
}