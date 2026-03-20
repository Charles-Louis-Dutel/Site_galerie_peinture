'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import '@/src/app/globals.css';

export default function Nav() {

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-24">
            <nav className="flex justify-between bg-white/80 backdrop-blur-md border-b border-gray-200
                px-8 lg:px-12 font-serif text-gray-500 text-lg">
                <div className="flex justify-start items-center gap-x-8 lg:gap-x-16">
                    <Image src="/images/sign.png" alt="Signature" width={150} height={50}
                        className="h-24 w-auto"/>
                    <Link href="/" className="relative after:absolute after:left-0 after:bottom-0
                                    after:w-full after:h-px after:bg-gray-500 after:scale-x-0
                                    after:origin-left hover:after:scale-x-100 hover:origin-right
                                    after:transition-transform after:duration-300">
                        Accueil
                    </Link>
                    <Link href="/gallery">Galerie</Link>   
                </div> 
                <div className="flex justify-end items-center gap-x-8 lg:gap-x-16">
                    <Link href="/about" className="hover:underline">A propos</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>
            </nav>
        </header>
    );
}