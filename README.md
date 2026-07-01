# React Demo

Implementación del sistema de diseño institucional de Duoc UC usando **Tailwind CSS v4**, **React** y **Vite**. Este proyecto sirve como guía de referencia para desarrolladores que necesiten aplicar el Kit Digital en aplicaciones web modernas.

## Tabla de Contentidos

- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Rutas](#rutas)
- [Sistema de diseño](#sistema-de-diseño)
  - [Tipografías](#tipografías)
  - [Paleta de colores](#paleta-de-colores)
  - [Tema claro / oscuro](#tema-claro--oscuro)
- [Componentes disponibles](#componentes-disponibles)
  - [Botones](#botones)
  - [Cajas y bloques](#cajas-y-bloques)
  - [Tablas y listas](#tablas-y-listas)
  - [Acordeones](#acordeones)
  - [Alertas](#alertas)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Tecnologías

| Herramienta | Versión | Descripción |
| :--- | :--- | :--- |
| [Vite](https://vitejs.dev/) | 8.x | Bundler y servidor de desarrollo |
| [React](https://react.dev/) | 19.x | Librería de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Framework de estilos utilitarios |
| [React Router](https://reactrouter.com/) | 7.x | Enrutamiento del lado del cliente |
| [Feather Icons](https://feathericons.com/) | — | Familia de íconos oficial Duoc UC |

---

## Requisitos previos

- Node.js 20 o superior
- pnpm 9 o superior

---

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/jmcandia/react-demo.git
cd react-demo

# Instalar dependencias
pnpm install

# Levantar el servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Estructura del proyecto

```plaintext
react-demo/
├── public/
│   └── facivon.png
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── hooks/
│   │   └── useTheme.tsx
│   ├── pages/
│   │   ├── AccordionPage.tsx
│   │   ├── AlertsPage.tsx
│   │   ├── BoxesPage.tsx
│   │   ├── ButtonsPage.tsx
│   │   ├── CardsPage.tsx
│   │   ├── ColorsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── TablesPage.tsx
│   │   └── TypographyPage.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── LICENSE
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Rutas

| Ruta | Descripción |
| :--- | :--- |
| `/` | Guía de instalación paso a paso |
| `/tipografia` | Escala tipográfica |
| `/botones` | Botones con variantes e íconos |
| `/colores` | Paleta de colores |
| `/cajas` | Cajas, tarjetas y bloques con imágenes |
| `/tablas` | Tablas y listas |
| `/acordeones` | Acordeones simple y en 3 columnas |
| `/alertas` | Mensajes y notificaciones |

---

## Sistema de diseño

### Tipografías

| Fuente | Rol | Estilos |
| :--- | :--- | :--- |
| Merriweather | Titulares (h1–h4) | Light, Regular, Bold e Itálicas |
| Lato | Cuerpo y UI (h5, p, small) | Light, Regular, Bold e Itálicas |

### Paleta de colores

| Token | Hexadecimal | Uso |
| :--- | :--- | :--- |
| `black` | `#1A1A1A` | Fondo oscuro, header |
| `white` | `#EEEEEE` | Fondo claro, texto sobre oscuro |
| `yellow` | `#FFB800` | Acento, CTA secundario, enlace activo |
| `grey` | `#666666` | Texto de apoyo, bordes |
| `primary` | `#307FE2` | Acción principal, Escuela de Informática |
| `secondary` | `#8BB8E8` | Acción secundaria |

### Tema claro / oscuro

El tema se activa añadiendo la clase `.dark` al elemento `<html>`. La preferencia se detecta automáticamente desde `prefers-color-scheme` y se persiste en `localStorage`.

```css
/* index.css */
@custom-variant dark (&:where(.dark, .dark *));
```

```ts
// hooks/useTheme.ts
const stored = localStorage.getItem('theme')
if (stored) return stored
return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
```

---

## Componentes disponibles

### Botones

| Variante | Descripción |
| :--- | :--- |
| Primario | `bg-primary text-white` |
| Secundario | `bg-secondary text-black` |
| Ok | `bg-green-600 text-white` |
| Danger | `bg-red-600 text-white` |
| Link | `text-black dark:text-white hover:underline` |
| Outline | `border-2 border-black dark:border-white` |
| Primario outline | `border-2 border-primary text-primary` |
| Secundario outline | `border-2 border-secondary text-secondary` |

Todos los botones usan íconos Feather y `rounded-lg` como radio de borde.

### Cajas y bloques

- Box foto + link en 4 columnas
- Box foto + link en 3 columnas
- Box foto + link Big (ancho completo)
- Box negro + listado de links
- Box negro anclado a la derecha
- Box blanco con texto y botón
- Box blanco / negro partido
- Box color de escuela + imagen

### Tablas y listas

- Tabla con filas alternadas
- Lista espaciada con bullets personalizados
- Lista por defecto
- Lista de descargables con ícono Feather

### Acordeones

- Acordeón simple (un ítem abierto a la vez)
- Acordeón en 3 columnas (independientes)

### Alertas

| Tipo | Color |
| :--- | :--- |
| Éxito | Verde (`green-600`) |
| Información | Azul (`primary`) |
| Neutral | Gris (`grey`) |
| Advertencia | Amarillo (`yellow`) |
| Error | Rojo (`red-600`) |

---

## Autor

José Miguel Candia - [GitHub](https://github.com/jmcandia) | [Correo](mailto:jo.candiah@profesor.duoc.cl)

---

## Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que puedes usar, modificar, ampliar y distribuir el código libremente, tanto para fines educativos como comerciales.

Para más detalles, consulta el archivo [LICENSE](LICENSE) adjunto en la raíz de este repositorio.
