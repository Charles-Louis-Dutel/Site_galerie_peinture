<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&amp;family=Manrope:wght@400;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "primary": "#1e1c18",
                    "primary-fixed-dim": "#cbc6bf",
                    "surface-container": "#eeeeee",
                    "on-error": "#ffffff",
                    "secondary": "#6b5777",
                    "secondary-fixed-dim": "#d6bee3",
                    "on-tertiary-fixed": "#1b1c1b",
                    "on-primary-fixed-variant": "#494641",
                    "error": "#ba1a1a",
                    "surface": "#f9f9f9",
                    "background": "#f9f9f9",
                    "on-primary-fixed": "#1d1b17",
                    "surface-variant": "#e2e2e2",
                    "on-background": "#1a1c1c",
                    "tertiary-fixed": "#e4e2e0",
                    "inverse-primary": "#cbc6bf",
                    "on-secondary-fixed": "#251530",
                    "on-primary-container": "#9d9992",
                    "secondary-fixed": "#f3daff",
                    "on-surface-variant": "#49473f",
                    "on-tertiary": "#ffffff",
                    "outline": "#7a776e",
                    "error-container": "#ffdad6",
                    "on-secondary": "#ffffff",
                    "tertiary-container": "#313130",
                    "surface-dim": "#dadada",
                    "surface-bright": "#f9f9f9",
                    "on-tertiary-container": "#9a9997",
                    "surface-container-highest": "#e2e2e2",
                    "surface-container-high": "#e8e8e8",
                    "on-tertiary-fixed-variant": "#474745",
                    "outline-variant": "#cbc6bc",
                    "secondary-container": "#f0d7fd",
                    "on-primary": "#ffffff",
                    "surface-tint": "#615e58",
                    "on-surface": "#1a1c1c",
                    "inverse-surface": "#2f3131",
                    "inverse-on-surface": "#f1f1f1",
                    "surface-container-lowest": "#ffffff",
                    "tertiary": "#1c1c1b",
                    "on-secondary-container": "#6f5b7b",
                    "primary-container": "#33312c",
                    "tertiary-fixed-dim": "#c8c6c4",
                    "on-error-container": "#93000a",
                    "primary-fixed": "#e7e2da",
                    "surface-container-low": "#f3f3f3",
                    "on-secondary-fixed-variant": "#52405e"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "section-gap": "8rem",
                    "container-max": "1440px",
                    "grid-gutter": "2rem",
                    "margin-edge": "4rem"
            },
            "fontFamily": {
                    "body-lg": ["manrope"],
                    "body-md": ["manrope"],
                    "headline-display": ["notoSerif"],
                    "headline-md": ["notoSerif"],
                    "label-sm": ["manrope"],
                    "headline-lg": ["notoSerif"]
            },
            "fontSize": {
                    "body-lg": ["1.125rem", {"lineHeight": "1.7", "fontWeight": "400"}],
                    "body-md": ["1rem", {"lineHeight": "1.6", "fontWeight": "400"}],
                    "headline-display": ["3.5rem", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400"}],
                    "headline-md": ["1.5rem", {"lineHeight": "1.3", "fontWeight": "400"}],
                    "label-sm": ["0.75rem", {"lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600"}],
                    "headline-lg": ["2.25rem", {"lineHeight": "1.2", "fontWeight": "400"}]
            }
          },
        },
      }
    </script>
<style>
        .font-notoSerif { font-family: 'Noto Serif', serif; }
        .font-manrope { font-family: 'Manrope', sans-serif; }
    </style>
</head>
<body class="bg-surface text-on-surface selection:bg-primary-fixed-dim selection:text-primary">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-edge py-6 bg-surface/90 dark:bg-surface-dim/90 backdrop-blur-sm border-b border-outline-variant/30">
<div class="font-headline-md text-headline-md tracking-widest text-primary dark:text-primary-fixed uppercase font-notoSerif">ÉLÉONORE DUBOIS</div>
<nav class="hidden md:flex gap-12">
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">GALERIE</a>
<a class="font-label-sm text-label-sm tracking-widest text-primary dark:text-primary-fixed border-b border-primary dark:border-primary-fixed pb-1" href="#">À PROPOS</a>
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant dark:text-on-tertiary-container hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">CONTACT</a>
</nav>
<div class="flex items-center gap-6">
<span class="material-symbols-outlined text-primary dark:text-primary-fixed cursor-pointer hover:opacity-70 transition-opacity duration-300" data-icon="shopping_bag">shopping_bag</span>
<span class="material-symbols-outlined md:hidden text-primary" data-icon="menu">menu</span>
</div>
</header>
<main class="pt-32 pb-20">
<!-- Hero Section -->
<section class="max-w-container-max mx-auto px-margin-edge mb-section-gap">
<div class="flex flex-col md:flex-row items-center gap-16">
<div class="w-full md:w-1/2 space-y-8">
<span class="font-label-sm text-label-sm text-outline tracking-[0.2em] uppercase">L'âme derrière le pinceau</span>
<h1 class="font-headline-display text-headline-display text-primary leading-tight">Capturer le silence des paysages.</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                        Depuis mon plus jeune âge, les collines du Luberon et les forêts d'Émeraude ont été mon refuge. Peindre n'est pas pour moi une profession, mais une nécessité vitale de dialogue avec la nature sauvage.
                    </p>
</div>
<div class="w-full md:w-1/2">
<div class="relative overflow-hidden aspect-[4/5] bg-surface-container-high">
<img alt="Éléonore Dubois" class="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-1000" data-alt="A serene, cinematic portrait of a female artist in her late thirties with soft features, standing in her sunlit studio. She is dressed in a simple linen apron stained with natural pigments, looking thoughtfully at a large landscape canvas. The lighting is soft and golden, coming from a large north-facing window, creating a high-end editorial aesthetic in a light-mode color palette of creams and soft greys." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPrnU3xsue97my57ojgdJSNVNeRem1psupc4Pcbdixc2Xh6oaZCrYfIh_lx8mmbwWra7jvHy_auKd5LKcFEIptDFWs6bo1xQTlpGj_7_hWppTUc0cDcEFj7VEFzTlBqa0tH4hsutG-XFkUNsNIGEd8n0e9Yjc111Jb_WFyd3FDmCUuDLBO2cki1J_gpRGdo-ckvPHde4Gg1ubTSecN7uSuBmi3UhVwE0bLwUyXE6-EIqhUZw54cydhjLf0vVss-znecyGGjBK4sOE"/>
</div>
</div>
</div>
</section>
<!-- Process Creative - Bento Grid Style -->
<section class="max-w-container-max mx-auto px-margin-edge mb-section-gap">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter auto-rows-[300px]">
<!-- Text Block 1 -->
<div class="md:col-span-4 md:row-span-2 flex flex-col justify-center p-12 bg-surface-container-low border border-outline-variant/20">
<h2 class="font-headline-lg text-headline-lg text-primary mb-6">Le Plein Air</h2>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Mon processus commence toujours loin de l'atelier. Je m'immerge dans le paysage pendant des heures avant de poser la première touche. C'est le vent, l'humidité de l'air et le mouvement des ombres qui dictent ma palette.
                    </p>
</div>
<!-- Image: The Studio -->
<div class="md:col-span-8 md:row-span-2 relative overflow-hidden bg-surface-container-high">
<img alt="L'Atelier" class="w-full h-full object-cover" data-alt="A wide-angle, minimalist interior shot of a bright artist studio. The walls are white and the floor is light-colored wood, scattered with subtle paint splatters. Several large canvases leaning against the walls depict abstract mountain ranges in earthy tones. The overall mood is peaceful and organized, reflecting a modern gallery aesthetic with high-key lighting and a sophisticated white and charcoal palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL-SibmCcV5J_JOKauF8ID24cAWst-nSK0js2SJ5kMPzKXd6_y8aZfOrtSnzuKLr8l2Qxb_iHYKnyLV4vCk1HdviMtGnymH2aZVSmxUn-e4yD9rcMThCZYQ9fKfqo2BITOPls4HWks0YrtkrDqsBev_lvAisefWoy6wiXBVqPLF-RYNHJmAJmrJtrwY8ap11nXlBtAemnqDiqns0mfTWy7p-S0-dn8yQZG_HEjHMUv-zKa63iimgUSkKPHSu8T7MnwJ1ptjJyVTkI"/>
</div>
<!-- Image: Tools -->
<div class="md:col-span-6 md:row-span-1 relative overflow-hidden bg-surface-container-high">
<img alt="Pinceaux et pigments" class="w-full h-full object-cover" data-alt="A macro close-up of handmade wooden paintbrushes and a ceramic palette with dried smears of olive green, ochre, and deep slate pigments. The focus is sharp on the natural textures of the bristles and the organic grains of the wood. The lighting is soft and natural, emphasizing a craft-focused, artisanal aesthetic consistent with a high-end minimalist art brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7n0srJEq8o-Gtefgd25UPpggRIQo9ctjAFZB4U-DRxYoxjlHUL-qOLRLo-h50flQnoEsh1IdOnpHhqqruxeabz2Quf76pAMMRNY6ucPgjU6zSVONb74howt-OsEUb9hBH5Qey9UNFad9imlITEUSo9VZ2Iqj5FQuoNY6Ep-Z2n_W92nFfKmJZk7v8OrU31c1GsPg1lsWpfG0JFnAlFI4pkqRm35LsfCXl_utUTbgoLP9FrCKJGJCbxXJkicAB2BWMwmX1KXEhtXU"/>
</div>
<!-- Text Block 2 -->
<div class="md:col-span-6 md:row-span-1 flex flex-col justify-center p-12 bg-surface-container-low border border-outline-variant/20">
<h3 class="font-headline-md text-headline-md text-primary mb-4">L'Essence du Naturel</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
                        Je privilégie les pigments naturels et les huiles de première pression. La matérialité de la peinture doit faire écho à la terre qu'elle représente. Chaque œuvre est une tentative de préserver un instant de calme absolu.
                    </p>
</div>
</div>
</section>
<!-- Quote Section -->
<section class="bg-surface-container-lowest py-32 border-y border-outline-variant/30">
<div class="max-w-3xl mx-auto px-margin-edge text-center italic">
<blockquote class="font-headline-lg text-headline-lg text-primary leading-relaxed">
                    "Je ne cherche pas à copier la nature, mais à exprimer l'émotion que je ressens face à son immensité. Chaque coup de pinceau est un mot de remerciement."
                </blockquote>
<cite class="mt-8 block font-label-sm text-label-sm tracking-widest text-outline uppercase not-italic">— Éléonore Dubois</cite>
</div>
</section>
<!-- Signature Work Section -->
<section class="max-w-container-max mx-auto px-margin-edge py-section-gap">
<div class="flex flex-col md:flex-row gap-16 items-center">
<div class="w-full md:w-1/2">
<div class="aspect-square relative overflow-hidden bg-surface-container-high">
<img alt="Processus créatif" class="w-full h-full object-cover" data-alt="A minimalist overhead shot of an artist's hands mixing oil paints on a simple glass palette. The colors are muted forest greens and misty greys. The lighting is diffused and soft, creating a high-contrast yet gentle scene. The aesthetic is purely editorial and sophisticated, focusing on the calm movement of the artistic process in a bright, modern light-mode setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFvYDPLBJObOrjoCufngAFPovtGs5T85Bo-tvyEOuBzLvGsPnNmSRjcWM6LA6T-t1QDF9tVY9uHVy75KNXCvFPHSBdeCRCzaeiURJL7DlUohodYCPhIPZY-Wk49vLelhz7YzTPBsvtZaSVUSRt329pyJZWSmR7oox_CYDN-BWI74f7vCH8P22qbnx7B3bz3oIuDavCQZ2DBw-m7kcTU5gCrILVOhts8d04xVAe9WJeA17zeUoQS8vFKB-zYN8mCcrzoVcWF2QvP74"/>
</div>
</div>
<div class="w-full md:w-1/2 space-y-6">
<h2 class="font-headline-lg text-headline-lg text-primary">Une quête de simplicité</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant">
                        Dans un monde qui s'accélère, mon travail est une invitation à ralentir. En tant que peintre amateur, je ne suis liée à aucun impératif commercial, seulement à l'authenticité de mon regard.
                    </p>
<div class="pt-8">
<a class="inline-block px-10 py-4 border border-primary text-primary font-label-sm text-label-sm tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-500 uppercase" href="#">
                            Découvrir ma galerie
                        </a>
</div>
</div>
</div>
</section>
</main>
<!-- Footer -->
<footer class="w-full py-12 px-margin-edge flex flex-col md:flex-row justify-between items-center gap-4 text-center mt-section-gap bg-surface dark:bg-surface-dim border-t border-outline-variant/30">
<div class="font-headline-md text-headline-md text-primary font-notoSerif uppercase">ÉLÉONORE DUBOIS</div>
<div class="flex flex-wrap justify-center gap-8 font-label-sm text-label-sm tracking-widest text-on-surface-variant dark:text-on-tertiary-container uppercase">
<a class="hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300" href="#">MENTIONS LÉGALES</a>
<a class="hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300" href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
<a class="hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300" href="#">INSTAGRAM</a>
<a class="hover:text-primary dark:hover:text-primary-fixed transition-colors duration-300" href="#">NEWSLETTER</a>
</div>
<div class="font-label-sm text-label-sm tracking-widest text-on-surface-variant dark:text-on-tertiary-container uppercase">
            © 2024 ÉLÉONORE DUBOIS — PEINTURES NATURELLES
        </div>
</footer>
</body></html>