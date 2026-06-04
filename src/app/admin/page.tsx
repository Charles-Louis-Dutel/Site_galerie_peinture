
import { createClient } from "@/src/lib/supabase/server";


export default async function AdminPage() {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    return (
        <section>
            <div className="w-full py-20 lg:py-32">
                <div className="flex justify-center mx-auto px-6 lg:px-12">
                    <p>Page admin</p>
                </div>
            </div>
        </section>
    )
}