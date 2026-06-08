

import { success } from "zod";
import { createClient } from "../supabase/client";

export default async function uploadFile(image_path: string, file: File) {
    const supabase = createClient();

    const { data, error } = await supabase.storage.from('paintings')
                                                .upload(image_path, file, {
                                                    contentType: 'image/webp'
                                                });

    if (error)
    {
        console.log(error);
        return ({ success: false, error });
    }
    return ({ success: true });
}