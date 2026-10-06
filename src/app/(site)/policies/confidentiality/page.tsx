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
                            Lorsque vous utilisez le formulaire de contact, les informations
                            suivantes sont collectées : votre nom, votre adresse e-mail, l&apos;objet
                            et le contenu de votre message.
                        </p>
                        <p className="mt-3">
                            Ces informations ne sont pas enregistrées dans une base de données du
                            site : elles sont uniquement transmises par e-mail à l&apos;artiste.
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
                            Elles ne sont ni revendues, ni utilisées à des fins commerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Services utilisés
                        </h2>
                        <p>
                            Pour fonctionner, le site s&apos;appuie sur les prestataires techniques
                            suivants :
                        </p>
                        <p className="mt-3">
                            <strong>Vercel Inc.</strong> (États-Unis) : hébergement du site. Comme
                            pour tout site internet, l&apos;hébergeur reçoit des données techniques
                            liées à votre visite, comme votre adresse IP et les pages consultées.
                        </p>
                        <p className="mt-3">
                            <strong>Resend</strong> (Plus Five Five, Inc., États-Unis) : envoi par
                            e-mail des messages du formulaire de contact.
                        </p>
                        <p className="mt-3">
                            <strong>Gmail</strong> (Google) : messagerie sur laquelle les messages
                            sont reçus.
                        </p>
                        <p className="mt-3">
                            Vercel et Resend sont des sociétés établies aux États-Unis. Dans le
                            cadre de l&apos;utilisation de ces services, certaines données peuvent
                            être traitées en dehors de l&apos;Union européenne. Le traitement de ces
                            données par ces prestataires relève également de leurs propres
                            politiques de confidentialité.
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
                        <p className="mt-3">
                            Une copie technique des messages peut également être conservée par le
                            service d&apos;envoi Resend, selon sa propre politique de conservation.
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
                        Dernière mise à jour : octobre 2026
                    </p>
                </div>
            </div>
        </section>
    );
}