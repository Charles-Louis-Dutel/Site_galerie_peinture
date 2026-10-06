import '@/src/app/globals.css';
import type { Metadata } from 'next';

// L'administration ne doit pas être indexée par les moteurs de recherche.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

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
