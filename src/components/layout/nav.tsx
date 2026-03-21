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
                    <div className="hidden md:flex justify-start items-center gap-x-8 lg:gap-x-16">
                        <Link href="/" className="nav-link">Accueil</Link>
                        <Link href="/gallery" className="nav-link">Galerie</Link>   
                    </div>
                </div>
                <div className="hidden md:flex justify-end items-center gap-x-8 lg:gap-x-16">
                    <Link href="/about" className="nav-link">A propos</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                </div>
                <div onClick={handleNav} className="md:hidden flex justify-end items-center cursor-pointer">
                    {menuOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    }
                </div>
            </nav>
            <nav className={`md:hidden absolute top-full left-0 w-full min-h-[calc(100vh-96px)] bg-white/80 backdrop-blur-md
                transition-[opacity,transform] duration-300 ease-out ${
                menuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
            >
                <div className="px-6 py-8">
                    <div className="flex flex-col items-start gap-10">
                    <div className="flex flex-col items-start gap-4">
                        <Link href="/">Accueil</Link>
                        <Link href="/gallery">Galerie</Link>
                    </div>

                    <div className="flex flex-col items-start gap-4">
                        <Link href="/about">A propos</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}