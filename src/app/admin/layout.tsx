import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from '@/src/components/layout/nav';
import Footer from '@/src/components/layout/footer';
import '@/src/app/globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
          <main className="pt-24 flex-1">
            {children}
          </main>
      </body>
    </html>
  );
}
