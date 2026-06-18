'use client'

import { useState } from "react";
import * as z from "zod";


const FormValues = z.object({
    name: z.string()
            .trim()
            .min(2)
            .max(50),

    email: z.email(),
    
    subject: z.string()
                .trim()
                .min(2)
                .max(50),

    message: z.string()
                .trim()
                .min(10)
                .max(2000),
});

export default function FormSection() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [formError, setFormError] = useState<string | null>(null);
    const [sendSuccess, setSendSuccess] = useState<boolean | null>(null);


    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        setSendSuccess(null);
        setFormError(null);
        setIsLoading(true);

        try {
            const formData = new FormData(event.currentTarget);
            const values = Object.fromEntries(formData);

            const { name, email, subject, message, company } = values;
            
            const result = FormValues.safeParse({ name, email, subject, message });

            if (!result.success) {
                setFormError("Merci de vérifier les informations du formulaire.");
                setIsLoading(false);
                return;
            }
            
            const data = result.data;
            const bodyData = {
                ...data,
                honeypot: company
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyData),
            });

            if (!response.ok)
            {
                setSendSuccess(false);
                setFormError("Une erreur est survenue lors de l'envoi du message.");
            }
            else
            {
                setSendSuccess(true);
                form.reset();
                setFormError(null);
            }
            setIsLoading(false);
            return;
        } catch (error) {
            console.log(error);
            setFormError("Une erreur est survenue lors de l'envoi du message.");
            setIsLoading(false);
        }
    }

    return (
        <section>
            <div className="flex flex-col gap-4 lg:gap-8 justify-center px-6
                    lg:px-12 py-12 bg-gray-50">
                <div>
                    <form
                        onSubmit={handleSubmit} 
                        className="flex flex-col items-start gap-10"
                    >
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
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                        />

                        <input 
                            className="w-full bg-transparent py-3 border-b border-gray-300/50
                            focus:border-gray-500 transition-colors focus:ring-0
                            text-gray-600 placeholder:text-gray-400 outline-none"
                            type="text"
                            name="subject"
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

                        <input
                            className="absolute left-[-9999]"
                            type="text"
                            name="company"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        {formError &&
                            <div>
                                <p className="text-red-500">
                                    { formError }
                                </p>
                            </div>
                        }

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex bg-gray-600 text-gray-50 px-8 py-4
                                tracking-[0.15em] transition-all duration-300
                                hover:bg-gray-500 hover:-translate-y-0.5 place-self-center
                                lg:place-self-auto"
                        >
                            <p className="pr-12">
                                {isLoading ? "Envoi en cours..." : "Envoyer"}
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>
                </div>

                {sendSuccess !== null &&
                    <div 
                        className="fixed inset-0 top-0 left-0 w-full h-full bg-black/30"
                        onClick={() => setSendSuccess(null)}
                    >
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex bg-white p-32">
                                {sendSuccess ? 
                                    <p>Votre message a bien été envoyé.</p> :
                                    <p
                                        className="text-red-500"
                                    >
                                        Erreur lors de l'envoi du message,
                                        {' '}veuillez réessayer.
                                    </p>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
}