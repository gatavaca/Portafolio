# 🚀 Portafolio Web & CV Interactivo — Camila Hidalgo Páez

> **Cientista Político & Desarrolladora Front End**  
> Longaví / Santiago, Chile · [cihidalg@uc.cl](mailto:cihidalg@uc.cl) · [+56 9 8290 9495](https://wa.me/56982909495) · [LinkedIn](https://www.linkedin.com/in/cami-hidalgo/) · [@gatavaca](https://github.com/gatavaca)

---

## 📌 Descripción

Portafolio web y CV interactivo de alto impacto visual y rendimiento. Diseñado con estética moderna *Nebula Glassmorphism*, estructura responsiva en dos columnas, soporte bilingüe reactivo (**Español / Inglés**) y arquitectura de datos modular para fácil actualización.

---

## 🛠️ Stack Tecnológico

- **Tailwind CSS**: Estilizado utility-first con paleta personalizada *deep midnight indigo & vibrant sunset coral* (bicolor de alto contraste).
- **Alpine.js**: Reactividad ligera para conmutación instantánea de idiomas (`ES` / `EN`) y renderizado declarativo sin recarga.
- **Glassmorphism & Nebula Effects**: Orbes ambientales difuminados y paneles con `backdrop-filter`.
- **Font Awesome 6 & Google Fonts**: Tipografías *Inter* y *Luxurious Script*.

---

## 📁 Estructura del Proyecto

```text
Portafolio/
│
├── index.html              # Estructura semántica principal y renderizado reactivo
├── README.md               # Documentación y guía de despliegue
│
├── css/
│   └── style.css           # Efectos Nebula, Glassmorphism, animaciones y firma
│
├── js/
│   ├── app.js              # Controlador reactivo Alpine.js (idioma y persistencia)
│   ├── data.js             # Toda la información profesional (ES y EN) editable
│   └── tailwind.config.js  # Configuración y colores personalizados de Tailwind
│
└── assets/
    └── img/
        └── avatar.jpg      # Imagen / Avatar de perfil
```

---

## ✏️ ¿Cómo editar tu información?

Todos los textos, proyectos, experiencias laborales, habilidades y enlaces se gestionan centralizadamente desde:  
👉 **`js/data.js`**

Puedes abrir `js/data.js` en cualquier editor de código y actualizar los campos en las secciones `es` (Español) o `en` (Inglés). Los cambios se reflejarán al instante en la página web.

---

## 💻 Proyectos Incluidos

1. **[BookList SPA — Editorial Nova](https://gatavaca.github.io/Trabajo_modulo_6/)**: Single Page Application con filtrado interactivo sin recarga de página.
2. **[TaskFlow — Gestor de Tareas](https://gatavaca.github.io/Trabajo_modulo_5/)**: Dashboard de tareas con métricas en tiempo real y manipulación del DOM.
3. **[Alke Wallet — Billetera Digital](https://gatavaca.github.io/WalletDigital/)**: Simulador de billetera virtual en Bootstrap 5.3.
4. **[SmartBudget — Finanzas Personales](https://gatavaca.github.io/Trabajo_modulo_3/)**: Landing page SaaS con metodología BEM y Bootstrap 4.6.
5. **[Aplicación Interactiva en Consola](https://gatavaca.github.io/Trabajo_modulo_4/)**: Lógica de programación algorítmica en JavaScript core.

---

## 🌐 Publicación en GitHub Pages

Desde tu terminal (**PowerShell** o **Git Bash**) en la carpeta del proyecto:

```powershell
git add .
git commit -m "Actualización de mi portafolio web"
git push
```

En 1 a 2 minutos tu sitio se actualizará automáticamente en:  
👉 **`https://gatavaca.github.io/Portafolio/`**
