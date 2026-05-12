import '@/src/app/globals.css';
import Image from 'next/image';


export default function GalleryPreviewSection() {
    return (
        <section>
            <div className='w-full bg-gray-50 mt-[60] px-6 md:px-12 py-[60]'>
                <div className='max-w-7xl mx-auto'>
                    <div className='flex w-full'>
                        <h2>MES DERNIERS TABLEAUX</h2>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full
                            gap-2'
                    >
                        <div className='relative aspect-square'>
                            <Image 
                                src="/images/peintre.jpg"
                                alt="Peintre en train de peindre"
                                fill
                                objectFit='cover'
                            />
                        </div>

                        <div className='relative aspect-square'>
                            <Image 
                                src="/images/peintre.jpg"
                                alt="Peintre en train de peindre"
                                fill
                                objectFit='cover'
                            />
                        </div>

                        <div className='relative aspect-square'>
                            <Image 
                                src="/images/peintre.jpg"
                                alt="Peintre en train de peindre"
                                fill
                                objectFit='cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}