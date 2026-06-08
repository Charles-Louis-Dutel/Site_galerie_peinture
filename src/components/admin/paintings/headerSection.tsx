import Link from "next/link";

export default function PaintingListHeader() {

    return (
        <section>
            <div className="w-full px-6 lg:px-12 pb-12">
                <Link href="/admin">
                    <div className="flex gap-4 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>

                        <p>
                            Retour à l'accueil administration du site
                        </p>
                    </div>
                </Link>
            </div>

            <div className="grid grid-cols-12 px-6 lg:px-12 pb-32 items-center">
                <div className="flex col-span-7 px-6 lg:px-12">
                    <h1 className="text-5xl">
                        Gestion des Œuvres
                    </h1>
                </div>

                <div className="flex col-span-5 justify-end px-6 lg:px-12">
                    <Link href='/admin/paintings/new'>
                        <button
                            type="button"
                            className="border p-4 cursor-pointer hover:transition-colors duration-300
                                hover:bg-black hover:text-white"
                        >
                                + Ajouter un tableau
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}