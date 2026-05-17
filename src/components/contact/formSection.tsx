

export default function FormSection() {

    return (
        <div className="flex flex-col gap-4 lg:gap-8 justify-center px-6
                lg:px-12 py-12 bg-gray-50">
            <div>
                {/*form action, target, attribute a ajouter pour le back ?*/}
                <form className="flex flex-col items-start gap-10">
                    <input
                        className="w-full bg-transparent py-3 border-b border-gray-300/50
                            focus:border-gray-500 transition-colors focus:ring-0
                            text-gray-600 placeholder:text-gray-400 outline-none"
                        type="text"
                        name="name"
                        required
                        placeholder="Nom"
                    />

                    <input 
                        className="w-full bg-transparent py-3 border-b border-gray-300/50
                        focus:border-gray-500 transition-colors focus:ring-0
                        text-gray-600 placeholder:text-gray-400 outline-none"
                        type="text"
                        name="email"
                        required
                        placeholder="Email"
                    />

                    <input 
                        className="w-full bg-transparent py-3 border-b border-gray-300/50
                        focus:border-gray-500 transition-colors focus:ring-0
                        text-gray-600 placeholder:text-gray-400 outline-none"
                        type="text"
                        name="object"
                        required
                        placeholder="Objet"
                    />

                    <textarea
                        className="w-full bg-transparent my-12 py-3 border-b border-gray-300/50
                        focus:border-gray-500 transition-colors focus:ring-0
                        text-gray-600 placeholder:text-gray-400 outline-none"
                        name="message"
                        required
                        placeholder="Votre message"
                        rows={5}
                    />

                    <button
                        type="submit"
                        className="flex bg-gray-600 text-gray-50 px-8 py-4
                            tracking-[0.15em] transition-all duration-300
                            hover:bg-gray-500 hover:-translate-y-0.5 place-self-center
                            lg:place-self-auto"
                    >
                        <p className="pr-12">
                            Envoyer
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}