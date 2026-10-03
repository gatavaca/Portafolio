tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    bg: '#090e1a',      /* Fondo azul medianoche profundo / obsidiana índigo */
                    card: '#10172a',    /* Tarjetas azul medianoche / slate oscuro pulido */
                    surface: '#19233c', /* Superficies interactivas y botones secundarios */
                    border: '#263554'   /* Bordes índigo medianoche sutiles */
                },
                brand: {
                    light: '#818cf8',   /* Índigo eléctrico luminoso (indigo-400) */
                    DEFAULT: '#6366f1', /* Índigo eléctrico puro y sobrio (indigo-500) */
                    dark: '#4338ca',    /* Índigo profundo (indigo-700) */
                    coral: '#fb7185',   /* Coral atardecer cálido y vibrante (rose-400) */
                    coralDark: '#f43f5e', /* Coral intenso (rose-500) */
                    neon: '#fecdd3'     /* Coral pastel suave para reflejos y texto secundario */
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
};
