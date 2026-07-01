import logo from './assets/logo.png';
import {
  Routes,
  Route,
  type NavLinkRenderProps,
  NavLink,
  Link
} from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import HomePage from './pages/HomePage';
import FeatherIcon from 'feather-icons-react';
import AccordionPage from './pages/AccordionPage';
import AlertsPage from './pages/AlertsPage';
import BoxesPage from './pages/BoxesPage';
import ButtonsPage from './pages/ButtonsPage';
import TablesPage from './pages/TablesPage';
import TypographyPage from './pages/TypographyPage';
import LayoutPage from './pages/LayoutPage';

function App() {
  const { theme, toggle } = useTheme();

  const NAV_LINKS = [
    { to: '/', label: 'Inicio' },
    { to: '/layout', label: 'Diseño' },
    { to: '/tipografia', label: 'Tipografía y Colores' },
    { to: '/botones', label: 'Botones' },
    { to: '/cajas', label: 'Cajas y bloques' },
    { to: '/tablas', label: 'Tablas y listas' },
    { to: '/acordeones', label: 'Acordeones' },
    { to: '/alertas', label: 'Alertas' }
  ];

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-white dark:bg-black text-black dark:text-white">
      <header className="sticky top-0 z-50 px-8 py-4 flex items-center justify-between bg-black">
        <div className="flex items-center gap-4">
          <img src={logo} alt="React" className="h-8" />
          <span className="font-serif font-bold text-lg tracking-wide text-white">
            React Demo
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }: NavLinkRenderProps) =>
                `font-sans text-sm font-bold px-3 py-1.5 rounded-lg transition-colors ${
                  isActive ? 'text-yellow' : 'text-white hover:bg-white/10'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="w-full py-12 space-y-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/layout" element={<LayoutPage />} />
          <Route path="/tipografia" element={<TypographyPage />} />
          <Route path="/botones" element={<ButtonsPage />} />
          <Route path="/cajas" element={<BoxesPage />} />
          <Route path="/tablas" element={<TablesPage />} />
          <Route path="/acordeones" element={<AccordionPage />} />
          <Route path="/alertas" element={<AlertsPage />} />
        </Routes>
      </main>

      <footer style={{ backgroundColor: 'var(--color-black)' }}>
        {/* ── Bloque principal ───────────────────────────── */}
        <div className="max-w-300 mx-auto px-6 py-10">
          <div className="grid grid-cols-12 gap-8">
            {/* Marca */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <span
                className="font-serif font-bold text-xl"
                style={{ color: 'var(--color-white)' }}
              >
                React Demo
              </span>
              <p className="text-sm m-0" style={{ color: 'var(--color-grey)' }}>
                Sistema de diseño implementado con Tailwind CSS v4 y React.
              </p>
            </div>

            <div className="hidden lg:block lg:col-span-1" />

            {/* Links de secciones */}
            <div className="col-span-12 lg:col-span-4">
              <h5
                className="font-bold uppercase tracking-widest text-xs mb-4"
                style={{ color: 'var(--color-yellow)' }}
              >
                Componentes
              </h5>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 list-none m-0 p-0">
                {NAV_LINKS.map(({ label, to }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="text-sm transition-colors hover:opacity-80"
                      style={{ color: 'var(--color-white)' }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = 'var(--color-yellow)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = 'var(--color-white)')
                      }
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack tecnológico */}
            <div className="col-span-12 lg:col-span-3">
              <h5
                className="font-bold uppercase tracking-widest text-xs mb-4"
                style={{ color: 'var(--color-yellow)' }}
              >
                Stack
              </h5>
              <ul className="flex flex-col gap-2 list-none m-0 p-0">
                {[
                  'Vite 8',
                  'React 19',
                  'TypeScript 5',
                  'Tailwind CSS 4',
                  'React Router 7',
                  'Feather Icons'
                ].map((item) => (
                  <li
                    key={item}
                    className="text-sm flex items-center gap-2"
                    style={{ color: 'var(--color-white)' }}
                  >
                    <span style={{ color: 'var(--color-yellow)' }}>›</span>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Separador ──────────────────────────────────── */}
        <div style={{ borderTop: '1px solid var(--color-grey)' }}>
          <div className="max-w-300 mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <small style={{ color: 'var(--color-grey)' }}>React Demo</small>
            <small style={{ color: 'var(--color-grey)' }}>
              Licencia MIT · {new Date().getFullYear()}
            </small>
          </div>
        </div>
      </footer>

      <button
        onClick={toggle}
        aria-label={
          theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro'
        }
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 bg-yellow text-black hover:opacity-90"
      >
        <FeatherIcon icon={theme === 'dark' ? 'sun' : 'moon'} size={20} />
      </button>
    </div>
  );
}

export default App;
