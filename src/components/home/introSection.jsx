import '@/src/app/globals.css';
import Image from 'next/image';

export default function introSection () {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-2 box-content py-6'>
                <div>
                    <p>Artiste peintre de paysages realistes</p>
                </div>
                <div>
                    <Image src="/images/peintre.jpg" alt="Peintre en train de peindre" width={500} height={500} className='w-full'/>
                </div>
            </div>
        </section>
    );
}