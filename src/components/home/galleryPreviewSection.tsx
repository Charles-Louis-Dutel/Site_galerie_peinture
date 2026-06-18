
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/src/lib/supabase/server';


export default async function GalleryPreviewSection() {
    
    const supabase = await createClient();

    const { data, error } = await supabase.from("paintings")
                                            .select("*")
                                            .order("created_at", { ascending: false })
                                            .range(0, 2);

    if (error || !data)
    {
        return (
            <section>
                <div className='w-full bg-gray-50 mt-[60] px-6 md:px-12 py-[60]'>
                    <div className='max-w-7xl mx-auto text-gray-500'>
                        <div className='flex w-full py-6 border-b border-gray-300'>
                            <h2 className='text-lg'>Créations récentes</h2>
                        </div>

                        <div className='flex justify-center py-6'>
                            <p>
                                Impossible de charger les tableaux.
                            </p>
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
        )
    }

    if (data.length === 0)
    {
        return (
            <section>
                <div className='w-full bg-gray-50 mt-[60] px-6 md:px-12 py-[60]'>
                    <div className='max-w-7xl mx-auto text-gray-500'>
                        <div className='flex w-full py-6 border-b border-gray-300'>
                            <h2 className='text-lg'>Créations récentes</h2>
                        </div>

                        <div className='flex justify-center py-6'>
                            <p>
                                Aucun tableau disponible pour le moment
                            </p>
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
                        {data.map((painting) => 
                            <div 
                                key={painting.id}
                                className='flex flex-col'
                            >
                                <Link href={`/gallery/${painting.slug}`}>
                                    <div className='relative aspect-square hover:scale-105
                                        transition-transform duration-500'
                                    >
                                        <Image 
                                            src={`https://gnlftjtobxjsayrpswkx.supabase.co/storage/v1/object/public/paintings/${painting.image_path}`}
                                            alt={painting.alt}
                                            fill
                                            className='object-contain'
                                        />
                                    </div>
                                </Link>

                                <div className='mt-4 px-4 border-l border-gray-300'>
                                    <h3 className='italic font-serif text-lg'>
                                        {painting.title}
                                    </h3>
                                    <p className=''>
                                        {painting.medium} — {painting.width} X {painting.height} cm
                                    </p>
                                </div>
                            </div>
                        )}
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