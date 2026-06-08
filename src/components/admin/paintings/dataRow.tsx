'use client'

import Image from "next/image";
import { Paintings } from "@/src/lib/types/types";
import { createClient } from "@/src/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type DataRowProps = {
    data: Paintings[];
}

export default function PaintingListDataRow({ data }: DataRowProps) {

    const supabase = createClient();
    const router = useRouter();
    const [selectedPainting, setSelectedPainting] = useState<Paintings | null>(null);
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState<boolean>(false);

    async function deletePainting(id: string, image_path: string) {
        let { error } = await supabase.from('paintings')
                                        .delete()
                                        .eq('id', id);
        
        await supabase.storage.from('paintings')
                            .remove([image_path]);
        setSelectedPainting(null);
        router.refresh();
    }

    return (
        <>
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

                        <button className="col-span-1 col-start-12 px-2
                            place-self-center"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                                className="size-6 cursor-pointer hover:text-red-500" 
                                onClick={() => setSelectedPainting(paint)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                            </svg>
                        </button>

                        {selectedPainting && (
                            <div
                                onClick={() => setSelectedPainting(null)}
                                className="fixed inset-0 z-50 flex items-center justify-center
                                    bg-black/10"
                            >
                                <div
                                    onClick={(event) => event.stopPropagation()} 
                                    className="bg-white p-6 shadow-lg max-w-md w-full mx-6"
                                >
                                    <h2 className="text-3xl py-4">
                                        Confirmez la suppresion
                                    </h2>

                                    <p className="pb-6">
                                        Êtes-vous sûr de vouloir supprimer "{selectedPainting.title}" ?
                                    </p>

                                    <div className="flex gap-4 justify-end mt-6">
                                        <button
                                            type="button"
                                            className="border py-1 px-4 cursor-pointer" 
                                            onClick={() => setSelectedPainting(null)}>
                                                Annuler
                                        </button>
                                    
                                        <button
                                            type="button"
                                            className="py-1 px-4 bg-red-500 text-white cursor-pointer"
                                            onClick={() => deletePainting(selectedPainting.id, selectedPainting.image_path)}>
                                                Supprimer
                                        </button>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                )
            )}
        </>
    );
}