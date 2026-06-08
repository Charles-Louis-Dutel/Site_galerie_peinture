

export default function slugify(title: string) : string {
    const slug = title?.trim().toLowerCase().replaceAll(" ", "-");

    return (slug);
}