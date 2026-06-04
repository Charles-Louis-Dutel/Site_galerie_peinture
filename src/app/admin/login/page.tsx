
import AdminLoginForm from "@/src/components/admin/login/adminLoginForm";
import Link from "next/link";


export default function AdminLoginPage() {

    return (
      <section>
        <div className="w-full py-20 lg:py-32">
            <div className="flex flex-col mx-auto px-6 lg:px-12 items-center gap-6 lg:gap-12">
                <h1 className="text-gray-500">
                  ESPACE ADMINISTRATION
                </h1>

                <AdminLoginForm />

                <div>
                  <Link href="/">
                    <div className="flex gap-4 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                      </svg>

                      <p>
                        Retour au site
                      </p>
                    </div>
                  </Link>
                </div>
            </div>
        </div>
      </section>  
    );
}