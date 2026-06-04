import Image from "next/image";
import HeroSection from '@/src/components/home/heroSection';
import IntroSection from '@/src/components/home/introSection';
import GalleryPreviewSection from "@/src/components/home/galleryPreviewSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <GalleryPreviewSection />
    </>
  );
}
