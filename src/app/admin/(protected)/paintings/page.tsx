import { createClient } from "@/src/lib/supabase/server";
import PaintingListHeader from "@/src/components/admin/paintings/headerSection";
import PaintingListTitleRow from "@/src/components/admin/paintings/titleRow";
import PaintingListDataRow from "@/src/components/admin/paintings/dataRow";

export default async function PaintingListPage() {

    const supabase = await createClient();
    const { data, error } = await supabase.from("paintings")
                                        .select("*");

    if (error)
    {
        console.error(error);
        throw (error);
    }
    console.log(data);

    return (
        <section>
            <div className="w-full py-20 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    <PaintingListHeader />

                    <section className="px-6 lg:px-12">
                        <PaintingListTitleRow />
                        <PaintingListDataRow data={data} />
                    </section>
                </div>
            </div>
        </section>
    ); 
}