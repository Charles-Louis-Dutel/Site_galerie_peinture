'use client'

import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import ButtonSection from "@/src/components/admin/paintings/new/buttonSection";
import FirstFormSection from "./firstFormSection";
import SecondFormSection from "./secondFormSection";
import createFilename from "@/src/lib/painting/createFilename";
import getImageDimensions from "@/src/lib/painting/getImageDimensions";
import uploadFile from "@/src/lib/painting/uploadFile";
import removePaintingImage from "@/src/lib/painting/removePaintingImage";
import { Paintings } from "@/src/lib/types/types";
import updatePaintingInDB from "@/src/lib/painting/updateIntoDB";

const FormValues = z.object({
    alt: z.string().trim().min(1, "Le texte alternatif est obligatoire"),
    description: z.string(),
    featured: z.boolean(),

    height: z.coerce.number().positive("La hauteur doit être supérieur à 0"),
    width: z.coerce.number().positive("La largeur doit être supérieur à 0"),

    imageUpload: z.file().optional().nullable(),

    medium: z.string().trim().min(1, "Le type de peinture est obligatoire"),

    orientation: z.enum([
        "landscape",
        "portrait",
        "square"
    ]),

    title: z.string().trim().min(1, "Le titre est obligatoire"),

    year: z.coerce.number()
        .min(1900, "Année invalide")
        .max(new Date().getFullYear(), "Année invalide")
});

type EditPaintingFormProps = {
    painting: Paintings;
};

export default function EditPaintingForm({ painting }: EditPaintingFormProps) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const router = useRouter();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const file = event.target.files?.[0];

        if (!file)
            return;

        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }

        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormError(null);
        setIsLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            const values = Object.fromEntries(formData);

            const {
                alt,
                description,
                height,
                medium,
                orientation,
                title,
                width,
                year
            } = values;

            const featured = formData.get("featured") === "on";

            const result = FormValues.safeParse({
                alt,
                description,
                featured,
                height,
                imageUpload: selectedFile,
                medium,
                orientation,
                title,
                width,
                year
            });

            if (!result.success) {
                setFormError("Merci de vérifier les informations du formulaire.");
                setIsLoading(false);
                return;
            }

            const formPainting = result.data;

            let image_width = painting.image_width;
            let image_height = painting.image_height;
            let image_path = painting.image_path;

            const newImage = formPainting.imageUpload;
            const hasNewImage = !!newImage;

            if (newImage) {
                const dimensions = await getImageDimensions(newImage);
                const filename = createFilename(formPainting.title);

                image_width = dimensions.width;
                image_height = dimensions.height;
                image_path = filename;

                const uploadResult = await uploadFile(image_path, newImage);

                if (!uploadResult.success) {
                    setFormError("Impossible d'envoyer la nouvelle image.");
                    setIsLoading(false);
                    return;
                }
            }

            const paintingInfos = {
                alt: formPainting.alt,
                description: formPainting.description,
                featured: formPainting.featured,
                height: formPainting.height,
                medium: formPainting.medium,
                orientation: formPainting.orientation,
                title: formPainting.title,
                width: formPainting.width,
                year: formPainting.year,
                // Le slug est conservé : modifier le titre ne doit pas changer l'URL de l'œuvre.
                slug: painting.slug,
                image_width,
                image_height,
                image_path
            };

            const updateResult = await updatePaintingInDB(painting.id, paintingInfos);

            if (!updateResult.success) {
                if (hasNewImage) {
                    await removePaintingImage(image_path);
                }

                if (updateResult.code === "23505")
                    setFormError("Un tableau avec ce titre existe déjà.");
                else
                    setFormError("Une erreur est survenue lors de la modification du tableau.");

                setIsLoading(false);
                return;
            }

            if (hasNewImage && painting.image_path !== image_path) {
                await removePaintingImage(painting.image_path);
            }

            router.push("/admin/paintings");
            router.refresh();
        } catch (error) {
            console.log(error);
            setFormError("Une erreur est survenue lors de la modification du tableau.");
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FirstFormSection 
                painting={painting}
                previewUrl={previewUrl}
                onFileChange={handleFileChange}
            />

            <SecondFormSection painting={painting} />

            {formError && (
                <div className="flex justify-end px-6 lg:px-12 text-red-500">
                    <p>
                        {formError}
                    </p>
                </div>
            )}

            <ButtonSection isLoading={isLoading} />
        </form>
    );
}