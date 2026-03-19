'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import '@/src/app/globals.css';

export default function Nav() {
    //const pathname = usePathname();

    return (
        <div>
            <nav className="flex justify-end px-6 py-2 lg:px-8 font-serif text-gray-500">
                <div className="grid md:grid-cols-2 gap-x-6 lg:gap-x-8">
                    <Link href="/about" className="hover:underline">A PROPOS</Link>
                    <Link href="/contact" className="hover:underline">CONTACT</Link>
                </div>
            </nav>
            <nav className="flex justify-start px-6 lg:px-8 font-serif text-gray-500 text-lg">
                <div className="grid md:grid-cols-3 items-center justify-items-center">
                    <Image src="/images/sign.jpg" alt="Signature" width={150} height={50} />
                    <Link href="/">Accueil</Link>
                    <Link href="/gallery">Galerie</Link>   
                </div>  
            </nav>
        </div>
    );
}