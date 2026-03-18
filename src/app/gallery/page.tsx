import { paintings } from "@/src/lib/painting";
import Link from "next/link";

export default function Galery() {
    return (
        <ul>
            {paintings.map((painting) => (
                <li key={painting.slug}>
                    <Link href={`/gallery/${painting.slug}`}>{painting.title}</Link>
                </li>
            ))}
        </ul>
    );
}