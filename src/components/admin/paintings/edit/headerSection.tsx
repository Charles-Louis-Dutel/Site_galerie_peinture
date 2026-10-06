import Link from "next/link";

export default function EditPaintingFormHeader() {

    return (
        <section>
            <div className="w-full px-6 lg:px-12 pb-12">
                <Link href="/admin/paintings">
                    <div className="flex gap-4 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                        </svg>

                        <p>
                            Retour à la liste des tableaux
                        </p>
                    </div>
                </Link>
            </div>

            <div className="flex flex-col w-full px-6 lg:px-12 gap-4 pb-10">
                <h2 className="text-4xl">
                    Edition de l&apos;œuvre 
                </h2>

                <div className="w-32 border text-gray-500">
                </div>
            </div>
        </section>
    );
}