import ContactSection from "@/src/components/contact/contactSection";
import FormSection from "@/src/components/contact/formSection";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact | Sophie Dutel",
    description: `Contactez Sophie Dutel pour toute demande d'informations
            concernant les œuvres exposées.`,
};


export default function ContactPage() {
    return (
        <section>
            <div className="w-full py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto px-6 lg:px-12 gap-y-32">
                    <ContactSection />
                    <FormSection />
                </div>
            </div>
        </section>
    );
}