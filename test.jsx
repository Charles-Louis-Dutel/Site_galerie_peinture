<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400&amp;family=Manrope:wght@400;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
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
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f9f9f9;
        }
    </style>
</head>
<body class="font-body-md text-on-surface antialiased">
<!-- TopNavBar -->
<header class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-16 py-6 bg-surface/90 backdrop-blur-sm border-b border-outline-variant/30">
<a class="font-headline-md text-headline-md tracking-widest text-primary" href="#">ÉLÉONORE DUBOIS</a>
<nav class="hidden md:flex gap-12">
<a class="font-label-sm text-label-sm text-primary border-b border-primary pb-1" href="#">GALERIE</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">À PROPOS</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">CONTACT</a>
</nav>
<div class="flex items-center gap-4 text-primary">
<span class="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity" data-icon="shopping_bag">shopping_bag</span>
</div>
</header>
<!-- Hero Section -->
<section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0 scale-105">
        <img alt="Peinture de paysage" class="w-full h-full object-cover" data-alt="A large, breathtaking oil painting of a misty mountain range at dawn, rendered with visible, expressive brushstrokes. The color palette features soft earthy tones, muted sage greens, and ethereal morning light breaking through purple clouds. The style is impressionistic and organic, evoking a sense of deep tranquility and the raw majesty of wild nature in a modern gallery aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQaCoJf3U5wmKUNcQKyzi9cBv3UHAJX3x97MsqdQb-33Hm_TUg60v2b_G-_ZeaohqszjIea6ZqTWND8Ll3CgDNBaiDKNlTw3pEZ9aq1MgEAmRa2bm6UA4MfF88QtN2qBYd5fQDthBQUKadgmaELckV2pYeRMPvg4rykNAJM4hUSNmJVNRduXOh5-z9MKGnoWkP89Em4GfPLMJ2Y8OjnhIT1iYyIbqv2awl-1G_UX8cHoxMeRVCWIkV_Mxs7qfzcVzEZFc59dj92ns"/>
        <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent">
        </div>
    </div>

    <div class="absolute bottom-[80px] left-[80px] z-10 text-left max-w-2xl">
        <h1 class="font-headline-display text-headline-display text-white mb-8 italic drop-shadow-md">
            Capturer l'âme de la nature
        </h1>
        <a class="inline-block bg-white text-primary font-label-sm text-label-sm py-4 px-12 tracking-widest hover:bg-primary hover:text-white transition-all duration-500 border border-white" href="#">
                    DÉCOUVRIR LA GALERIE
        </a>
    </div>

    <div class="absolute bottom-[80px] right-[80px] z-10 flex items-center gap-4">
    
    <div class="h-[1px] w-12 bg-white/50"></div>
        <span class="font-label-sm text-label-sm text-white tracking-[0.2em]">01 / 04</span>
    </div>
</section>
<!-- Introduction Section -->
<section class="max-w-[1440px] mx-auto px-4 md:px-16 py-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div class="md:col-span-5 relative">
<div class="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
<img alt="Éléonore Dubois" class="w-full h-full object-cover" data-alt="A professional, minimalist editorial portrait of a female artist in her studio, illuminated by soft natural side-lighting. She wears a simple linen apron stained with natural pigments, standing against a clean white gallery wall. The atmosphere is quiet and contemplative, emphasizing an authentic connection between the artist and her craft, styled with high-end photography aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIXRDIr9EwIU2VjAFdmlbcv_tfSNHqWtn5Q5OTGyXuoN36Gp5hOkEruXeumlzrZwr1Oxo_iWw7AmGGzf0QNPH7aUbbns8fTLfDX6PYNY1ifgZvUlw3Cv8lRUY0PgYoYBYHDXzucWzUE4wK8otR7SVTodEY36g_ySAc4wrAIdL-o7LXSZR-6XOz492m2whT460Lewo9tM-NHnV_dISnmPkuLomsXd22fyWcYvZyZ5F5LaWRH_bJ0LdeGAh1-1KXQ8UHyYSHerZtUhw"/>
</div>
<div class="absolute -bottom-8 -right-8 w-48 h-48 border border-outline-variant/30 hidden md:block"></div>
</div>
<div class="md:col-span-6 md:col-start-7">
<span class="font-label-sm text-label-sm text-outline tracking-widest block mb-4 uppercase">L'Artiste</span>
<h2 class="font-headline-lg text-headline-lg text-primary mb-8">Une quête de lumière et d'immensité</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                Éléonore Dubois explore la frontière ténue entre le visible et le ressenti. Ses œuvres, réalisées avec des pigments naturels, traduisent la puissance silencieuse des paysages sauvages. Pour elle, peindre n'est pas seulement une reproduction, mais une immersion profonde dans l'esprit des lieux oubliés.
            </p>
<p class="font-body-md text-body-md text-on-surface-variant italic border-l-2 border-outline-variant/30 pl-6 py-2">
                "Chaque coup de pinceau est un souffle, chaque couleur est une émotion capturée dans l'instant sacré de la contemplation."
            </p>
</div>
</section>
<!-- Featured Works (Implied Contextual Grid) -->
<section class="bg-surface-container-low py-32">
<div class="max-w-[1440px] mx-auto px-4 md:px-16">
<div class="flex justify-between items-end mb-16 border-b border-outline-variant/30 pb-8">
<div>
<h3 class="font-headline-md text-headline-md text-primary">SÉLECTIONS RÉCENTES</h3>
</div>
<a class="font-label-sm text-label-sm text-primary hover:opacity-70 transition-opacity flex items-center gap-2" href="#">
                    VOIR TOUT <span class="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
<!-- Work 1 -->
<div class="group cursor-pointer">
<div class="aspect-square overflow-hidden mb-6">
<img alt="Brume Marine" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A minimalist painting of a stormy coast, using charcoal greys and deep oceanic blues. The composition is stark and atmospheric, with heavy textures suggesting the spray of the sea against jagged cliffs. The lighting is moody and dramatic, captured in a clean light-mode frame for a luxury art website." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1g5inpVw8coFHVkVuwvQo1bTf8Ccp3CgvDp0TEgr6u3eXt9-UzhiVgRApXYe7U_ULjUQE1cn2B4TenL011dExSiEIUxfIUPdXjK46w0CfrnbxIxxTnjglNrYLuaB9ArTTEfbBqLGKYV1BmBKwg7_QHDGLiodRKMCE6oSZPHkiteVicId1hgA--oCYkoHu25GvC00umUVvjs1ur2nRLRbKeuvGtsl3VSs2gqurBBsMATmq-zPwh4C1L7pYvwawEg7tfvefHGHU6N8"/>
</div>
<h4 class="font-headline-md text-primary">Brume Marine</h4>
<p class="font-label-sm text-on-surface-variant mt-2 uppercase tracking-widest">Huile sur Toile — 120 x 120 cm</p>
</div>
<!-- Work 2 -->
<div class="group cursor-pointer mt-12 md:mt-0">
<div class="aspect-square overflow-hidden mb-6">
<img alt="Sous-bois Doré" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="An abstract landscape painting representing a sunlit forest floor in autumn. The palette is rich with ochre, burnt sienna, and golden highlights, painted with broad, energetic strokes. The mood is warm and inviting, evoking the scent of damp earth and crisp leaves in a modern, minimal art gallery setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfotOv0_GxxLoZsOolT7hPRgUFrI0PvMK32zFVbCzh-PpCVtybtQwUdh2hacOr4iPj32qU5KXXkJlzgTi-GzIK5J2OCWzCn7174flMejFBZlV_LUCoHEFP5e1rfBpGSe8HCqpww1FtURsBpo_d0hYf-CA5r_Ipo1oUnhELql7U-jOQi6Sm4wjP0oiAjbia0-FjMGDttiRZa23zQFSMRJ1cHxHDc838higOAL8UJMYzyeKnCWf9Pn9BdMZMkK8HXKTuf3eZo5uUm_Q"/>
</div>
<h4 class="font-headline-md text-primary">Sous-bois Doré</h4>
<p class="font-label-sm text-on-surface-variant mt-2 uppercase tracking-widest">Pigments Naturels — 100 x 140 cm</p>
</div>
<!-- Work 3 -->
<div class="group cursor-pointer mt-12 lg:mt-0">
<div class="aspect-square overflow-hidden mb-6">
<img alt="Silence d'Hiver" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A serene landscape painting of a frozen lake under a pale winter sky. Soft lavenders, cool whites, and icy blues dominate the scene, creating a sense of crystalline stillness and silence. The aesthetic is clean, sophisticated, and focused on the delicate nuances of natural light and texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARBVjYNw2yE3lYfPrenep2SM-ePgmRVJs8T_-6pz6rJUYSGRA1eaWObZD9P5MOjUFvFMeac1Oun9TEDrm8kz9qfoAHKk606_DyXx4tdafa_zmh2xpmkSvxAp13Kh2yKqsco-aOWJJEnvAM6Bk4i6aEhay2RDuB49NW1HqbnxLH3ujsalnArrqH06lsQ7RiYRqKxVm_PzdjyCzqZPDDNV01Qs3nq4R8DWwWpXcYdg2jH3wFVj7zZ44cUQhUXa1c9oYe5S4olAiANnk"/>
</div>
<h4 class="font-headline-md text-primary">Silence d'Hiver</h4>
<p class="font-label-sm text-on-surface-variant mt-2 uppercase tracking-widest">Technique Mixte — 90 x 90 cm</p>
</div>
</div>
</div>
</section>
<!-- Newsletter Section -->
<section class="py-32 bg-surface text-center px-4">
<div class="max-w-2xl mx-auto">
<h3 class="font-headline-lg text-headline-lg text-primary mb-6 italic">Rejoignez le voyage</h3>
<p class="font-body-md text-body-md text-on-surface-variant mb-12">
                Recevez en avant-première les nouvelles collections et des invitations exclusives aux vernissages privés.
            </p>
<form class="flex flex-col md:flex-row gap-4 items-end">
<div class="flex-1 w-full text-left">
<label class="font-label-sm text-label-sm text-outline uppercase mb-2 block" for="email">ADRESSE E-MAIL</label>
<input class="w-full bg-transparent border-b border-outline-variant/50 border-t-0 border-x-0 focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-primary placeholder:text-outline-variant/30" id="email" placeholder="votre@email.com" type="email"/>
</div>
<button class="w-full md:w-auto bg-primary-container text-on-primary font-label-sm text-label-sm py-4 px-12 tracking-widest hover:opacity-90 transition-opacity" type="submit">
                    S'INSCRIRE
                </button>
</form>
</div>
</section>
<!-- Footer -->
<footer class="w-full py-12 px-4 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4 text-center mt-32 border-t border-outline-variant/30">
<div class="font-headline-md text-headline-md text-primary tracking-widest">ÉLÉONORE DUBOIS</div>
<p class="font-label-sm text-label-sm tracking-widest text-on-surface-variant">© 2024 ÉLÉONORE DUBOIS — PEINTURES NATURELLES</p>
<div class="flex gap-8">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">INSTAGRAM</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors duration-300" href="#">MENTIONS LÉGALES</a>
</div>
</footer>
</body></html>