import Link from "next/link";

export default function NotFound() {
    return (
        <section className="w-full min-h-[70vh] px-6 md:px-12 py-24">
            <div className="max-w-3xl mx-auto text-center text-gray-500">
                <p className="mb-4 tracking-[0.2em] uppercase text-sm">
                    Erreur 404
                </p>

                <h1 className="font-serif italic text-4xl md:text-5xl text-gray-600 mb-6">
                    Page introuvable
                </h1>

                <p className="text-lg mb-2">
                    La page que vous recherchez n&apos;existe pas ou n&apos;est plus disponible.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/"
                        className="border border-gray-300 rounded-full px-6 py-3
                            font-serif transition-colors duration-300
                            hover:bg-gray-400 hover:text-gray-50"
                    >
                        Retour à l&apos;accueil
                    </Link>

                    <Link
                        href="/gallery"
                        className="border border-gray-300 rounded-full px-6 py-3
                            font-serif transition-colors duration-300
                            hover:bg-gray-400 hover:text-gray-50"
                    >
                        Découvrir la galerie
                    </Link>
                </div>
            </div>
        </section>
    );
}