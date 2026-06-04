
import { createClient } from "@/src/lib/supabase/client";
import Image from "next/image";

export default async function PaintingListPage() {
    const supabase = createClient();
    const { data, error } = await supabase.from("paintings")
                                        .select("*");

    if (error)
    {
        console.error(error);
        throw (error);
    }

    return (
        <section>
            <div className="w-full py-20 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-12 px-6 lg:px-12 pb-32 items-center">
                        <div className="flex col-span-7 justify-center">
                            <h1 className="">
                                Gestion des oeuvres
                            </h1>
                        </div>

                        <div className="col-span-5">
                            <button
                                type="button"
                                className="border p-4"
                            >
                                + Ajouter un tableau
                            </button>
                        </div>
                    </div>

                    <div className="px-6 lg:px-12">
                        <div className="w-full grid grid-cols-12 py-4 px-6 gap-2 bg-gray-50
                            border-b border-gray-200"
                        >
                            <div className="col-span-2 px-2">
                                Visuel
                            </div>

                            <div className="col-span-5 px-2">
                                Titre de l'oeuvre
                            </div>

                            <div className="col-span-2 px-2">
                                Date d'ajout
                            </div>

                            <div className="col-span-1 col-start-12 px-2">
                                Action
                            </div>
                        </div>

                        {data?.map((paint) => (
                                <div
                                    key={paint.id}
                                    className="w-full grid grid-cols-12 py-4 px-6 gap-2 bg-gray-50
                                    border-b border-gray-200 items-center"
                                >
                                    <div className="relative w-full col-span-2 px-2 aspect-square
                                        overflow-hidden"
                                    >
                                        <Image 
                                            src={ `https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/${paint.image_path}` }
                                            alt={paint.alt}
                                            fill
                                            loading="eager"
                                            className="object-contain"
                                        />
                                    </div>

                                    <div className="col-span-5 px-2">
                                        {paint.title}
                                    </div>

                                    <div className="col-span-2 px-2">
                                        {paint.created_at}
                                    </div>

                                    <div className="col-span-1 col-start-12 px-2
                                        place-self-center"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    ); 
}