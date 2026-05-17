
export default function LegalsMentionsPage() {

    return (
        <section className="w-full bg-gray-50 px-6 md:px-12 py-[80] md:py-[120]">
            <div className="max-w-4xl mx-auto text-gray-500">
                <p className="uppercase tracking-[0.25em] text-sm mb-6">
                    Informations légales
                </p>

                <h1 className="text-4xl md:text-5xl font-serif italic text-gray-600 mb-12">
                    Mentions légales
                </h1>

                <div className="flex flex-col gap-10 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Éditeur du site
                        </h2>
                        <p>
                            Le présent site est édité à titre personnel afin de présenter
                            les œuvres picturales de l'artiste.
                        </p>
                        <p className="mt-3">
                            Responsable de la publication : <strong>Sophie DUTEL</strong>
                            <br />
                            Contact : <strong>sophiedutel@gmail.com</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Hébergement
                        </h2>
                        <p>
                            Le site est hébergé par :
                        </p>
                        <p className="mt-3">
                            <strong>Vercel Inc.</strong>
                            <br />
                            440 N Barranca Ave #4133
                            <br />
                            Covina, CA 91723
                            <br />
                            États-Unis
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Propriété intellectuelle
                        </h2>
                        <p>
                            L'ensemble des œuvres, images, photographies, textes et contenus
                            présents sur ce site sont protégés par le droit d'auteur.
                        </p>
                        <p className="mt-3">
                            Toute reproduction, représentation, modification, publication ou
                            adaptation, totale ou partielle, est interdite sans autorisation
                            écrite préalable.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Utilisation du site
                        </h2>
                        <p>
                            Ce site a pour objectif de présenter une sélection d'œuvres
                            artistiques. Les informations présentes sur le site sont fournies
                            à titre indicatif et peuvent être modifiées à tout moment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-serif italic text-gray-600 mb-3">
                            Contact
                        </h2>
                        <p>
                            Pour toute question concernant le site ou les œuvres présentées,
                            vous pouvez utiliser le formulaire de contact ou écrire à :
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