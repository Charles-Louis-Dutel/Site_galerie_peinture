import Gallery from "@/src/components/gallery/gallery";
import { createClient } from "@/src/lib/supabase/client";

export default async function GalleryPage() {
    const supabase = createClient();
    const { data, error } = await supabase.from("paintings")
                                            .select("*")
                                            .order("year", { ascending: false });

    if (error)
    {
        throw (error);
    }

    if (data.length === 0)
    {
        return (
            <section>
                <div className="w-full px-6 md:px-12 pt-20 pb-64">
                    <div className="max-w-7xl mx-auto text-gray-500">
                        <section className="flex flex-col w-full items-center gap-8 text-center pb-60">
                            <h1 className="text-4xl md:text-6xl font-serif font-medium">
                                Galerie
                            </h1>

                            <p className="text-lg md:text-xl">
                                Des peintures à l'huile et à l’acrylique inspirées par
                                la lumière,  
                                <br className="hidden sm:block"/>
                                {" "}les couleurs et les paysages naturels.
                            </p>
                        </section>

                        <section>
                            Aucun tableau disponible pour le moment.
                        </section>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <>
            <Gallery paintings={data}/>
        </>
    );
}

