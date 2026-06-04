<!DOCTYPE html>

<html class="light" lang="fr"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>L'Atelier Paysage - Administration</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&amp;family=Noto+Serif:ital,wght@0,400;1,400&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "surface": "#f9f9f9",
                    "on-tertiary": "#ffffff",
                    "tertiary": "#1c1c1b",
                    "surface-variant": "#e2e2e2",
                    "on-error": "#ffffff",
                    "on-primary": "#ffffff",
                    "tertiary-fixed": "#e4e2e0",
                    "on-background": "#1a1c1c",
                    "surface-container-highest": "#e2e2e2",
                    "secondary": "#6b5777",
                    "primary-fixed-dim": "#cbc6bf",
                    "error-container": "#ffdad6",
                    "surface-bright": "#f9f9f9",
                    "primary-container": "#33312c",
                    "primary-fixed": "#e7e2da",
                    "on-secondary-container": "#6f5b7b",
                    "error": "#ba1a1a",
                    "on-tertiary-fixed": "#1b1c1b",
                    "surface-container": "#eeeeee",
                    "tertiary-fixed-dim": "#c8c6c4",
                    "inverse-primary": "#cbc6bf",
                    "primary": "#1e1c18",
                    "on-surface-variant": "#49473f",
                    "on-error-container": "#93000a",
                    "inverse-surface": "#2f3131",
                    "tertiary-container": "#313130",
                    "surface-dim": "#dadada",
                    "on-secondary-fixed": "#251530",
                    "inverse-on-surface": "#f1f1f1",
                    "secondary-fixed": "#f3daff",
                    "on-secondary-fixed-variant": "#52405e",
                    "surface-container-lowest": "#ffffff",
                    "on-primary-container": "#9d9992",
                    "secondary-fixed-dim": "#d6bee3",
                    "background": "#f9f9f9",
                    "secondary-container": "#f0d7fd",
                    "surface-container-high": "#e8e8e8",
                    "on-tertiary-container": "#9a9997",
                    "on-tertiary-fixed-variant": "#474745",
                    "on-secondary": "#ffffff",
                    "outline": "#7a776e",
                    "surface-container-low": "#f3f3f3",
                    "on-primary-fixed": "#1d1b17",
                    "surface-tint": "#615e58",
                    "outline-variant": "#cbc6bc",
                    "on-surface": "#1a1c1c",
                    "on-primary-fixed-variant": "#494641"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "spacing": {
                    "margin-edge": "4rem",
                    "container-max": "1440px",
                    "section-gap": "8rem",
                    "grid-gutter": "2rem"
            },
            "fontFamily": {
                    "label-sm": ["Manrope", "sans-serif"],
                    "headline-lg": ["Noto Serif", "serif"],
                    "headline-display": ["Noto Serif", "serif"],
                    "headline-md": ["Noto Serif", "serif"],
                    "body-md": ["Manrope", "sans-serif"],
                    "body-lg": ["Manrope", "sans-serif"]
            },
            "fontSize": {
                    "label-sm": ["0.75rem", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
                    "headline-lg": ["2.25rem", { "lineHeight": "1.2", "fontWeight": "400" }],
                    "headline-display": ["3.5rem", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400" }],
                    "headline-md": ["1.5rem", { "lineHeight": "1.3", "fontWeight": "400" }],
                    "body-md": ["1rem", { "lineHeight": "1.6", "fontWeight": "400" }],
                    "body-lg": ["1.125rem", { "lineHeight": "1.7", "fontWeight": "400" }]
            }
          },
        },
      }
    </script>
<style>
        body { font-family: 'Manrope', sans-serif; }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom smooth transition for hover states */
        .hover-lift {
            transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .hover-lift:hover {
            transform: translateY(-2px);
        }
    </style>
</head>
<body class="bg-surface text-on-surface">
<!-- Side Navigation Bar -->
<aside class="h-screen w-64 fixed left-0 top-0 flex flex-col py-8 px-6 bg-surface border-r border-outline-variant/30 z-50">
<div class="mb-12">
<h1 class="font-headline-md text-headline-md text-primary">L'Atelier Admin</h1>
<p class="font-body-md text-body-md text-on-surface-variant opacity-70">Curator Access</p>
</div>
<nav class="flex-grow space-y-4">
<a class="flex items-center gap-3 py-2 text-primary font-bold border-r-2 border-primary transition-colors duration-200" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="font-body-md text-body-md">Dashboard</span>
</a>
<a class="flex items-center gap-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
<span class="material-symbols-outlined">palette</span>
<span class="font-body-md text-body-md">Gallery</span>
</a>
<a class="flex items-center gap-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
<span class="material-symbols-outlined">mail</span>
<span class="font-body-md text-body-md">Inquiries</span>
</a>
<a class="flex items-center gap-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
<span class="material-symbols-outlined">event</span>
<span class="font-body-md text-body-md">Exhibitions</span>
</a>
<a class="flex items-center gap-3 py-2 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="font-body-md text-body-md">Settings</span>
</a>
</nav>
<div class="mt-auto pt-8 border-t border-outline-variant/20">
<div class="flex items-center gap-3 mb-6">
<div class="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center overflow-hidden">
<img alt="Admin Profile" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtkOxUlW88Bejs2TlMDSjoFWoOQofR97hTxVAa8NUjYeNnLjoG8t0ECtc6EmkvQk-gVbwi8XnOtVdj5hC0h5UzJjo9aJumSxybvuWEyBWUct9c2rs1zHVfJGop-kQRkLrK60L-S2NSOXHnYr89GSd3JUot148ulungAk6RX0Ue2c2zFQrWw9MfG3oXP3YUBU72l-3TeAkQlCvrabqODA3KgY-p-EJMgb93bQeByBchmFFqznjxiEgRpRl4"/>
</div>
<div>
<p class="text-xs font-bold uppercase tracking-wider">Curator</p>
<p class="text-xs text-on-surface-variant">L'Atelier Admin</p>
</div>
</div>
<button class="w-full py-3 px-4 border border-outline text-label-sm font-label-sm uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Site
            </button>
</div>
</aside>
<!-- Top App Bar -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface/80 backdrop-blur-md flex justify-between items-center h-20 px-margin-edge border-b border-outline-variant/30">
<div class="flex items-center gap-4">
<span class="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Dashboard</span>
<span class="text-outline-variant">/</span>
<span class="font-label-sm text-label-sm uppercase tracking-widest text-primary">Gallery Management</span>
</div>
<div class="flex items-center gap-6">
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input class="pl-10 pr-4 py-1.5 border-b border-outline-variant bg-transparent text-label-sm focus:outline-none focus:border-primary transition-colors" placeholder="RECHERCHER..." type="text"/>
</div>
<div class="flex items-center gap-4">
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">notifications</span>
<span class="material-symbols-outlined cursor-pointer hover:text-primary transition-colors">account_circle</span>
</div>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 pt-20 min-h-screen flex flex-col">
<div class="px-margin-edge py-12 max-w-container-max mx-auto w-full">
<!-- Header Section -->
<section class="flex justify-between items-end mb-16">
<div>
<h2 class="font-headline-display text-headline-display text-primary mb-2">Gestion des Œuvres</h2>
<p class="font-body-lg text-body-lg text-on-surface-variant italic opacity-80">Inventaire complet des peintures de L'Atelier Paysage.</p>
</div>
<button class="bg-primary-container text-on-primary-fixed py-4 px-8 flex items-center gap-3 hover:bg-primary transition-all duration-300 cursor-pointer group">
<span class="material-symbols-outlined text-xl">add</span>
<span class="font-label-sm text-label-sm uppercase tracking-[0.2em]">Ajouter un nouveau tableau</span>
</button>
</section>
<!-- Table List -->
<section class="bg-surface-container-lowest overflow-hidden">
        <div class="w-full border-b border-outline-variant/30 py-4 grid grid-cols-12 gap-4 px-6 text-label-sm font-label-sm uppercase text-on-surface-variant tracking-widest">
        <div class="col-span-1">Visuel</div>
        <div class="col-span-5">Titre de l'œuvre</div>
        <div class="col-span-3">Date d'ajout</div>
        <div class="col-span-2">Statut</div>
        <div class="col-span-1 text-right">Actions</div>
        </div>
        <!-- Row 1 -->
        <div class="group grid grid-cols-12 gap-4 px-6 py-8 items-center border-b border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
        <div class="col-span-1">
        <div class="aspect-square w-16 bg-surface-variant overflow-hidden">
        <img alt="Brumes Matinales sur le Pic" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A detailed oil painting showing misty peaks of a mountain range at dawn. The canvas features soft gradients of charcoal gray, muted terracotta, and ochre, with a visible, expressive brushstroke texture. The overall mood is ethereal and serene, captured in a bright gallery setting with natural lighting." src="https://lh3.googleusercontent.com/aida/AP1WRLtkOxUlW88Bejs2TlMDSjoFWoOQofR97hTxVAa8NUjYeNnLjoG8t0ECtc6EmkvQk-gVbwi8XnOtVdj5hC0h5UzJjo9aJumSxybvuWEyBWUct9c2rs1zHVfJGop-kQRkLrK60L-S2NSOXHnYr89GSd3JUot148ulungAk6RX0Ue2c2zFQrWw9MfG3oXP3YUBU72l-3TeAkQlCvrabqODA3KgY-p-EJMgb93bQeByBchmFFqznjxiEgRpRl4"/>
        </div>
        </div>
        <div class="col-span-5">
        <h3 class="font-headline-md text-headline-md text-primary">Brumes Matinales sur le Pic</h3>
        <p class="text-xs text-on-surface-variant font-label-sm uppercase mt-1">Huile sur toile • 120 x 80 cm</p>
        </div>
        <div class="col-span-3 font-body-md text-on-surface-variant">
                                14 Mai 2024
                        </div>
        <div class="col-span-2">
        <span class="px-3 py-1 bg-primary-fixed text-[10px] font-bold uppercase tracking-widest text-primary">Disponible</span>
        </div>
        <div class="col-span-1 text-right">
        <button class="text-on-surface-variant hover:text-error transition-colors p-2" title="Supprimer">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </div>
        <!-- Row 2 -->
        <div class="group grid grid-cols-12 gap-4 px-6 py-8 items-center border-b border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
        <div class="col-span-1">
        <div class="aspect-square w-16 bg-surface-variant overflow-hidden">
        <img alt="L'Étude des Pigments" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close up photograph of natural raw pigments in earthy tones including burnt sienna and deep forest green. Several fine-bristled brushes rest on a palette. The lighting is soft and editorial, creating a professional and minimalist atmosphere typical of a high-end art studio." src="https://lh3.googleusercontent.com/aida/AP1WRLsy69Y68Evzb8X0Ne_omF8eKAMSjRiH3dJXfZTxnrJ_L8Y10sd5GsYcB48-3Hwt0voDE-nemiN1zZEI5hyXQQMp8bSnlxcGKKTk3MuuOOyLteaNQZnGP_0arVF4Im6U7kEuIbbkVSRPmuw2YI4l5xBfB5abpJnbINnnZRavtv4wC-jlXB1lZ5-BLNhrDRTquHAhaYrnjLNggQ-lSupxy-rFqRbQgDSpvxIDNBu0IfSmxRelVQQCx2ETOw"/>
        </div>
        </div>
        <div class="col-span-5">
        <h3 class="font-headline-md text-headline-md text-primary">L'Étude des Pigments</h3>
        <p class="text-xs text-on-surface-variant font-label-sm uppercase mt-1">Acrylique et Pigments • 60 x 60 cm</p>
        </div>
        <div class="col-span-3 font-body-md text-on-surface-variant">
                                28 Avril 2024
                        </div>
        <div class="col-span-2">
        <span class="px-3 py-1 border border-outline-variant text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Réservé</span>
        </div>
        <div class="col-span-1 text-right">
        <button class="text-on-surface-variant hover:text-error transition-colors p-2" title="Supprimer">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </div>
        <!-- Row 3 -->
        <div class="group grid grid-cols-12 gap-4 px-6 py-8 items-center border-b border-outline-variant/10 hover:bg-surface-container transition-colors duration-300">
        <div class="col-span-1">
        <div class="aspect-square w-16 bg-surface-variant overflow-hidden">
        <img alt="Silence Sylvestre" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A minimalist composition showing artist tools on a wooden desk. Natural bristle brushes in a white ceramic vase sit next to a sketch of a forest landscape on textured paper. The scene is illuminated by soft morning sunlight, creating long, peaceful shadows on the clean surface." src="https://lh3.googleusercontent.com/aida/AP1WRLsd5jOqMYIVet3f7k_QLewjTyqPrIevvLCKEIQur-EuN8wIor0lC2KeoXlYmFbik9GO_rB22uL6SHXc6sAU3gEExoGoGZfA-TOoTf44Lbqb1B5LRWDSrGjffs0IvmEnDMTitIalQai1JPhrfqZjjfmoGN0DdaIl93KsMnwlbm6ZGQNcZXG-6xdO-xeRcxzCyiGWWXkeFLLJKgLdI2IICaR4NOg8lSL0moRNlbnQnNr6ZTcdnvRjTMls0-k"/>
        </div>
        </div>
        <div class="col-span-5">
        <h3 class="font-headline-md text-headline-md text-primary">Silence Sylvestre</h3>
        <p class="text-xs text-on-surface-variant font-label-sm uppercase mt-1">Fusain et Gouache • 150 x 100 cm</p>
        </div>
        <div class="col-span-3 font-body-md text-on-surface-variant">
                                12 Avril 2024
                        </div>
        <div class="col-span-2">
        <span class="px-3 py-1 bg-primary-fixed text-[10px] font-bold uppercase tracking-widest text-primary">Disponible</span>
        </div>
        <div class="col-span-1 text-right">
        <button class="text-on-surface-variant hover:text-error transition-colors p-2" title="Supprimer">
        <span class="material-symbols-outlined text-xl">delete</span>
        </button>
        </div>
        </div>
</section>
<!-- Pagination/Footer Actions -->
<div class="mt-12 flex justify-center items-center gap-8">
<button class="flex items-center gap-2 text-label-sm font-label-sm uppercase opacity-40 cursor-default">
<span class="material-symbols-outlined">chevron_left</span>
                    Précédent
                </button>
<div class="flex gap-4">
<span class="text-label-sm font-label-sm uppercase text-primary border-b border-primary py-1">01</span>
<span class="text-label-sm font-label-sm uppercase text-on-surface-variant hover:text-primary cursor-pointer transition-colors py-1">02</span>
<span class="text-label-sm font-label-sm uppercase text-on-surface-variant hover:text-primary cursor-pointer transition-colors py-1">03</span>
</div>
<button class="flex items-center gap-2 text-label-sm font-label-sm uppercase text-primary hover:opacity-70 transition-opacity">
                    Suivant
                    <span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<!-- Footer -->
<footer class="w-full bg-surface-container-low mt-auto flex justify-between items-center py-6 px-margin-edge border-t border-outline-variant/20">
<div class="flex items-center gap-8">
<span class="font-label-sm text-label-sm text-primary uppercase tracking-widest">© 2024 L'Atelier Paysage. All rights reserved.</span>
<div class="flex gap-6">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">Support</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase" href="#">System Status</a>
</div>
</div>
<div class="flex items-center gap-2 text-on-surface-variant opacity-50">
<span class="material-symbols-outlined text-sm">bolt</span>
<span class="font-label-sm text-[10px] uppercase tracking-tighter">System Version 4.2.0</span>
</div>
</footer>
</main>
<script>
        // Simple interaction for the delete buttons
        document.querySelectorAll('button[title="Supprimer"]').forEach(button => {
            button.addEventListener('click', function(e) {
                const row = this.closest('.grid');
                if (confirm('Êtes-vous sûr de vouloir supprimer cette œuvre de l\'inventaire ?')) {
                    row.style.opacity = '0';
                    row.style.transform = 'translateX(20px)';
                    row.style.transition = 'all 0.5s ease';
                    setTimeout(() => {
                        row.remove();
                    }, 500);
                }
            });
        });

        // Search bar animation focus
        const searchInput = document.querySelector('input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.parentElement.classList.add('text-primary');
        });
        searchInput.addEventListener('blur', () => {
            searchInput.parentElement.classList.remove('text-primary');
        });
    </script>
</body></html>