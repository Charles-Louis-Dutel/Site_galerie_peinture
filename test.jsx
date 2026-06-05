<!DOCTYPE html><html class="light" lang="fr"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>L'Atelier Admin - Ajouter une œuvre</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&amp;family=Manrope:wght@400;500;600&amp;family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@100..900&amp;family=Noto+Serif:wght@100..900&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "tertiary-fixed-dim": "#c8c6c4",
                        "on-surface-variant": "#49473f",
                        "surface-variant": "#e2e2e2",
                        "primary-container": "#33312c",
                        "surface-container-high": "#e8e8e8",
                        "on-error-container": "#93000a",
                        "outline-variant": "#cbc6bc",
                        "on-tertiary-fixed": "#1b1c1b",
                        "on-tertiary-container": "#9a9997",
                        "surface-bright": "#f9f9f9",
                        "on-primary-container": "#9d9992",
                        "surface-container": "#eeeeee",
                        "tertiary-container": "#313130",
                        "on-primary": "#ffffff",
                        "inverse-surface": "#2f3131",
                        "surface-dim": "#dadada",
                        "on-surface": "#1a1c1c",
                        "surface-tint": "#615e58",
                        "surface-container-low": "#f3f3f3",
                        "primary-fixed": "#e7e2da",
                        "on-secondary": "#ffffff",
                        "tertiary-fixed": "#e4e2e0",
                        "inverse-on-surface": "#f1f1f1",
                        "on-background": "#1a1c1c",
                        "error": "#ba1a1a",
                        "secondary": "#6b5777",
                        "inverse-primary": "#cbc6bf",
                        "primary": "#1e1c18",
                        "on-secondary-container": "#6f5b7b",
                        "surface": "#f9f9f9",
                        "secondary-fixed": "#f3daff",
                        "on-error": "#ffffff",
                        "background": "#f9f9f9",
                        "secondary-container": "#f0d7fd",
                        "on-primary-fixed-variant": "#494641",
                        "primary-fixed-dim": "#cbc6bf",
                        "tertiary": "#1c1c1b",
                        "secondary-fixed-dim": "#d6bee3",
                        "on-secondary-fixed-variant": "#52405e",
                        "error-container": "#ffdad6",
                        "surface-container-highest": "#e2e2e2",
                        "on-primary-fixed": "#1d1b17",
                        "surface-container-lowest": "#ffffff",
                        "on-tertiary": "#ffffff",
                        "outline": "#7a776e",
                        "on-secondary-fixed": "#251530",
                        "on-tertiary-fixed-variant": "#474745"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "section-gap": "8rem",
                        "margin-edge": "4rem",
                        "grid-gutter": "2rem",
                        "container-max": "1440px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Noto Serif"],
                        "label-sm": ["Manrope"],
                        "body-lg": ["Manrope"],
                        "headline-display": ["Noto Serif"],
                        "body-md": ["Manrope"],
                        "headline-md": ["Noto Serif"]
                    },
                    "fontSize": {
                        "headline-lg": ["2.25rem", { "lineHeight": "1.2", "fontWeight": "400" }],
                        "label-sm": ["0.75rem", { "lineHeight": "1.2", "letterSpacing": "0.1em", "fontWeight": "600" }],
                        "body-lg": ["1.125rem", { "lineHeight": "1.7", "fontWeight": "400" }],
                        "headline-display": ["3.5rem", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "400" }],
                        "body-md": ["1rem", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "headline-md": ["1.5rem", { "lineHeight": "1.3", "fontWeight": "400" }]
                    }
                },
            },
        }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        input:focus, textarea:focus, select:focus {
            outline: none !important;
            border-color: #1e1c18 !important;
            box-shadow: none !important;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #cbc6bc;
        }
    </style>
</head>
<body class="bg-background text-on-surface font-body-md custom-scrollbar overflow-x-hidden">
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant/30 bg-surface flex flex-col py-8 px-6 z-50">
<div class="mb-12">
<h1 class="font-headline-md text-headline-md text-primary">L'Atelier Admin</h1>
<p class="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Curator Access</p>
</div>
<nav class="flex-grow space-y-4">
<div class="flex items-center gap-4 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70 group">
<span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span class="font-body-md">Dashboard</span>
</div>
<div class="flex items-center gap-4 text-primary font-bold border-r-2 border-primary py-1 cursor-pointer active:opacity-70">
<span class="material-symbols-outlined" data-icon="palette">palette</span>
<span class="font-body-md">Gallery</span>
</div>
<div class="flex items-center gap-4 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70 group">
<span class="material-symbols-outlined" data-icon="mail">mail</span>
<span class="font-body-md">Inquiries</span>
</div>
<div class="flex items-center gap-4 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70 group">
<span class="material-symbols-outlined" data-icon="event">event</span>
<span class="font-body-md">Exhibitions</span>
</div>
<div class="flex items-center gap-4 text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70 group">
<span class="material-symbols-outlined" data-icon="settings">settings</span>
<span class="font-body-md">Settings</span>
</div>
</nav>
<div class="mt-auto pt-8 border-t border-outline-variant/20">
<button class="w-full text-left py-2 px-4 border border-primary text-primary font-label-sm text-label-sm uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">
                View Site
            </button>
</div>
</aside>
<!-- TopAppBar -->
<header class="fixed top-0 right-0 w-[calc(100%-16rem)] z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 flex justify-between items-center h-20 px-margin-edge">
<div>
<span class="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-widest">Gallery Management</span>
</div>
<div class="flex items-center gap-8">
<div class="flex items-center gap-6">
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-primary hover:text-on-primary p-2 transition-all duration-300 rounded-full" data-icon="notifications">notifications</span>
<span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:bg-primary hover:text-on-primary p-2 transition-all duration-300 rounded-full" data-icon="account_circle">account_circle</span>
</div>
<button class="bg-primary text-on-primary font-label-sm text-label-sm uppercase py-3 px-6 active:scale-95 transition-all">
                Add New Painting
            </button>
</div>
</header>
<!-- Main Content Canvas -->
<main class="ml-64 pt-20 min-h-screen">
<div class="max-w-[1000px] mx-auto py-16 px-margin-edge">
<header class="mb-12">
<h2 class="font-headline-lg text-headline-lg text-primary">Ajouter une nouvelle œuvre</h2>
<div class="h-px w-24 bg-primary mt-4"></div>
</header>
<form class="space-y-12 pb-24">
<!-- Image Upload Section -->
<section class="grid grid-cols-1 md:grid-cols-2 gap-grid-gutter items-start">
    <div class="space-y-4">
        <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block">Sélectionner une image</label>
        <div class="aspect-[4/5] bg-surface-container-low border border-dashed border-outline-variant flex flex-col items-center justify-center cursor-pointer hover:bg-surface-container-high transition-colors group relative overflow-hidden">
            <img class="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" data-alt="A close-up of a blank wooden gallery frame hanging on a pristine, softly lit off-white wall. The lighting is ethereal and diffuse, highlighting the subtle textures of the wall and the fine wood grain of the frame. The overall atmosphere is serene, minimalist, and high-end, evoking the quiet contemplation of a contemporary Parisian art studio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQeYbNEEz7mvnnv02ycv4MdXg5QDlyquX47fy1JTf79KWOPKWHkc1yc9x7tg6ajpb4QKgUxXYvmNlE-LT7a-SbmY6npqRwDGeQT7OWWqmlDTxyaGLLGHsCmEvclxgRC6AeQdGqkHEiDDaXuTvZHPMxiznqJPozC9xRgJi6WQckhHN9TZ3BFdqQiQiMedWT4Bf0AnnycooDT6ToEEe0ClEPedKMeKlhi_rFDCniA5mF3vKwVgkQDVBzl6CYaYojtxrd5hDKDtHeDJE">
            <span class="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-hover:scale-110 transition-transform" data-icon="add_photo_alternate">add_photo_alternate</span>
            <p class="font-body-md text-on-surface-variant text-center px-8">Cliquez ou glissez une image ici</p>
        </div>
    </div>
    
    <div class="space-y-8">
    <!-- Basic Info -->
    <div class="space-y-2">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block" for="title">Titre du tableau</label>
    <input class="w-full bg-transparent border-0 border-b border-outline-variant py-3 font-headline-md text-headline-md placeholder:text-outline-variant focus:border-primary transition-all" id="title" placeholder="L'éveil du matin" type="text">
    </div>
    <div class="space-y-2">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block" for="type">Type de peinture</label>
    <input class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md placeholder:text-outline-variant focus:border-primary transition-all" id="type" placeholder="Huile sur toile" type="text">
    </div>
    <div class="grid grid-cols-2 gap-4">
    <div class="space-y-2">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block" for="year">Année de création</label>
    <input class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md placeholder:text-outline-variant focus:border-primary transition-all" id="year" placeholder="2024" type="text">
    </div>
    <div class="space-y-2">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block" for="orientation">Orientation</label>
    <select class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md focus:border-primary transition-all appearance-none cursor-pointer" id="orientation">
    <option>Carré</option>
    <option selected="">Paysage</option>
    <option>Portrait</option>
    </select>
    </div>
    </div>
    </div>
</section>
<!-- Detailed Section -->
<section class="space-y-8 pt-8 border-t border-outline-variant/20">
    <div class="space-y-2">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block" for="description">Description</label>
    <textarea class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md placeholder:text-outline-variant focus:border-primary transition-all resize-none" id="description" placeholder="Décrivez l'émotion et la technique de cette œuvre..." rows="4"></textarea>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
    <div class="space-y-4">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block">Dimensions (cm)</label>
    <div class="flex items-center gap-4">
    <div class="flex-1">
    <input class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md placeholder:text-outline-variant focus:border-primary transition-all" id="height" placeholder="Hauteur" type="number">
    </div>
    <span class="text-on-surface-variant">×</span>
    <div class="flex-1">
    <input class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md placeholder:text-outline-variant focus:border-primary transition-all" id="width" placeholder="Largeur" type="number">
    </div>
    </div>
    </div>
    <div class="space-y-2">
    <label class="font-label-sm text-label-sm uppercase text-on-surface-variant block" for="alt">Texte alternatif (Alt)</label>
    <input class="w-full bg-transparent border-0 border-b border-outline-variant py-2 font-body-md placeholder:text-outline-variant focus:border-primary transition-all" id="alt" placeholder="Description pour l'accessibilité" type="text">
    </div>
    </div>
    <!-- Features -->
    <div class="flex items-center gap-4 pt-4">
    <label class="relative inline-flex items-center cursor-pointer">
    <input class="sr-only peer" type="checkbox" value="">
    <div class="w-11 h-6 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
    <span class="ml-3 font-label-sm text-label-sm uppercase text-on-surface-variant">Mise en avant sur la page d'accueil</span>
    </label>
    </div>
</section>
<!-- Actions -->
<footer class="flex items-center justify-end gap-6 pt-12">
<button class="font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-primary transition-colors py-2 px-6" type="button">
                        Annuler
                    </button>
<button class="bg-primary text-on-primary font-label-sm text-label-sm uppercase py-4 px-12 transition-all hover:bg-primary/90 active:scale-95 shadow-sm" type="submit">
                        Enregistrer l'œuvre
                    </button>
</footer>
</form>
</div>
<!-- Footer -->
<footer class="w-full border-t border-outline-variant/20 bg-surface-container-low flex justify-between items-center py-6 px-margin-edge mt-auto">
<div>
<span class="font-label-sm text-label-sm text-on-surface-variant">© 2024 L'Atelier Paysage. All rights reserved.</span>
</div>
<div class="flex gap-8">
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Support</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">System Status</a>
</div>
</footer>
</main>
<script>
        // Micro-interaction for the file upload area
        const dropZone = document.querySelector('.aspect-\\[4\\/5\\]');
        dropZone.addEventListener('mouseenter', () => {
            dropZone.style.borderColor = '#1e1c18';
        });
        dropZone.addEventListener('mouseleave', () => {
            dropZone.style.borderColor = '';
        });

        // Simple form handling logic
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            btn.innerHTML = 'Traitement...';
            btn.disabled = true;
            setTimeout(() => {
                btn.innerHTML = 'Enregistré';
                btn.classList.replace('bg-primary', 'bg-secondary');
            }, 1500);
        });
    </script>
</body></html>