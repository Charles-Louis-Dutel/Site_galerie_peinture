'use client'

import { ChangeEvent, useState } from "react";

export default function NewPaintingPage() {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const file = event.target.files?.[0];

        if (!file)
            return;

        setSelectedFile(file);
        URL.revokeObjectURL;
        setPreviewUrl(URL.createObjectURL(file));
    }


    return (
        <section>
            <div className="w-full py-10">
                <div className="max-w-7xl mx-auto">
                    <section>
                        <div className="flex flex-col w-full px-6 lg:px-12 gap-4 pb-10">
                            <h2 className="text-4xl">
                                Ajouter une nouvelle œuvre 
                            </h2>

                            <div className="w-32 border text-gray-500">
                            </div>
                        </div>
                    </section>

                    <form>
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:px-12 py-10 gap-4">
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
                                                name="file"
                                                accept="image/webp"
                                                onChange={handleFileChange}
                                                required
                                                className="hidden"
                                            />
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </section>
    );
}