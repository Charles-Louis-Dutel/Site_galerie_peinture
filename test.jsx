<!DOCTYPE html><html class="light" lang="fr"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&amp;family=Manrope:wght@400;600&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "outline": "#7a776e",
                    "surface-container-highest": "#e2e2e2",
                    "primary-fixed-dim": "#cbc6bf",
                    "on-tertiary": "#ffffff",
                    "secondary-fixed": "#f3daff",
                    "tertiary-container": "#313130",
                    "on-tertiary-container": "#9a9997",
                    "inverse-primary": "#cbc6bf",
                    "surface-variant": "#e2e2e2",
                    "surface-container": "#eeeeee",
                    "surface-container-low": "#f3f3f3",
                    "on-secondary-container": "#6f5b7b",
                    "surface": "#f9f9f9",
                    "secondary": "#6b5777",
                    "on-error-container": "#93000a",
                    "on-primary-container": "#9d9992",
                    "on-error": "#ffffff",
                    "on-secondary": "#ffffff",
                    "surface-tint": "#615e58",
                    "outline-variant": "#cbc6bc",
                    "surface-container-high": "#e8e8e8",
                    "tertiary": "#1c1c1b",
                    "primary-fixed": "#e7e2da",
                    "tertiary-fixed": "#e4e2e0",
                    "on-secondary-fixed": "#251530",
                    "on-tertiary-fixed": "#1b1c1b",
                    "on-surface-variant": "#49473f",
                    "secondary-container": "#f0d7fd",
                    "on-secondary-fixed-variant": "#52405e",
                    "primary": "#1e1c18",
                    "background": "#f9f9f9",
                    "on-primary": "#ffffff",
                    "inverse-surface": "#2f3131",
                    "tertiary-fixed-dim": "#c8c6c4",
                    "on-primary-fixed": "#1d1b17",
                    "surface-dim": "#dadada",
                    "secondary-fixed-dim": "#d6bee3",
                    "on-tertiary-fixed-variant": "#474745",
                    "on-primary-fixed-variant": "#494641",
                    "error": "#ba1a1a",
                    "primary-container": "#33312c",
                    "inverse-on-surface": "#f1f1f1",
                    "error-container": "#ffdad6",
                    "surface-bright": "#f9f9f9",
                    "on-background": "#1a1c1c",
                    "surface-container-lowest": "#ffffff",
                    "on-surface": "#1a1c1c"
            },
            "borderRadius": {
                    "DEFAULT": "0px",
                    "lg": "0px",
                    "xl": "0px",
                    "full": "9999px"
            },
            "spacing": {
                    "section-gap": "8rem",
                    "container-max": "1440px",
                    "margin-edge": "4rem",
                    "grid-gutter": "2rem"
            },
            "fontFamily": {
                    "headline-display": ["Noto Serif"],
                    "body-lg": ["Manrope"],
                    "label-sm": ["Manrope"],
                    "headline-lg": ["Noto Serif"],
                    "headline-md": ["Noto Serif"],
                    "body-md": ["Manrope"],
                    "notoSerif": ["Noto Serif"],
                    "manrope": ["Manrope"]
            },
            "fontSize": {
                    "headline-display": ["3.5rem", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400"}],
                    "body-lg": ["1.125rem", {"lineHeight": "1.7", "fontWeight": "400"}],
                    "label-sm": ["0.75rem", {"lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600"}],
                    "headline-lg": ["2.25rem", {"lineHeight": "1.2", "fontWeight": "400"}],
                    "headline-md": ["1.5rem", {"lineHeight": "1.3", "fontWeight": "400"}],
                    "body-md": ["1rem", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        body {
            background-color: #f9f9f9;
            color: #1e1c18;
            -webkit-font-smoothing: antialiased;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
    </style>
</head>
<body class="font-body-md text-on-surface">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-edge py-6 bg-surface/90 backdrop-blur-sm border-b border-outline-variant/30">
<div class="font-headline-md text-headline-md tracking-widest text-primary uppercase">
            ÉLÉONORE DUBOIS
        </div>
<nav class="hidden md:flex gap-12 items-center">
<a class="font-headline-md text-headline-md font-notoSerif text-primary border-b border-primary pb-1 transition-all duration-500 cursor-pointer" href="#">GALERIE</a>
<a class="font-headline-md text-headline-md font-notoSerif text-on-surface-variant hover:text-primary transition-colors transition-all duration-500 cursor-pointer" href="#">À PROPOS</a>
<a class="font-headline-md text-headline-md font-notoSerif text-on-surface-variant hover:text-primary transition-colors transition-all duration-500 cursor-pointer" href="#">CONTACT</a>
</nav>
<div class="flex items-center gap-6">
<button class="text-primary hover:opacity-70 transition-opacity duration-300 cursor-pointer">
<span class="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
</div>
</header>
<main class="pt-32 max-w-[1440px] mx-auto"><div class="px-margin-edge mb-8">
    <a href="#" class="inline-flex items-center gap-2 text-primary font-headline-md text-headline-md font-notoSerif hover:opacity-60 transition-opacity duration-300 group">
        <span class="material-symbols-outlined text-sm translate-y-px group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
        <span class="">Retour à la galerie</span>
    </a>
</div>
<!-- Artwork Details Section -->
<section class="px-margin-edge grid grid-cols-1 md:grid-cols-12 gap-grid-gutter items-start">
<!-- Left Column: Image -->
<div class="md:col-span-7 bg-surface-container-low p-8">
<img alt="L'Éveil des Cimes" class="w-full h-auto object-cover shadow-sm" data-alt="A grand oil painting of a majestic mountain range during the blue hour, executed in a serene and painterly style with visible, expressive brushstrokes. The peaks are dusted with snow, catching the last cool light of day against a soft, hazy sky. The color palette is composed of muted teals, deep slate grays, and crisp whites, evoking a sense of tranquil isolation. The overall aesthetic is refined and editorial, perfectly suited for a high-end minimalist art gallery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL8ly2rPyjUCnJm6FBT46ReoeX-HvXhma7wqTnZ55y-HTdEowK5-7VhqFbjyqoYFt6EsUP0OE0Re5vjD2KC2ZczOMNzEPJAPg4TkfSqOVOmLCAw_nAQvxqCLOjz5fsqSoHnwqlScbn6RaazVCkt7z21ngRPZlFDJnV4MjbnOaFNEVYVCcdCjFBnIRNF2ZqYOfiK-rlzEpgaHwJXrp2Oyci7dX4VtUCzqaIsbcYTl6jj-AiRxu9EMCbnhmV-Nv9jl9OJHd8lHfFT38">
</div>
<!-- Right Column: Info -->
<div class="md:col-span-5 md:pl-12 flex flex-col justify-center h-full">
    <div class="mb-12">
        <h1 class="font-headline-display text-headline-display text-primary mb-4">L'Éveil des Cimes</h1>
        <div class="w-12 h-px bg-outline-variant mb-8"></div>
    </div>

    <div class="space-y-6">
        <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Technique</span>
            <p class="font-headline-md text-headline-md text-primary">Huile sur toile</p>
        </div>

        <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Dimensions</span>
            <p class="font-headline-md text-headline-md text-primary">180 x 140 cm</p>
        </div>

        <div class="flex flex-col">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mb-1">Année</span>
            <p class="font-headline-md text-headline-md text-primary">2024</p>
        </div>
<div class="pt-10">
<p class="font-headline-lg text-headline-lg text-primary mb-2">5 200 €</p>
<p class="font-label-sm text-label-sm text-on-surface-variant italic">Encadrement sur mesure disponible sur demande.</p>
</div>
</div>
</div>
</section>
<!-- Contact Section -->
<section class="mt-section-gap px-margin-edge mb-section-gap">
<div class="border-t border-outline-variant/30 pt-section-gap flex flex-col items-center text-center">
<h2 class="font-headline-lg text-headline-lg text-primary mb-8 italic">Cette œuvre vous intéresse ?</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-12">
                    Pour toute demande d'acquisition, de visite privée à l'atelier ou pour recevoir le dossier complet de l'œuvre, n'hésitez pas à nous contacter.
                </p>
<a class="inline-block px-12 py-5 bg-primary-container text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300" href="#">
                    Contacter l'artiste
                </a>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-12 px-margin-edge flex flex-col md:flex-row justify-between items-center gap-4 text-center mt-section-gap border-t border-outline-variant/30 bg-surface">
<div class="font-label-sm text-label-sm tracking-widest text-on-surface-variant">
            © 2024 ÉLÉONORE DUBOIS — PEINTURES NATURELLES
        </div>
<div class="flex flex-wrap justify-center gap-8">
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">MENTIONS LÉGALES</a>
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">INSTAGRAM</a>
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">NEWSLETTER</a>
</div>
</footer>


</body></html>