import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';

const PASOS = [
  {
    numero: '01',
    titulo: 'Crear el proyecto',
    desc: 'Genera un proyecto React con TypeScript usando Vite.',
    icon: 'terminal',
    codigo: `npm create vite@latest react-demo
# Seleccionar: React → TypeScript

cd react-demo
pnpm install`
  },
  {
    numero: '02',
    titulo: 'Instalar dependencias',
    desc: 'Agrega Tailwind v4 con su plugin oficial para Vite y los íconos Feather.',
    icon: 'package',
    codigo: `pnpm add -D tailwindcss @tailwindcss/vite
pnpm add feather-icons-react`
  },
  {
    numero: '03',
    titulo: 'Configurar el plugin en Vite',
    desc: 'Registra el plugin de Tailwind en vite.config.ts. No necesitas postcss.config.js.',
    icon: 'settings',
    codigo: `// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`
  },
  {
    numero: '04',
    titulo: 'Activar modo oscuro con variante personalizada',
    desc: 'Tailwind v4 usa @custom-variant para activar dark mode mediante la clase .dark en el elemento HTML.',
    icon: 'moon',
    codigo: `// src/index.css
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');

@import 'tailwindcss';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-black: #1a1a1a;
  --color-white: #eeeeee;
  --color-yellow: #ffb800;
  --color-grey: #666666;
  --color-primary: #307fe2;
  --color-secondary: #8bb8e8;

  --font-serif: 'Merriweather', Georgia, serif;
  --font-sans: 'Lato', system-ui, sans-serif;

  --font-size-h1: 2.6875rem;
  --font-size-h2: 2.1rem;
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.25rem;
  --font-size-h5: 1rem;
  --font-size-body: 1rem;
  --font-size-small: 0.8125rem;
}

@layer base {
  h1 {
    font-family: var(--font-serif);
    font-size: var(--font-size-h1);
    font-weight: 700;
    line-height: 1.2;
  }
  h2 {
    font-family: var(--font-serif);
    font-size: var(--font-size-h2);
    font-weight: 700;
    line-height: 1.25;
  }
  h3 {
    font-family: var(--font-serif);
    font-size: var(--font-size-h3);
    font-weight: 700;
    line-height: 1.3;
  }
  h4 {
    font-family: var(--font-serif);
    font-size: var(--font-size-h4);
    font-weight: 400;
    line-height: 1.4;
  }
  h5 {
    font-family: var(--font-sans);
    font-size: var(--font-size-h5);
    font-weight: 400;
    line-height: 1.5;
  }
  p {
    font-family: var(--font-sans);
    font-size: var(--font-size-body);
    font-weight: 400;
    line-height: 1.6;
  }
  small {
    font-family: var(--font-sans);
    font-size: var(--font-size-small);
    font-weight: 400;
    line-height: 1.5;
  }
}`
  },
  {
    numero: '06',
    titulo: 'Verificar que main.tsx importa el CSS',
    desc: 'Confirma que src/main.tsx importa index.css para que Tailwind se aplique globalmente.',
    icon: 'check-circle',
    codigo: `// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'       // ← debe estar aquí
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`
  },
  {
    numero: '07',
    titulo: 'Levantar el servidor de desarrollo',
    desc: 'Inicia el servidor y abre http://localhost:5173 para verificar que los estilos se aplican correctamente.',
    icon: 'play-circle',
    codigo: `pnpm dev`
  }
];

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero */}
      <div className="mb-16">
        <h1 className="mb-4">Kit Digital</h1>
        <p className="text-grey text-xl">
          Guía de implementación del sistema de diseño institucional usando
          Tailwind CSS v4 + React + Vite. Sigue los pasos para configurar el
          proyecto desde cero.
        </p>
      </div>

      {/* Paso a paso */}
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-grey/20 dark:bg-grey/30 hidden sm:block" />

        <div className="space-y-10">
          {PASOS.map(({ numero, titulo, desc, icon, codigo }) => (
            <div key={numero} className="flex gap-6">
              {/* Indicador */}
              <div className="shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-serif text-sm z-10">
                  {numero}
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-3 mb-1">
                  <FeatherIcon icon={icon} size={18} className="text-primary" />
                  <h3 className="m-0">{titulo}</h3>
                </div>
                <p className="text-grey mt-1 mb-3">{desc}</p>
                <pre className="text-sm rounded-lg p-4 overflow-x-auto whitespace-pre-wrap break-all bg-white dark:bg-black/40 text-grey border border-grey/20 dark:border-grey/30">
                  <code>{codigo}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="mt-16 p-8 rounded-lg bg-primary text-white text-center">
        <h2 className="text-white m-0 mb-2">
          ¿Listo para explorar los componentes?
        </h2>
        <p className="text-white/80 m-0 mb-6">
          Navega por las secciones del menú para ver tipografía, botones, cajas,
          tablas, acordeones y alertas.
        </p>
        <Link
          to="/tipografia"
          className="inline-flex items-center gap-2 bg-yellow text-black font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Ver componentes <FeatherIcon icon="chevron-right" size={18} />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
