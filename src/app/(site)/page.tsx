import { Metadata } from 'next';
import HeroSection from '@/src/components/home/heroSection';
import IntroSection from '@/src/components/home/introSection';
import GalleryPreviewSection from "@/src/components/home/galleryPreviewSection";


export const metadata: Metadata = {
  title: "Sophie Dutel | Artiste peintre",
  description: `Découvrez l'univers artistique de Sophie Dutel et explorez
      une collection de peintures originales.`,
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <GalleryPreviewSection />
    </>
  );
}
