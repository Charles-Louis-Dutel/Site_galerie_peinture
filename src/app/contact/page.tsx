import ContactSection from "@/src/components/contact/contactSection";
import FormSection from "@/src/components/contact/formSection";

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