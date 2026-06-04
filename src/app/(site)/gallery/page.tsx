import Gallery from "@/src/components/gallery/gallery";
import { createClient } from "@/src/lib/supabase/client";

export default async function GalleryPage() {
    const supabase = createClient();
    const { data, error } = await supabase.from("paintings").select("*");

    if (error)
    {
        console.error(error);
        throw (error);
    }

    return (
        <>
            <Gallery paintings={data}/>
        </>
    );
}

