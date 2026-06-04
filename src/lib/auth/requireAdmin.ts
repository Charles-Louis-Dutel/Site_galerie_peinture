import { createClient } from "../supabase/server";
import { notFound } from "next/navigation";
import { redirect } from "next/navigation";

export default async function AdminCheck() {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.getUser();
    
        if (error)
        {
            console.log(error);
            redirect('/admin/login');
        }
    
        if (!data)
            redirect('/admin/login');
    
        if (data.user?.email !== process.env.ADMIN_EMAIL)
        {
            notFound();
        }
}