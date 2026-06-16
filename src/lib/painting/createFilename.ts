import slugify from "./slugify";

export default function createFilename(title: string) : string {
    const timestamp = Date.now();
    const filename = slugify(title).replaceAll("-", "_") + "_" + timestamp + ".webp";

    return (filename);
}