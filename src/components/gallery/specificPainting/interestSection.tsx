import Link from "next/link";


export default function ArtworkInterestSection() {

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto gap-8 text-center">
            <h2 className="text-3xl font-serif italic text-gray-600">
                Cette œuvre vous intéresse ?
            </h2>

            <p className="max-w-2xl text-gray-500">
                Pour toutes questions concernant une œuvre ou si vous souhaitez 
                plus de renseignements, n&apos;hésitez pas à contacter l&apos;artiste.
            </p>

            <div className="w-[25dvw] border-b border-gray-200 my-6"></div>

            <Link href="/contact">
                <button 
                    type="button"
                    className="border py-4 px-8 border-gray-300 rounded-full
                        font-serif transition-colors duration-300 hover:bg-gray-400
                        hover:text-gray-50 text-gray-600 cursor-pointer"
                >
                            Contacter l&apos;artiste
                </button>
            </Link>
        </div>
    );
}