

export default function NewPaintingPage() {

    return (
        <section>
            <div className="w-full py-20">
                <div className="max-w-7xl mx-auto">
                    <section>
                        <div className="flex flex-col w-full px-6 lg:px-12 gap-4 pb-10">
                            <h2 className="text-4xl">
                                Ajouter une nouvelle œuvre 
                            </h2>

                            <div className="w-32 border text-gray-500">
                            </div>
                        </div>
                    </section>

                    <form>
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:px-12 py-10 gap-4">
                                <div className="flex flex-col gap-4">
                                    <label>
                                        SÉLECTIONNER UNE IMAGE
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/webp"
                                        className="aspect-square border bg-gray-100"
                                    />
                                </div>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </section>
    );
}