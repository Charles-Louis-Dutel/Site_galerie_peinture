import Image from "next/image";
import HeroSection from '@/src/components/home/heroSection';
import IntroSection from '@/src/components/home/introSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />  
    </>
  );
}
