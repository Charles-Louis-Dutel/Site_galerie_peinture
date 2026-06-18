'use client';

export default function Error() {
    return (
        <section className="w-full px-6 md:px-12 py-24">
            <div className="max-w-3xl mx-auto text-center text-gray-500">
                <h1 className="font-serif text-3xl mb-6">
                    Tableau indisponible
                </h1>

                <p className="text-lg">
                    Impossible de charger ce tableau pour le moment.
                </p>

                <p className="mt-2">
                    Veuillez réessayer dans quelques instants.
                </p>
            </div>
        </section>
    );
}