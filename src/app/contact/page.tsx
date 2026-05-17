import Image from "next/image";

export default function ContactPage() {
    return (
        <section>
            <div className="w-full py-20 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col gap-4 md:gap-8 justify-center px-6 md:px-12">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <h1 className="text-2xl md:text-5xl font-serif text-gray-600">
                                Contact
                            </h1>

                            <p className="md:text-lg text-gray-500">
                                Pour toute question concernant une œuvre ou une demande
                                particulière, vous pouvez me contacter via le formulaire
                                ci-contre. Je prendrai le temps de vous répondre avec plaisir.
                            </p>
                        </div>

                        <div className="relative w-full max-h-[40dvh] aspect-3/4">
                            <Image
                                src="/images/pinceaux2.jpg"
                                alt="Pot contenant des pinceaux"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex flex-col gap-4 text-gray-500">
                            <a 
                                href="mailto:sophiedutel@gmail.com"
                                className='hover:text-black flex gap-2 px-2'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                sophiedutel@gmail.com
                            </a>

                            <a 
                                href="https://www.instagram.com/sophie_pierre51?igsh=MXBhbDZycGlzbGcyeQ=="
                                target="_blank" rel="noopener noreferrer"
                                className='flex size-10 justify-center items-center
                                    border border-gray-200 shadow rounded-full
                                    hover:bg-linear-to-tr hover:from-yellow-400 hover:via-pink-500
                                    hover:to-purple-600 hover:text-white hover:scale-105
                                    bg-linear-to-tr from-yellow-400 via-pink-500
                                    to-purple-600 text-white lg:bg-none lg:bg-white lg:text-gray-500'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="bi bi-instagram">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:gap-8 justify-center px-6
                            md:px-12 bg-gray-100">
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}