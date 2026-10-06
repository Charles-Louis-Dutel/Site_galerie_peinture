
// Taille maximale d'une image d'œuvre envoyée depuis l'admin.
export const MAX_IMAGE_SIZE_MB = 15;

export default function validateImageFile(file: File): string | null {
    if (file.type !== "image/webp")
        return ("L'image doit être au format WebP (.webp).");

    if (file.size > MAX_IMAGE_SIZE_MB * 1024 * 1024)
        return (`L'image est trop volumineuse (${MAX_IMAGE_SIZE_MB} Mo maximum).`);

    return (null);
}
