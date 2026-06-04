import IntroSectionAbout from "@/src/components/about/introSectionAbout";
import PassionSectionAbout from "@/src/components/about/passionSectionAbout";
import TechnicalSectionAbout from "@/src/components/about/techSectionAbout";

export default function AboutPage() {
    
    return (
        <section>
            <div className="w-full py-10 md:py-20 px-6 md:px-12">
                <IntroSectionAbout />

                <div className="flex w-full justify-center">
                    <div className="w-[75dvw] border-b border-gray-200"></div>
                </div>

                <PassionSectionAbout />

                <div className="flex w-full justify-center">
                    <div className="w-[75dvw] border-b border-gray-200"></div>
                </div>

                <TechnicalSectionAbout />
            </div>

            <div className="flex w-full justify-center px-6 md:px-12">
                <div className="w-full border-b border-gray-100"></div>
            </div>
        </section>
    );
}