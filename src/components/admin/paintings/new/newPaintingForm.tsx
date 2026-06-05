'use client'


import { useState } from "react";
import * as z from "zod";
import ButtonSection from "./buttonSection";
import FirstFormSection from "./firstFormSection";
import SecondFormSection from "./secondFormSection";


const FormValues = z.object({
    alt: z.string()
            .trim()
            .min(1, "Le texte alternatif est obligatoire"),

    description: z.string(),

    featured: z.boolean(),

    height: z.coerce.number()
                    .positive("La hauteur doit être superieur à 0"),

    imageUpload: z.file()
                    .refine((file) => file.size > 0, "Veuillez sélectionner une image"),

    medium: z.string()
                .trim()
                .min(1, "Le type de peinture est obligatoire"),

    orientation: z.enum([
        "landscape",
        "portrait",
        "square"
    ]),

    title: z.string()
            .trim()
            .min(1, "Le titre est obligatoire"),

    width: z.coerce.number()
                    .positive("La largeur doit être superieur à 0"),

    year: z.coerce.number()
                    .min(1900, "Année invalide")
                    .max(new Date().getFullYear(), "Année invalide")
});


export default function NewPaintingForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | null>(null);

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const values = Object.fromEntries(formData);
        console.log('Form values: ', values);

        const { alt, description, height, imageUpload,
            medium, orientation, title, width, year } = values;
        const featured: boolean = formData.get("featured") === "on";
        
        const result = FormValues.safeParse({alt, description, featured, height, imageUpload,
            medium, orientation, title, width, year
        });

        if (!result.success) {
            setFormError("Merci de verifier les informations du formulaire.");
            console.error(result.error.flatten);
            return;
        }
        
        const painting = result.data;
    }

    return (
        <form onSubmit={handleSubmit}>
            <FirstFormSection />

            <SecondFormSection />

            {formError && (
                <div className="flex justify-end px-6 lg:px-12 text-red-500">
                    <p>
                        {formError}
                    </p>
                </div>
            )}

            <ButtonSection />
        </form>
    );
}
