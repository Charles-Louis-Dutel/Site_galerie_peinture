

export default function slugify(title: string) : string {
    const slug = title?.trim()
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")
                    .replace(/-+/g, "-");

    return (slug);
}