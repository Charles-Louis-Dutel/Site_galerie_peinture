import { notFound } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";
import EditPaintingFormHeader from "@/src/components/admin/paintings/edit/headerSection";
import EditPaintingForm from "@/src/components/admin/paintings/edit/editPaintingForm";


type EditPaintingProps = {
    params: Promise<{
        id: string;
    }>;
};


export default async function EditPaintingPage({ params }: EditPaintingProps) {

    const { id } = await params;

    if (!id)
        notFound();

    const supabase = await createClient();

    const { data, error } = await supabase.from("paintings")
                                            .select("*")
                                            .eq("id", id)
                                            .single();

    if (error || !data)
        notFound();

    return (
        <section>
            <div className="w-full py-10 pb-32">
                <div className="max-w-7xl mx-auto">
                    <EditPaintingFormHeader />

                    <EditPaintingForm painting={data} />
                </div>
            </div>
        </section>
    );
}