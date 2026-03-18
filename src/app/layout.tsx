import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from '@/src/components/nav';
//import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
