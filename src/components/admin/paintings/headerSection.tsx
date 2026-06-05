

export default function PaintingListHeader() {

    return (
        <section className="grid grid-cols-12 px-6 lg:px-12 pb-32 items-center">
            <div className="flex col-span-7 justify-center">
                <h1 className="">
                    Gestion des oeuvres
                </h1>
            </div>

            <div className="col-span-5">
                <button
                    type="button"
                    className="border p-4"
                >
                    + Ajouter un tableau
                </button>
            </div>
        </section>
    );
}