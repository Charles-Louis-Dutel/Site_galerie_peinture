"use client"

import '@/src/app/globals.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Carousel () {
    const slides = [
        { 
            url: "/images/plage.jpg",
            text: "Plage"
        },
        { 
            url: "/images/chemin_dans_les_champs.jpg",
            text: "Chemins dans les champs"
        },
        {
            url: "/images/bord_de_lac.jpg",
            text: "Bord de lac"
        }];

        const [currentIndex, setCurrentIndex] = useState(0);
        const [timerReset, setTimerReset] = useState(0);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % slides.length);
            }, 5000);
            
            return () => clearInterval(interval);
        }, [slides.length, timerReset]);

        function resetTimer() {
            setTimerReset((prev) => prev + 1);
        }

        function prevImage() {
            setCurrentIndex((prev) => prev === 0 ? slides.length - 1 : (prev - 1));
            resetTimer();
        }

        function nextImage() {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
            resetTimer();
        }

        function changeIndexOnClick(index: number) {
           setCurrentIndex(index);
           resetTimer(); 
        }


    return (
        <div className='w-full h-full flex flex-col justify-start items-center'>
            <div className='relative flex w-full max-w-[1800] h-full items-center justify-center'
            >
                <button 
                    type="button"
                    onClick={prevImage}
                    aria-label='Image précédante'
                    className='absolute z-20 left-2 bg-white/20 hover:bg-white/40
                            rounded-full transition-colors duration-300'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 md:size-8 lg:size-10 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className='relative w-full max-w-[1800] h-full overflow-hidden'>
                    {slides.map((slide, index) => (
                        <div 
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                                ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                        >
                            <Image
                                src={slide.url}
                                alt={slide.text} 
                                fill
                                className='object-cover lg:object-fill'
                                priority={index === 0}
                            />
                        </div>
                    ))}
                </div>

                <button 
                    type="button"
                    onClick={nextImage}
                    aria-label='Image suivante'
                    className='absolute z-20 right-2 bg-white/20 hover:bg-white/40
                            rounded-full transition-colors duration-300'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="size-6 md:size-8 lg:size-10 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                <div className='hidden lg:block absolute z-20 left-14 bottom-2'>
                    <h1 className='font-serif text-white text-center md:text-2xl italic'>
                        Sophie Dutel
                        <br />
                        Peintures de paysages
                    </h1>
                </div>
            </div>

            <div className='flex flex-1 w-full justify-center items-center gap-2 m-4'>
                    {slides.map((slides, index) => (
                        <div 
                            key={index}
                            className={`w-5 md:w-10 h-1 md:h-2 z-30 rounded-2xl shadow-sm shadow-gray-400
                                    ${index === currentIndex ? "bg-gray-400" : "bg-white"}`}
                            onClick={() => changeIndexOnClick(index)}
                        >
                        </div>
                    ))}
            </div>
        </div>
    );
}


