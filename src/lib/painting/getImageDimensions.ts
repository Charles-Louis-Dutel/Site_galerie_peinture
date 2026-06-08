

export default async function getImageDimensions(file: File) : Promise<{ 
    width: number;
    height: number;
}> {
    return new Promise((resolve, reject) => {
        const imageUrl = URL.createObjectURL(file);
        const image = new Image();

        image.onload = () => {
            const dimensions = {
                width: image.naturalWidth,
                height: image.naturalHeight
            };

            URL.revokeObjectURL(imageUrl);
            resolve(dimensions);
        };

        image.onerror = () => {
            URL.revokeObjectURL(imageUrl);
            reject(new Error("Impossible de lire l'image."));
        };

        image.src = imageUrl;
    });
}