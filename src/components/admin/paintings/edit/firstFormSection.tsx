'use client'

import { Paintings } from "@/src/lib/types/types";
import { ChangeEvent } from "react";


type FirstFormSectionType = {
    painting: Paintings;
    previewUrl: string | null;
    onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function FirstFormSection({ painting, previewUrl, onFileChange }: FirstFormSectionType) {

    const currentImageUrl = `https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/${painting.image_path}`;

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-6 lg:mx-12 py-10
                gap-4 border-b border-gray-200">
                <div className="flex flex-col">
                    <label>
                        <span>
                            REMPLACER L&apos;IMAGE
                        </span>
                        <p>
                            L&apos;image actuelle sera conservée si aucun fichier n&apos;est sélectionné.
                        </p>

                        <div className="flex flex-col justify-center my-2
                            aspect-square border border-dashed border-gray-300
                            bg-gray-50 cursor-pointer transition-colors
                            hover:bg-gray-100 hover:border-gray-500">

                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="Nouvelle image"
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <img
                                    src={currentImageUrl}
                                    alt={painting.alt}
                                    className="w-full h-full object-contain"
                                />
                            )}

                            <input
                                type="file"
                                name="imageUpload"
                                accept="image/webp"
                                onChange={onFileChange}
                                className="hidden"
                            />
                        </div>
                    </label>
                </div>

                <div className="flex flex-col px-6 lg:px-12 py-10 gap-10">
                    <div className="flex flex-col">
                        <label>
                            TITRE DU TABLEAU
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Coucher de soleil"
                            defaultValue={painting.title}
                            className="w-full bg-transparent py-3 border-b 
                            border-gray-300/50 focus:border-gray-500 focus:ring-0
                            transition-colors text-gray-600 placeholder:text-gray-300
                            outline-none"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label>
                            TYPE DE PEINTURE
                        </label>
                        <input
                            type="text"
                            name="medium"
                            maxLength={50}
                            minLength={1}
                            required
                            placeholder="Acrylique"
                            defaultValue={painting.medium}
                            className="w-full bg-transparent py-3 border-b 
                            border-gray-300/50 focus:border-gray-500 focus:ring-0
                            transition-colors text-gray-600 placeholder:text-gray-300
                            outline-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col w-full">
                            <label>
                                ANNÉE DE CRÉATION
                            </label>
                            <input
                                type="number"
                                name="year"
                                min={1900}
                                max={2100}
                                required
                                placeholder="2024"
                                defaultValue={painting.year}
                                className="w-full bg-transparent py-3 border-b 
                                border-gray-300/50 focus:border-gray-500 focus:ring-0
                                transition-colors text-gray-600 placeholder:text-gray-300
                                outline-none"
                            />
                        </div>

                        <div className="flex flex-col w-full">
                            <label>
                                ORIENTATION
                            </label>
                            <select
                                name="orientation"
                                defaultValue={painting.orientation}
                                className="w-full bg-transparent py-3 border-b 
                                border-gray-300/50 focus:border-gray-500 focus:ring-0
                                transition-colors text-gray-600 placeholder:text-gray-300
                                outline-none cursor-pointer"
                            >
                                <option value={"landscape"}>Paysage</option>
                                <option value={"portrait"}>Portrait</option>
                                <option value={"square"}>Carré</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}