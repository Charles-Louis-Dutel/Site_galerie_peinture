import Gallery from "@/src/components/gallery/gallery";
import supabase from "@/src/lib/supabase";

export default async function GalleryPage() {
    const { data, error } = await supabase.from("paintings").select("*");
    
    console.log(error)
    console.log(data);
    return (
        <>
            <Gallery paintings={data ?? []}/>
        </>
    );
}

