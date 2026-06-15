import Link from "next/link"

type PaintingListPaginationProps = {
    currentPage: number;
    totalPages: number;
};


export default function PaintingListPagination({ currentPage, totalPages }: PaintingListPaginationProps) {

    return (
        <section>
            <div className="flex w-full justify-center gap-12 py-6 text-xl">
                { currentPage === 1 ? (
                    <p className="text-gray-500">Page précédente</p>
                ) : (
                    <Link 
                        href={`/admin/paintings?page=${currentPage - 1}`}
                        className="hover:underline hover:cursor-pointer"
                    >
                        Page précédente
                    </Link>
                )}

                <p>
                    {`${currentPage} / ${totalPages}`}
                </p>

                { currentPage === totalPages ? (
                    <p className="text-gray-500">Page Suivante</p>
                ) : (
                    <Link 
                        href={`/admin/paintings?page=${currentPage + 1}`}
                        className="hover:underline hover:cursor-pointer"
                    >
                        Page suivante
                    </Link>
                )}
            </div>
        </section>
    );
}