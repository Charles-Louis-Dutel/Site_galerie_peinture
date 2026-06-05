

export default function SecondFormSection() {

    return (
        <section>
            <div className="flex flex-col px-6 lg:px-12 py-10 gap-10">
                <div className="flex flex-col">
                    <label>
                        DESCRIPTION
                    </label>
                    <textarea
                        className="w-full bg-transparent py-3 border-b border-gray-300/50
                        focus:border-gray-500 transition-colors focus:ring-0
                        text-gray-600 placeholder:text-gray-400 outline-none"
                        name="description"
                        placeholder="Description du tableau (optionnel)"
                        rows={4}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="flex flex-col">
                        <label>
                            DIMENSIONS
                        </label>
                        <div className="flex gap-8">
                            <input 
                                type="number"
                                name="height"
                                max={10000}
                                min={1}
                                required
                                placeholder="Hauteur"
                                className="w-full bg-transparent py-3 border-b 
                                border-gray-300/50 focus:border-gray-500 focus:ring-0
                                transition-colors text-gray-600 placeholder:text-gray-300
                                outline-none"
                            />

                            <input 
                                type="number"
                                name="width"
                                max={10000}
                                min={1}
                                required
                                placeholder="Largeur"
                                className="w-full bg-transparent py-3 border-b 
                                border-gray-300/50 focus:border-gray-500 focus:ring-0
                                transition-colors text-gray-600 placeholder:text-gray-300
                                outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label>
                            TEXTE ALTERNATIF 
                        </label>
                        <input 
                                type="text"
                                name="alt"
                                maxLength={75}
                                minLength={1}
                                required
                                placeholder="Description pour l'accessibilité"
                                className="w-full bg-transparent py-3 border-b 
                                border-gray-300/50 focus:border-gray-500 focus:ring-0
                                transition-colors text-gray-600 placeholder:text-gray-300
                                outline-none"
                            />
                    </div>
                </div>

                <label className="flex items-center gap-4 cursor-pointer">
                    <input
                        type="checkbox"
                        name="featured"
                        className="sr-only peer"
                    />

                    <div
                        className="relative w-10 h-6 bg-gray-200 rounded-full
                            transition-colors duration-300 peer-checked:bg-gray-500
                            after:content-[''] after:absolute after:top-0.5
                            after:left-0.5 after:w-5 after:h-5 after:bg-white
                            after:rounded-full after:shadow after:transition-transform
                            after:duration-300 peer-checked:after:translate-x-4"
                    />

                    <span className="text-sm tracking-wide uppercase">
                        Mise en avant dans la galerie
                    </span>
                </label>
            </div>
        </section>
    );
}