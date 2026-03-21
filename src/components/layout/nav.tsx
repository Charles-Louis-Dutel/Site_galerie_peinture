'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import '@/src/app/globals.css';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return (() => {
            document.body.style.overflow = ""
        });
    }, [menuOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-24 bg-white/80 backdrop-blur-md
                border-b border-gray-200">
            <nav className="max-w-7xl mx-auto flex justify-between px-8 lg:px-12 font-serif
                text-gray-500 text-lg">
                <div className="flex justify-start items-center gap-x-8 lg:gap-x-16">
                    <Link href="/" onClick={() => setMenuOpen(false)}>
                        <Image src="/images/sign.png" alt="Signature" width={150} height={50}
                            className="h-24 w-auto"/>
                    </Link>
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
            <nav className={`md:hidden fixed top-24 left-0 w-full h-[calc(100vh-96px)] bg-white
                border-t border-gray-200 transition-[opacity,transform] duration-300 ease-out overflow-y-auto ${
                menuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
            >
                <div className="flex flex-col items-start gap-y-16 px-6 py-8
                    font-serif text-gray-500 text-lg">
                    <div className="flex flex-col items-start gap-y-4 w-full">
                        <Link href="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
                        <div className="w-full border-t border-gray-400"></div>
                        <Link href="/gallery" onClick={() => setMenuOpen(false)}>Galerie</Link>
                        <div className="w-full border-t border-gray-400"></div>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>A propos</Link>
                        <div className="w-full border-t border-gray-400"></div>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    </div>
                    <div className="flex flex-col items-start gap-y-4">    
                        Mes reseaux
                        <a href="https://www.instagram.com/sophie_pierre51?igsh=MXBhbDZycGlzbGcyeQ=="
                            target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}