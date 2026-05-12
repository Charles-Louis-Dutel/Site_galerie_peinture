export type Paintings = {
    id: string;
    slug: string;
    title: string;
    year: number;
    width: number;
    height: number;
    size: string;
    medium: string;
    src: string;
    alt: string;
    orientation: string;
    featured: boolean;
}


export const paintings = [
    {

        id: "painting_001",
        slug: "bord-de-lac",
        title: "Bord de lac",
        year: 2020,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Acrylique",
        src: "/images/bord_de_lac.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_002",
        slug: "champs",
        title: "Champs",
        year: 2023,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Acrylique",
        src: "/images/champs.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_003",
        slug: "chemin-dans-les-champs",
        title: "Balade dans les champs",
        year: 2023,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Huile sur toile",
        src: "/images/chemin_dans_les_champs.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_004",
        slug: "coquelicots",
        title: "Coquelicots",
        year: 2024,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Huile sur toile",
        src: "/images/coquelicots.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_005",
        slug: "eglise",
        title: "Eglise",
        year: 2022,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Acrylique",
        src: "/images/eglise.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_006",
        slug: "plage",
        title: "Plage",
        year: 2023,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Huile sur toile",
        src: "/images/plage.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_007",
        slug: "rive-sous-les-arbres",
        title: "Rive sous les arbres",
        year: 2023,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Acrylique",
        src: "/images/rive_sous_arbres.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_008",
        slug: "riviere",
        title: "Riviere",
        year: 2023,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Acrylique",
        src: "/images/riviere.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
    {
        id: "painting_009",
        slug: "village-medieval",
        title: "Village medieval",
        year: 2020,
        width: 80,
        height: 60,
        size: "60x80cm",
        medium: "Acrylique",
        src: "/images/village_medieval.jpg",
        alt: "Peinture de paysage",
        orientation: "landscape",
        featured: false
    },
]