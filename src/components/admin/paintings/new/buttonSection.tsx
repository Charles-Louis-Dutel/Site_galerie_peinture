

export default function ButtonSection() {

    return (
        <section>
            <div className="flex justify-end px-6 lg:px-12 py-10 gap-16 mt-6">
                <button
                    type="button"
                    className="border py-2 px-8 cursor-pointer" 
                    >
                        Annuler
                </button>
            
                <button
                    type="submit"
                    className="py-2 px-12 bg-black text-white cursor-pointer hover:bg-black/80"
                >
                        ENREGISTRER L'ŒUVRE
                </button>
            </div>
        </section>
    );
}