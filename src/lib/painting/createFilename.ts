

export default function createFilename(title: string) : string {
    const timestamp = Date.now();
    const filename = title.trim().toLowerCase().replaceAll(" ", "_") + timestamp + ".webp";

    return (filename);
}