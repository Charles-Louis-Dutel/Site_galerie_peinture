
import NewPaintingFormHeader from "@/src/components/admin/paintings/new/newPaintingFormHeader";
import NewPaintingForm from "@/src/components/admin/paintings/new/newPaintingForm";


export default function NewPaintingPage() {

    return (
        <section>
            <div className="w-full py-10 pb-32">
                <div className="max-w-7xl mx-auto">
                    <NewPaintingFormHeader />

                    <NewPaintingForm />
                </div>
            </div>
        </section>
    );
}