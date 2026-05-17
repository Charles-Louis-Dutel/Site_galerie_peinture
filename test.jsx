<!DOCTYPE html><html class="light" lang="fr"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&amp;family=Manrope:wght@400;600&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
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
                    "body-lg": ["Manrope"],
                    "body-md": ["Manrope"],
                    "headline-display": ["Noto Serif"],
                    "headline-md": ["Noto Serif"],
                    "label-sm": ["Manrope"],
                    "headline-lg": ["Noto Serif"],
                    "notoSerif": ["Noto Serif"],
                    "manrope": ["Manrope"]
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
<body class="font-body-md text-on-surface selection:bg-primary-fixed-dim selection:text-primary">
<!-- TopNavBar -->
<nav class="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-edge py-6 bg-surface/90 backdrop-blur-sm border-b border-outline-variant/30">
<div class="font-headline-md text-headline-md tracking-widest text-primary font-notoSerif uppercase">
            ÉLÉONORE DUBOIS
        </div>
<div class="hidden md:flex gap-12">
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase" href="#">GALERIE</a>
<a class="font-label-sm text-label-sm tracking-widest text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase" href="#">À PROPOS</a>
<a class="font-label-sm text-label-sm tracking-widest text-primary border-b border-primary pb-1 cursor-pointer uppercase" href="#">CONTACT</a>
</div>
<div class="flex items-center gap-6">
<span class="material-symbols-outlined text-primary cursor-pointer transition-opacity duration-300 hover:opacity-70" data-icon="shopping_bag">shopping_bag</span>
<span class="md:hidden material-symbols-outlined text-primary cursor-pointer" data-icon="menu">menu</span>
</div>
</nav>
<main class="pt-32 pb-section-gap px-margin-edge max-w-container-max mx-auto">
<div class="grid grid-cols-1 md:grid-cols-12 gap-grid-gutter">
<!-- Left Column: Context & Imagery -->
<div class="md:col-span-5 flex flex-col justify-center">
<header class="mb-12">
<h1 class="font-headline-display text-headline-display text-primary mb-6">Contact</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                        Partagez vos impressions sur mes dernières peintures naturelles ou posez vos questions sur les expositions à venir. Je serais ravie de vous lire et de vous répondre.
                    </p>
</header>
<div class="aspect-[4/5] w-full overflow-hidden mb-8">
<img alt="High-quality editorial photography of professional artist's tools." class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" data-alt="A serene and minimalist artist studio scene, featuring a clean wooden table with natural pigments, brushes, and a linen canvas. The lighting is soft and diffused, coming from a large side window, creating a calm and contemplative atmosphere. The color palette is composed of organic earth tones, soft beiges, and deep charcoal shadows, perfectly reflecting an editorial fine art aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZZqLcw-84hqpPaQRShRVGz04pQ2cuMSkoKUpSpr3xD7UQiSi9wZ4Oz5mMwYkSpbusYzvIQGpf4TA7Jib4-8r4hJtCdqyw3T_mS3u05_qInS6-qB3E4XvnahBf-8U5yTa07ra9_DgYWFDLU253OfFovXtHnsshNYQoz5oKOFQ7R9i_Izfv0MZxrrolKFemPzt9lyroWAtd5SZNKcGkc8yp1ioJr1vLlutuzOadhXpmUZ9-I-5Ia6VlgYUiQ4SPoS8s9SiptQ-twZ4">
</div>
<div class="flex flex-col gap-4 font-label-sm text-label-sm tracking-widest uppercase text-on-surface-variant">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="location_on">location_on</span>
<span class="">Atelier — Lyon, France</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-sm" data-icon="mail">mail</span>
<span class="">contact@eleonoredubois.art</span>
</div>
</div>
</div>

<!-- Right Column: Form -->
<div class="md:col-span-6 md:col-start-7 flex flex-col justify-center">
        <div class="bg-surface-container-low p-8 md:p-12">
                <form class="flex flex-col gap-10">
                        <div class="relative">
                                <input 
                                    class="w-full bg-transparent border-t-0 border-x-0 border-b
                                    border-outline-variant/50 focus:border-primary focus:ring-0
                                    px-0 py-3 font-body-md text-on-surface
                                    placeholder:text-on-tertiary-container transition-all"
                                    id="name"
                                    name="name"
                                    placeholder="Nom"
                                    required=""
                                    type="text"
                                />
                        </div>

                        <div class="relative">
                                <input class="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-on-surface placeholder:text-on-tertiary-container transition-all" id="email" name="email" placeholder="Email" required="" type="email">
                        </div>

                        <div class="relative">
                                <input class="w-full bg-transparent border-t-0 border-x-0 border-b border-outline-variant/50 focus:border-primary focus:ring-0 px-0 py-3 font-body-md text-on-surface placeholder:text-on-tertiary-container transition-all" id="subject" name="subject" placeholder="Objet" type="text">
                        </div>

                        <div class="relative">
                                <textarea
                                    class="w-full bg-transparent border-t-0 border-x-0 border-b
                                        border-outline-variant/50 focus:border-primary
                                        focus:ring-0 px-0 py-3 font-body-md text-on-surface
                                        placeholder:text-on-tertiary-container transition-all
                                        resize-none"
                                    id="message"
                                    name="message"
                                    placeholder="Votre message ou vos impressions sur les tableaux..."
                                    required=""
                                    rows="5"
                                >
                                </textarea>
                        </div>

                        <div class="mt-4">
                                <button class="group flex items-center justify-between w-full md:w-auto md:min-w-[200px] bg-primary text-on-primary px-8 py-4 font-label-sm text-label-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300" type="submit">
                                        <span class="">Envoyer</span>
                                        <span class="material-symbols-outlined ml-4 transition-transform duration-300 group-hover:translate-x-1" data-icon="arrow_forward">arrow_forward</span>
                                </button>
                        </div>
                </form>

                <div class="mt-16 pt-8 border-t border-outline-variant/30">
                        <p class="font-body-md text-body-md italic text-on-surface-variant">
                            "Chaque œuvre est une conversation silencieuse entre la nature et celui qui la regarde. Vos réflexions sont précieuses."
                        </p>
                </div>
        </div>
</div>

</div>
</main>
<!-- Footer -->
<footer class="w-full py-12 px-margin-edge flex flex-col md:flex-row justify-between items-center gap-4 text-center mt-section-gap border-t border-outline-variant/30 bg-surface">
<div class="font-headline-md text-headline-md text-primary font-notoSerif uppercase">
            ÉLÉONORE DUBOIS
        </div>
<div class="font-label-sm text-label-sm tracking-widest text-on-surface-variant flex flex-wrap justify-center gap-6 md:gap-12">
<a class="hover:text-primary transition-colors duration-300 uppercase" href="#">MENTIONS LÉGALES</a>
<a class="hover:text-primary transition-colors duration-300 uppercase" href="#">POLITIQUE DE CONFIDENTIALITÉ</a>
<a class="hover:text-primary transition-colors duration-300 uppercase" href="#">INSTAGRAM</a>
<a class="hover:text-primary transition-colors duration-300 uppercase" href="#">NEWSLETTER</a>
</div>
<div class="font-label-sm text-label-sm tracking-widest text-on-surface-variant uppercase">
            © 2024 ÉLÉONORE DUBOIS — PEINTURES NATURELLES
        </div>
</footer>


</body></html>