import '@/src/app/globals.css';
import Image from 'next/image';

export default function HeroSection () {
    return (
        <section className='w-full py-6'>
            <div className='relative w-full'>
                <Image src="/images/plage.jpg" alt="Plage" width={1500} height={1000}
                className='w-full h-auto max-h-[1000]'/>
            </div>
        </section>
    );
}