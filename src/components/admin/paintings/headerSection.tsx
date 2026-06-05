import Link from "next/link";

export default function PaintingListHeader() {

    return (
        <section className="grid grid-cols-12 px-6 lg:px-12 pb-32 items-center">
            <div className="flex col-span-7 px-6 lg:px-12">
                <h1 className="text-5xl">
                    Gestion des Œuvres
                </h1>
            </div>

            <div className="flex col-span-5 justify-end px-6 lg:px-12">
                <button
                    type="button"
                    className="border p-4 cursor-pointer hover:transition-colors duration-300
                        hover:bg-black hover:text-white"
                >
                    <Link href='/admin/paintings/new'>
                        + Ajouter un tableau
                    </Link>
                </button>
            </div>
        </section>
    );
}