'use client'

import { ChangeEvent } from "react";


type FirstFormSectionType = {
    previewUrl: string | null;
    onFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function FirstFormSection({ previewUrl, onFileChange }: FirstFormSectionType) {

    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-6 lg:mx-12 py-10
                gap-4 border-b border-gray-200">
                <div className="flex flex-col">
                    <label>
                        <span>
                            SÉLECTIONNER UNE IMAGE
                        </span>

                        <div className="flex flex-col justify-center my-2
                            aspect-square border border-dashed border-gray-300
                            bg-gray-50 cursor-pointer transition-colors
                            hover:bg-gray-100 hover:border-gray-500">

                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="Prévisualisation"
                                    className="w-full h-full object-contain"
                                /> ) : (
                                
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>


                                    <p>
                                        Cliquez ou glissez une image ici
                                    </p>
                                </div>
                                )
                            }

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
                                defaultValue={"landscape"}
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