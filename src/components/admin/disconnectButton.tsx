'use client'


import { createClient } from "@/src/lib/supabase/client"
import { useRouter } from "next/navigation";


export default function DisconnectButton() {
    const supabase = createClient();
    const router = useRouter();

    async function disconnect() {


        const { error } = await supabase.auth.signOut();

        if (error)
        {
            console.error(error);
            return;
        }
        router.push('/admin/login');
    }

    return (
        <div>
            <button
                type="button" 
                className="border border-gray-300 rounded-full px-6 py-3
                            font-serif transition-colors duration-300
                            hover:bg-red-500 hover:text-white text-gray-500
                            cursor-pointer"
                onClick={disconnect}
            >
                Déconnexion
            </button>
        </div>
    )
}