import logo from './assets/logo.png';
import {
  Routes,
  Route,
  type NavLinkRenderProps,
  NavLink
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
import ColorsPage from './pages/ColorsPage';

function App() {
  const { theme, toggle } = useTheme();

  const NAV_LINKS = [
    { to: '/', label: 'Inicio' },
    { to: '/tipografia', label: 'Tipografía' },
    { to: '/colores', label: 'Colores' },
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

      <main className="w-full px-8 py-12 space-y-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tipografia" element={<TypographyPage />} />
          <Route path="/colores" element={<ColorsPage />} />
          <Route path="/botones" element={<ButtonsPage />} />
          <Route path="/cajas" element={<BoxesPage />} />
          <Route path="/tablas" element={<TablesPage />} />
          <Route path="/acordeones" element={<AccordionPage />} />
          <Route path="/alertas" element={<AlertsPage />} />
        </Routes>
      </main>

      <footer className="px-8 py-6 mt-16 transition-colors duration-300 bg-white dark:bg-black/40 border-t border-grey/30 dark:border-grey/50">
        <p className="text-center m-0">
          <small className="text-grey">
            React Demo | Licencia MIT · {new Date().getFullYear()}
          </small>
        </p>
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
