import Link from "next/link";
import DisconnectButton from "./disconnectButton";

export default function AdminSection() {

    return (
        <section>
            <div className="flex flex-col items-center mx-auto px-6 lg:px-12
                    gap-8"
            >
                <h1 className="text-4xl text-gray-700">
                    Administration
                </h1>

                <p className="text-gray-500">
                    Espace d&apos;administration
                </p>

                <div className='flex justify-center text-gray-500'>
                    <Link 
                        href="/admin/paintings"
                        className="border border-gray-300 rounded-full px-6 py-3
                                font-serif transition-colors duration-300
                                hover:bg-gray-400 hover:text-gray-50">
                            Gérer les tableaux
                    </Link>
                </div>

                <DisconnectButton />

                <div>
                    <Link href="/">
                        <div className="flex gap-4 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>

                            <p>
                                Retour au site
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}