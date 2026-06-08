
import { createClient } from "../supabase/client";

export default async function removePaintingImage(image_path: string) {
    
    const supabase = createClient();
    const { error } = await supabase.storage.from('paintings')
                            .remove([image_path]);
    
    if (error)
    {
        console.log(error);
        return ({ success: false, error });
    }
    return ({ success: true });
}