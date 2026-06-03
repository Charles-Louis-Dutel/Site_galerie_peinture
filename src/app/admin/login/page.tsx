
import AdminLoginForm from "@/src/components/admin/login/adminLoginForm";


export default function AdminLogin() {

    return (
      <section>
        <div className="w-full py-20 lg:py-32">
            <div className="flex flex-col mx-auto px-6 lg:px-12 items-center gap-6 lg:gap-12">
                <h1 className="text-gray-500">
                  ESPACE ADMINISTRATION
                </h1>

                <AdminLoginForm />
            </div>
        </div>
      </section>  
    );
}