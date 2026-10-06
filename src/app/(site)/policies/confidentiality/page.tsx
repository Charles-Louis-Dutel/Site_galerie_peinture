import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Politique de confidentialité | Sophie Dutel",
    description: "Politique de confidentialité du site de Sophie Dutel : données collectées via le formulaire de contact, utilisation et droits.",
};


export default function PolitiqueConfidentialitePage() {
    return (
        <section className="w-full bg-gray-50 px-6 md:px-12 py-[80] md:py-[120]">
            <div className="max-w-4xl mx-auto text-gray-500">
                <p className="uppercase tracking-[0.25em] text-sm mb-6">
                    Données personnelles
                </p>

                <h1 className="text-4xl md:text-5xl font-serif italic text-gray-600 mb-12">
                    Politique de confidentialité
                </h1>

                <div className="flex flex-col gap-10 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Données collectées
                        </h2>
                        <p>
                            Ce site peut collecter certaines informations lorsque vous utilisez
                            le formulaire de contact, notamment votre nom, votre adresse e-mail
                            et le contenu de votre message.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Utilisation des données
                        </h2>
                        <p>
                            Les données transmises via le formulaire sont utilisées uniquement
                            pour répondre à votre demande.
                        </p>
                        <p className="mt-3">
                            Elles ne sont ni revendues, ni transmises à des tiers, ni utilisées
                            à des fins commerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Durée de conservation
                        </h2>
                        <p>
                            Les messages reçus peuvent être conservés pendant une durée
                            raisonnable afin d&apos;assurer le suivi des échanges, puis supprimés
                            lorsqu&apos;ils ne sont plus nécessaires.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Vos droits
                        </h2>
                        <p>
                            Vous pouvez demander l&apos;accès, la rectification ou la suppression
                            de vos données personnelles à tout moment en écrivant à :
                            <br />
                            <strong>sophiedutel@gmail.com</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Cookies
                        </h2>
                        <p>
                            Ce site n&apos;utilise pas de cookies publicitaires ni de cookies de
                            suivi à des fins commerciales.
                        </p>
                        <p className="mt-3">
                            Des cookies ou mécanismes techniques strictement nécessaires au bon
                            fonctionnement du site peuvent toutefois être utilisés.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Contact
                        </h2>
                        <p>
                            Pour toute question concernant cette politique de confidentialité,
                            vous pouvez écrire à :
                            <br />
                            <strong>sophiedutel@gmail.com</strong>
                        </p>
                    </section>

                    <p className="text-sm text-gray-400 pt-8 border-t border-gray-200">
                        Dernière mise à jour : mai 2026
                    </p>
                </div>
            </div>
        </section>
    );
}