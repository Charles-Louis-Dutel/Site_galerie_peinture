import { createClient } from "@/src/lib/supabase/server";
import PaintingListHeader from "@/src/components/admin/paintings/headerSection";
import PaintingListTitleRow from "@/src/components/admin/paintings/titleRow";
import PaintingListDataRow from "@/src/components/admin/paintings/dataRow";
import PaintingListPagination from "@/src/components/admin/paintings/dataNav";


type PaintingListProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};


export default async function PaintingListPage({ searchParams }: PaintingListProps) {

    const supabase = await createClient();
    const pageSize = 10;

    let database = await supabase.from("paintings")
                                    .select("*", { count: "exact" });

    if (database.error)
        throw (database.error);

    const totalPages = Math.max(1, Math.ceil((database.count ?? 0) / pageSize));
    const { page } = await searchParams;
    let currentPage = Number(page) || 1;
    
    if (currentPage < 1)
        currentPage = 1;
    if (currentPage > totalPages)
        currentPage = totalPages;

    const startingPaint = (currentPage - 1) * pageSize;
    const endingPaint = startingPaint + pageSize - 1;
    database = await supabase.from("paintings")
                                .select("*", { count: "exact" })
                                .order("created_at", { ascending: false })
                                .range(startingPaint, endingPaint);

    if (database.error)
        throw (database.error);

    return (
        <section>
            <div className="w-full py-20">
                <div className="max-w-7xl mx-auto">
                    <PaintingListHeader />

                    <section className="px-6 lg:px-12">
                        <PaintingListTitleRow />
                        <PaintingListDataRow data={database.data} />
                        <PaintingListPagination currentPage={currentPage} totalPages={totalPages} />
                    </section>
                </div>
            </div>
        </section>
    ); 
}