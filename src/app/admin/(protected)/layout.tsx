import AdminCheck from "@/src/lib/auth/requireAdmin";

export default async function ProtectedAdminLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    await AdminCheck();

    return (
        <main>
            {children}
        </main>
    );
}