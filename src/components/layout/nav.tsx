'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import '@/src/app/globals.css';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-24 bg-white/80 backdrop-blur-md
                border-b border-gray-200">
            <nav className="max-w-7xl mx-auto flex justify-between px-8 lg:px-12 font-serif
                text-gray-500 text-lg">
                <div className="flex justify-start items-center gap-x-8 lg:gap-x-16">
                    <Image src="/images/sign.png" alt="Signature" width={150} height={50}
                        className="h-24 w-auto"/>
                    <Link href="/" className="nav-link">Accueil</Link>
                    <Link href="/gallery" className="nav-link">Galerie</Link>   
                </div> 
                <div className="flex justify-end items-center gap-x-8 lg:gap-x-16">
                    <Link href="/about" className="nav-link">A propos</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
                <div onClick={handleNav} className="flex justify-end items-center md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </header>
    );
}