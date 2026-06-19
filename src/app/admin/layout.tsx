import '@/src/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <main className="min-h-screen pt-24">
        {children}
      </main>
  );
}
