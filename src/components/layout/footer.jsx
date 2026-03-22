'use client'

import '@/src/app/globals.css';

export default function Footer() {
    return (
        <section>
            <div className='max-w-7xl mx-auto m-2 px-8 md:px-12'>
                <div className='grid grid-cols-1 md:grid-cols-4 justify-center h-28 my-2
                    font-serif text-gray-500'>
                    <div className='flex justify-center'>
                        Footer left
                    </div>
                    <div className='col-span-2 flex flex-col items-center w-full border-x border-gray-100'>
                        <h1 className='text-2xl'>Sophie Dutel</h1>
                        <p>Artiste peintre</p>
                        <div className='border border-gray-100 w-[50%] my-2'></div>
                        <p>Peintures de paysages réalistes</p>
                    </div>
                    <div className='flex justify-center'>
                        Footer right
                    </div>
                </div>
                <div className='flex justify-center items-center h-12 m-2 border-t border-gray-100
                    font-serif text-sm italic'>
                        "Chaque tableau capture la lumiere et l'emotion d'un instant."
                </div>
            </div>
        </section>
    );
}