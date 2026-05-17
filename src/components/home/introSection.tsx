import '@/src/app/globals.css';
import Image from 'next/image';

export default function IntroSection () {
    return (
        <section>
            <div className='w-full py-[60] px-6 md:px-12'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12
                        place-items-center gap-16 box-content'
                >
                    <div className='md:col-span-6 flex flex-col gap-2 text-gray-500'>
                        <span className='font-serif'>
                            L’univers de Sophie Dutel
                        </span>
                        <h2 className='font-serif text-4xl text-gray-600'>
                            Des paysages inspirés par la nature
                        </h2>
                        <p className='font-sans text-lg py-6'>
                            Sophie Dutel, artiste peintre amatrice peint principalement des
                            paysages inspirés de lieux réels ou imaginés, avec une attention
                            particulière portée à la lumière, aux couleurs naturelles et à
                            l’atmosphère des lieux.
                        </p>
                    </div>

                    <div className='relative md:col-span-5 md:col-start-8 w-full aspect-square'>
                        <Image 
                            src="/images/peintre.jpg"
                            alt="Peintre en train de peindre"
                            fill
                            objectFit='cover'
                        />
                        <div className='absolute -bottom-8 -left-8 w-48 h-48 border-b border-l
                                border-gray-200 hidden md:block'>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


