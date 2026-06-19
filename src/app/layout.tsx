import '@/src/app/globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Sophie Dutel | Peintures originales",
    description: `Découvrez les œuvres originales de Sophie Dutel. Galerie de peintures
        contemporaines, paysages et créations uniques.`,
    
    openGraph: {
        title: "Sophie Dutel",
        description: "Découvrez les œuvres originales de Sophie Dutel",
        images: ["/og-image.jpg"],
        type: "website",
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fr">
            <body className="min-h-screen">
                {children}
            </body>
        </html>
    );
}