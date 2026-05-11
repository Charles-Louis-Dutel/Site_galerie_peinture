"use client";

import '@/src/app/globals.css';
import Carousel from './carousel';

export default function HeroSection () {

    return (
        <section>
            <div className='w-full pb-[60]'>
                <div className='w-full max-h-[1000] h-[40vh] sm:h-[60vh] md:h-[70vh]
                                lg:h-[80vh] mx-auto'>
                    <Carousel />
                </div>
            </div>
        </section>
    );
}