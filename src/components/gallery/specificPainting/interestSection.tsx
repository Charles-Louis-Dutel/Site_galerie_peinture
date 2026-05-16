import Link from "next/link";


export default function ArtworkInterestSection() {

    return (
        <div className="flex flex-col items-center max-w-7xl mx-auto gap-8 text-center">
            <h2 className="text-3xl font-serif italic">
                Cette œuvre vous intéresse ?
            </h2>

            <p className="max-w-2xl">
                Pour toutes questions concernant une œuvre ou si vous souhaitez 
                plus de renseignements, n'hésitez pas à contacter l'artiste.
            </p>

            <div className="w-[25dvw] border-b border-gray-200 my-6"></div>

            <button 
                type="button"
                className="border py-4 px-8 border-gray-300 rounded-full
                    font-serif transition-colors duration-300 hover:bg-gray-400
                    hover:text-gray-50"
            >
                    <Link href="/contact">
                        Contacter l'artiste
                    </Link>
            </button>
        </div>
    );
}