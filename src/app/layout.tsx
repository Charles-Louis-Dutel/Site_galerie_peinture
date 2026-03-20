import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from '@/src/components/layout/nav';
import Footer from '@/src/components/layout/footer';
//import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="text-gray-600">
        <Nav />
          <main className="pt-24">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
