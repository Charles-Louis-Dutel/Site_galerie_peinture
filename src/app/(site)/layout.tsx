import Nav from '@/src/components/layout/nav';
import Footer from '@/src/components/layout/footer';
import '@/src/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
        <main className="pt-24 flex-1">
          {children}
        </main>
      <Footer />
    </div>
  );
}
