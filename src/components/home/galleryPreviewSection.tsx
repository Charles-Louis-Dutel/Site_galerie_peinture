import '@/src/app/globals.css';
import Image from 'next/image';
import Link from 'next/link';


export default function GalleryPreviewSection() {
    return (
        <section>
            <div className='w-full bg-gray-50 mt-[60] px-6 md:px-12 py-[60]'>
                <div className='max-w-7xl mx-auto text-gray-500'>
                    <div className='flex w-full py-6 border-b border-gray-300'>
                        <h2 className='text-lg'>Créations récentes</h2>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full
                            gap-8 gap-y-12 py-10'
                    >
                        <div className='flex flex-col'>
                            <div className='relative aspect-square hover:scale-105
                                    transition-transform duration-500'
                            >
                                <Image 
                                    src="/images/village_medieval.jpg"
                                    alt="Village medieval"
                                    fill
                                    className='object-contain'
                                />
                            </div>

                            <div className='mt-4 px-4 border-l border-gray-300'>
                                <h3 className='italic font-serif text-lg'>
                                    Village medieval
                                </h3>
                                <p className=''>
                                    Acrylique — 64 X 44 cm
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='relative aspect-square hover:scale-105
                                transition-transform duration-500'>
                                <Image 
                                    src="/images/coquelicots.jpg"
                                    alt="Coquelicots"
                                    fill
                                    className='object-contain'
                                />
                            </div>

                            <div className='mt-4 px-4 border-l border-gray-300'>
                                <h3 className='italic font-serif text-lg'>
                                    Coquelicots
                                </h3>
                                <p className=''>
                                    Huile sur toile — 64 X 64 cm
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <div className='relative aspect-square hover:scale-105
                                    transition-transform duration-500'
                            >
                                <Image 
                                    src="/images/bord_de_lac.jpg"
                                    alt="Bord de lac"
                                    fill
                                    className='object-contain'
                                />
                            </div>

                            <div className='mt-4 px-4 border-l border-gray-300'>
                                <h3 className='italic font-serif text-lg'>
                                    Bord de lac
                                </h3>
                                <p className=''>
                                    Acrylique — 44 X 64 cm
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <Link 
                            href="/gallery"
                            className="border border-gray-300 rounded-full px-6 py-3
                                    font-serif transition-colors duration-300
                                    hover:bg-gray-400 hover:text-gray-50">
                                Decouvrir la galerie
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}