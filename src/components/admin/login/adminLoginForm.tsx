'use client'

import React, { useState } from "react";
import supabase from "@/src/lib/supabase";


export default function AdminLoginForm() {

    async function onSubmit(event: React.SubmitEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        if (typeof email !== "string" || typeof password !== "string")
        {
            return;
        }

        let { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error)
        {
            console.log(error);
        }
    }

    return (
        <section>
            <div className="flex flex-col gap-4 lg:gap-8 border border-gray-200
                shadow mx-6 lg:mx-12">
                <form
                    className="flex flex-col items-start gap-10 p-4 lg:py-20 lg:px-12"
                    onSubmit={onSubmit}
                >
                    <input
                        className="w-full bg-transparent py-3 border-b border-gray-300/50
                        focus:border-gray-500 transition-colors focus:ring-0 text-gray-600
                        placeholder:text-gray-400 outline-none"
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                    />

                    <input
                        className="w-full bg-transparent py-3 border-b border-gray-300/50
                        focus:border-gray-500 transition-colors focus:ring-0 text-gray-600
                        placeholder:text-gray-400 outline-none"
                        type="password"
                        name="password"
                        required
                        placeholder="Mot de passe"
                    />

                    <button
                        type="submit"
                        className="flex bg-gray-600 text-gray-50 mt-12 px-8 py-4 tracking-[0.15em]
                        transition-all duration-300 hover:bg-gray-500 hover:-translate-y-0.5
                        place-self-center lg:place-self-auto"
                    >
                        <p>
                        Se connecter
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                </form>
            </div>
        </section>
    );
}