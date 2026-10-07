const cvData = {
    es: {
        header: {
            role: "Cientista Político & Desarrolladora Front End",
            bio: "Profesional de la Pontificia Universidad Católica de Chile con postgrado en Políticas Públicas (USACH) y especialización en Desarrollo Web Front End. Más de 8 años de trayectoria articulando proyectos comunitarios, análisis de datos y soporte técnico en telecomunicaciones, aplicados a la creación de interfaces web modernas, reactivas y orientadas al usuario.",
            pdfBtn: "CV",
            pdfLink: "assets/CV_Camila_Hidalgo.pdf"
        },
        projects: [
            {
                name: "BookList SPA — Editorial Nova",
                icon: "fa-book-open",
                desc: "Single Page Application (SPA) para catálogo editorial con navegación fluida sin recargas y filtrado instantáneo en JS.",
                link: "https://gatavaca.github.io/Trabajo_modulo_6/"
            },
            {
                name: "TaskFlow — Gestor de Tareas",
                icon: "fa-list-check",
                desc: "Dashboard de productividad con métricas en tiempo real (totales, pendientes, completadas) y manipulación del DOM.",
                link: "https://gatavaca.github.io/Trabajo_modulo_5/"
            },
            {
                name: "Alke Wallet — Billetera Digital",
                icon: "fa-wallet",
                desc: "Simulador de billetera virtual y transacciones financieras con diseño responsivo pulido en Bootstrap 5.3.",
                link: "https://gatavaca.github.io/WalletDigital/"
            },
            {
                name: "SmartBudget — Finanzas Personales",
                icon: "fa-chart-pie",
                desc: "Landing page para solución SaaS de finanzas personales, maquetada con metodología BEM, Bootstrap 4.6 y SVG.",
                link: "https://gatavaca.github.io/Trabajo_modulo_3/"
            },
            {
                name: "Aplicación Interactiva en Consola",
                icon: "fa-terminal",
                desc: "Desarrollo algorítmico en JavaScript core: estructuras de control, funciones, validaciones y depuración en DevTools.",
                link: "https://gatavaca.github.io/Trabajo_modulo_4/",
                fullWidth: true
            }
        ],
        ecosystem: {
            title: "Repositorios en GitHub & Código Fuente",
            links: [
                { name: "Repo: BookList SPA", url: "https://github.com/gatavaca/Trabajo_modulo_6" },
                { name: "Repo: TaskFlow", url: "https://github.com/gatavaca/Trabajo_modulo_5" },
                { name: "Repo: Alke Wallet", url: "https://github.com/gatavaca/WalletDigital" },
                { name: "Repo: SmartBudget", url: "https://github.com/gatavaca/Trabajo_modulo_3" },
                { name: "Repo: Consola JS", url: "https://github.com/gatavaca/Trabajo_modulo_4" }
            ]
        },
        experience: {
            title: "Experiencia Profesional",
            items: [
                {
                    title: "Ejecutiva de Call Center, Fibra Óptica WOM",
                    date: "2021 – 2024",
                    subtitle: "Holdtech S.A. (WOM Hogar) — Modalidad Remoto",
                    isCurrent: true,
                    bullets: [
                        'Apoyo y <strong class="text-white">diagnóstico técnico especializado en servicio de fibra óptica</strong> residencial y conectividad.',
                        'Atención comercial en facturación, post-venta, requerimientos y gestión de reclamos complejos con altos estándares de satisfacción.',
                        'Coordinación, despacho y <strong class="text-white">agendamiento operativo de técnicos en terreno</strong> a nivel nacional.'
                    ]
                },
                {
                    title: "Asesora de Programas FOSIS (Yo Emprendo / Capital Semilla)",
                    date: "2016 – 2021",
                    subtitle: "Ciudad Proyectos y CS Asesores — Región Metropolitana",
                    isCurrent: false,
                    bullets: [
                        'Asesoría comercial personalizada y acompañamiento técnico a emprendedores de la Región Metropolitana.',
                        'Formulación estructurada de planes de trabajo e implementación del <strong class="text-white">modelo Canvas de negocios</strong>.',
                        'Presentación y validación de instrumentos ante FOSIS para la aprobación de compras y rendición formal de gastos.'
                    ]
                },
                {
                    title: "Monitora de Programa Municipal “Gestión Comunitaria Integral”",
                    date: "2019",
                    subtitle: "Ilustre Municipalidad de San Miguel — DIDECO",
                    isCurrent: false,
                    bullets: [
                        'Participación activa en el levantamiento y confección del <strong class="text-white">Plan de Desarrollo Comunal (PLADECO 2019)</strong>.',
                        'Comunicación y articulación directa con dirigentes de organizaciones sociales, juntas de vecinos y comités comunitarios.',
                        'Confección de material informativo institucional y actualización de bases de datos comunales.'
                    ]
                },
                {
                    title: "Ejecutora del Plan Comunal de Seguridad Pública",
                    date: "2015",
                    subtitle: "Ilustre Municipalidad de Lo Espejo",
                    isCurrent: false,
                    bullets: [
                        'Apoyo profesional en asambleas territoriales con vecinos de la comuna para diagnósticos de seguridad.',
                        'Revisión, auditoría y actualización sistemática de bases de datos del programa.',
                        'Gestión documental y apoyo administrativo municipal.'
                    ]
                },
                {
                    title: "Profesional de Apoyo en Oficina Territorial (Práctica Profesional)",
                    date: "2012",
                    subtitle: "Ministerio de Minería — Región Metropolitana",
                    isCurrent: false,
                    bullets: [
                        'Monitoreo y análisis diario de prensa referente a la minería y la gestión ministerial.',
                        'Elaboración de informes ejecutivos de coyuntura y soporte en bases de datos para la Oficina Territorial.'
                    ]
                }
            ]
        },
        stack: {
            title: "Habilidades & Destrezas",
            categories: [
                {
                    name: "Desarrollo Front End",
                    icon: "fa-code",
                    items: ["HTML5 Semántico", "CSS3 / Flexbox / Grid", "JavaScript (ES6+)", "Vue.js", "Bootstrap 4 & 5", "Metodología BEM", "Git & GitHub"]
                },
                {
                    name: "Arquitectura & Web",
                    icon: "fa-desktop",
                    items: ["Single Page Apps (SPA)", "Manipulación DOM", "Responsive Web Design", "GitHub Pages", "Consumo de APIs", "Vite"]
                },
                {
                    name: "Gestión, Datos & Políticas",
                    icon: "fa-chart-pie",
                    items: ["Modelo Canvas", "Formulación Proyectos FOSIS", "Elaboración PLADECO", "Gestión Bases de Datos", "Análisis de Políticas"]
                },
                {
                    name: "Atención & Habilidades Blandas",
                    icon: "fa-users",
                    items: ["Soporte Técnico Especializado", "Atención al Cliente", "Resolución de Conflictos", "Comunicación Asertiva", "Pensamiento Crítico"]
                }
            ]
        },
        education: {
            title: "Educación & Certificaciones",
            items: [
                { 
                    name: "Google IT Support Professional Certificate", 
                    detail: "Google | Credencial oficial en Coursera",
                    link: "https://www.coursera.org/account/accomplishments/specialization/IJUPQV987B4X",
                    icon: "fa-brands fa-google"
                },
                { 
                    name: "Google UX Design Professional Certificate", 
                    detail: "Google | Credencial oficial en Coursera",
                    link: "https://www.coursera.org/account/accomplishments/specialization/IKXQ9IOIYWOJ",
                    icon: "fa-brands fa-google"
                },
                { name: "Licenciatura en Ciencia Política", detail: "Pontificia Universidad Católica de Chile | 2009 – 2012" },
                { name: "Magíster en Gerencia y Políticas Públicas (Inc.)", detail: "Universidad de Santiago de Chile | 2014 – 2016" },
                { name: "Bachillerato en Cs. Sociales y Humanidades", detail: "Pontificia Universidad Católica de Chile | 2007 – 2008" },
                { name: "Bootcamp Front End Developer", detail: "Formación Tecnológica Intensiva (Alkemy) | 2026" },
                { name: "Inglés Avanzado (TOEIC Aprobado)", detail: "Certificación de Dominio Internacional | 2012" },
                { name: "Certificado Académico de Estudios Italianos", detail: "Pontificia Universidad Católica de Chile | 2012" },
                { name: "Técnicas y Herramientas de Cajero Bancario", detail: "SENCE | 2024" },
                { name: "Salvaguarda del Patrimonio Cultural Inmaterial", detail: "BiblioRedes | 2021" }
            ]
        },
        footer: {
            copyright: "Portafolio Profesional & Código Abierto",
            desc: "Disponible para incorporación inmediata en modalidad Remota, Híbrida o Presencial."
        }
    },
    en: {
        header: {
            role: "Political Scientist & Front End Developer",
            bio: "Graduate from the Pontifical Catholic University of Chile with postgraduate studies in Public Policy (USACH) and specialization in Front End Web Development. Over 8 years of experience combining community project management, data analysis, and technical telecom support with modern, responsive, and user-centric web applications.",
            pdfBtn: "CV",
            pdfLink: "assets/CV_Camila_Hidalgo.pdf"
        },
        projects: [
            {
                name: "BookList SPA — Editorial Nova",
                icon: "fa-book-open",
                desc: "Single Page Application (SPA) for a book catalog with fluid navigation, no page reloads, and instant JS filtering.",
                link: "https://gatavaca.github.io/Trabajo_modulo_6/"
            },
            {
                name: "TaskFlow — Smart Task Manager",
                icon: "fa-list-check",
                desc: "Productivity dashboard with real-time counters (total, pending, completed) and advanced DOM manipulation.",
                link: "https://gatavaca.github.io/Trabajo_modulo_5/"
            },
            {
                name: "Alke Wallet — Digital Wallet",
                icon: "fa-wallet",
                desc: "Virtual wallet interface for balance inquiries, transfers, and transactions built with Bootstrap 5.3.",
                link: "https://gatavaca.github.io/WalletDigital/"
            },
            {
                name: "SmartBudget — Personal Finance",
                icon: "fa-chart-pie",
                desc: "Responsive SaaS landing page for personal financial tracking using BEM methodology, Bootstrap 4.6, and SVG.",
                link: "https://gatavaca.github.io/Trabajo_modulo_3/"
            },
            {
                name: "Interactive Console Application",
                icon: "fa-terminal",
                desc: "Algorithmic logic in core JavaScript: control structures, functions, user input validations, and DevTools debugging.",
                link: "https://gatavaca.github.io/Trabajo_modulo_4/",
                fullWidth: true
            }
        ],
        ecosystem: {
            title: "GitHub Repositories & Source Code",
            links: [
                { name: "Repo: BookList SPA", url: "https://github.com/gatavaca/Trabajo_modulo_6" },
                { name: "Repo: TaskFlow", url: "https://github.com/gatavaca/Trabajo_modulo_5" },
                { name: "Repo: Alke Wallet", url: "https://github.com/gatavaca/WalletDigital" },
                { name: "Repo: SmartBudget", url: "https://github.com/gatavaca/Trabajo_modulo_3" },
                { name: "Repo: JS Console", url: "https://github.com/gatavaca/Trabajo_modulo_4" }
            ]
        },
        experience: {
            title: "Work Experience",
            items: [
                {
                    title: "Call Center Executive, WOM Fiber Optics",
                    date: "2021 – 2024",
                    subtitle: "Holdtech S.A. (WOM Home) — Remote",
                    isCurrent: true,
                    bullets: [
                        'Specialized <strong class="text-white">technical support and diagnostics for residential fiber optics</strong> and connectivity services.',
                        'Commercial customer support for billing, after-sales service, and high-priority resolution of complex inquiries.',
                        'Operational dispatch and <strong class="text-white">scheduling of field technicians</strong> nationwide.'
                    ]
                },
                {
                    title: "FOSIS Program Advisor (Yo Emprendo / Capital Semilla)",
                    date: "2016 – 2021",
                    subtitle: "Ciudad Proyectos & CS Asesores — Santiago, Chile",
                    isCurrent: false,
                    bullets: [
                        'Technical and commercial advisory for hundreds of entrepreneurs across multiple municipalities in the Santiago Metropolitan Region.',
                        'Formulation of business work plans utilizing the <strong class="text-white">Business Model Canvas</strong>.',
                        'Submission and validation of investment projects before FOSIS; formal expense accounting and financial oversight.'
                    ]
                },
                {
                    title: "Community Program Coordinator “Comprehensive Community Management”",
                    date: "2019",
                    subtitle: "Municipality of San Miguel — DIDECO",
                    isCurrent: false,
                    bullets: [
                        'Active contribution to the participatory development of the <strong class="text-white">Communal Development Plan (PLADECO 2019)</strong>.',
                        'Direct liaison with neighborhood leaders, community councils, and condominium committees.',
                        'Design of informative institutional material and systematic database updates.'
                    ]
                },
                {
                    title: "Public Safety Communal Plan Coordinator",
                    date: "2015",
                    subtitle: "Municipality of Lo Espejo",
                    isCurrent: false,
                    bullets: [
                        'Professional support in citizen assemblies with local residents for municipal safety diagnoses.',
                        'Continuous review, auditing, and maintenance of program databases.',
                        'Administrative management and municipal documentation.'
                    ]
                },
                {
                    title: "Territorial Office Support Professional (Internship)",
                    date: "2012",
                    subtitle: "Ministry of Mining — Santiago, Chile",
                    isCurrent: false,
                    bullets: [
                        'Daily monitoring and executive analysis of national press regarding the mining sector and ministerial leadership.',
                        'Preparation of executive briefing memos and territorial database support.'
                    ]
                }
            ]
        },
        stack: {
            title: "Skills & Stack",
            categories: [
                {
                    name: "Front End Development",
                    icon: "fa-code",
                    items: ["Semantic HTML5", "CSS3 / Flexbox / Grid", "JavaScript (ES6+)", "Vue.js", "Bootstrap 4 & 5", "BEM Methodology", "Git & GitHub"]
                },
                {
                    name: "Architecture & Web",
                    icon: "fa-desktop",
                    items: ["Single Page Apps (SPA)", "DOM Manipulation", "Responsive Web Design", "GitHub Pages", "API Integration", "Vite"]
                },
                {
                    name: "Management & Public Policy",
                    icon: "fa-chart-pie",
                    items: ["Canvas Model", "FOSIS Project Planning", "PLADECO Diagnostics", "Database Management", "Public Policy Analysis"]
                },
                {
                    name: "Technical Support & Soft Skills",
                    icon: "fa-users",
                    items: ["Telecom Tech Support", "Customer Experience", "Conflict Resolution", "Strategic Communication", "Critical Thinking"]
                }
            ]
        },
        education: {
            title: "Education & Certifications",
            items: [
                { 
                    name: "Google IT Support Professional Certificate", 
                    detail: "Google | Official Credential on Coursera",
                    link: "https://www.coursera.org/account/accomplishments/specialization/IJUPQV987B4X",
                    icon: "fa-brands fa-google"
                },
                { 
                    name: "Google UX Design Professional Certificate", 
                    detail: "Google | Official Credential on Coursera",
                    link: "https://www.coursera.org/account/accomplishments/specialization/IKXQ9IOIYWOJ",
                    icon: "fa-brands fa-google"
                },
                { name: "Bachelor's Degree in Political Science", detail: "Pontifical Catholic University of Chile | 2009 – 2012" },
                { name: "Master's in Management & Public Policy (Inc.)", detail: "University of Santiago, Chile | 2014 – 2016" },
                { name: "Baccalaureate in Social Sciences & Humanities", detail: "Pontifical Catholic University of Chile | 2007 – 2008" },
                { name: "Front End Developer Bootcamp", detail: "Intensive Tech Training (Alkemy) | 2024" },
                { name: "Advanced English (TOEIC Passed)", detail: "International Proficiency Certification | 2012" },
                { name: "Italian Studies Academic Certificate", detail: "Pontifical Catholic University of Chile | 2012" },
                { name: "Bank Teller Techniques & Tools", detail: "SENCE | 2024" },
                { name: "Intangible Cultural Heritage Safeguarding", detail: "BiblioRedes | 2021" }
            ]
        },
        footer: {
            copyright: "Professional Portfolio & Open Source",
            desc: "Available for immediate hire in Remote, Hybrid, or On-site roles."
        }
    }
};
