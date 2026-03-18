'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    //const pathname = usePathname();

    return (
        <nav>
            <Link href="/">Accueil</Link>
            <Link href="/gallery">Galerie</Link>
            <Link href="/about">A propos</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    );
}