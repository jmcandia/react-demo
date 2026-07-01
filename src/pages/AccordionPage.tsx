import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const ITEMS_SIMPLE = [
  {
    titulo: 'Lorem ipsum dolor sit amet',
    contenido:
      'Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    titulo: 'Sed do eiusmod tempor incididunt',
    contenido:
      'Ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.'
  },
  {
    titulo: 'Ut enim ad minim veniam',
    contenido:
      'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

const ITEMS_COLUMNAS = [
  {
    titulo: 'Lorem ipsum',
    contenido:
      'Dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.'
  },
  {
    titulo: 'Consectetur',
    contenido:
      'Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation.'
  },
  {
    titulo: 'Sed do eiusmod',
    contenido:
      'Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.'
  }
];

function AccordionItem({
  titulo,
  contenido,
  open,
  onToggle
}: {
  titulo: string;
  contenido: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-grey/30 dark:border-grey/50 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-bold bg-white dark:bg-black/40 hover:bg-grey/10 dark:hover:bg-white/5 transition-colors"
      >
        <h4 className="m-0">{titulo}</h4>
        <FeatherIcon
          icon="chevron-down"
          size={20}
          className={`shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 py-4 border-t border-grey/20 dark:border-grey/40 bg-white/60 dark:bg-black/20">
          <p className="m-0">{contenido}</p>
        </div>
      )}
    </div>
  );
}

export default function AccordionPage() {
  const [openSimple, setOpenSimple] = useState<number | null>(null);
  const [openCol, setOpenCol] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h2>Acordeones</h2>
      <div className="mt-6 space-y-12">
        {/* ── Acordeón simple ──────────────────────────────────── */}
        <div>
          <h3 className="mb-1">Acordeón principal</h3>
          <p className="text-grey mb-4">
            Un ítem abierto a la vez. Título general con bajada introductoria.
          </p>
          <div className="mb-2">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p className="text-grey">
              Consectetur adipiscing elit sed do eiusmod tempor.
            </p>
          </div>
          <div className="space-y-2 mb-4">
            {ITEMS_SIMPLE.map((item, i) => (
              <AccordionItem
                key={i}
                titulo={item.titulo}
                contenido={item.contenido}
                open={openSimple === i}
                onToggle={() => setOpenSimple(openSimple === i ? null : i)}
              />
            ))}
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`const [open, setOpen] = useState<number | null>(null)
  
  <div className="space-y-2">
    {items.map((item, i) => (
      <div key={i} className="border border-grey/30 rounded-lg overflow-hidden">
        <button
          onClick={() => setOpen(open === i ? null : i)}
          className="w-full flex items-center justify-between px-5 py-4 text-left font-bold bg-white dark:bg-black/40"
        >
          <h4 className="m-0">{item.titulo}</h4>
          <FeatherIcon icon="chevron-down" size={20}
            className={\`transition-transform duration-300 \${open === i ? 'rotate-180' : ''}\`} />
        </button>
        {open === i && (
          <div className="px-5 py-4 border-t border-grey/20 bg-white/60 dark:bg-black/20">
            <p className="m-0">{item.contenido}</p>
          </div>
        )}
      </div>
    ))}
  </div>`}</code>
          </pre>
        </div>

        {/* ── Acordeón 3 columnas ──────────────────────────────── */}
        <div>
          <h3 className="mb-1">Acordeón — 3 columnas</h3>
          <p className="text-grey mb-4">
            Cada columna tiene su propio acordeón independiente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            {ITEMS_COLUMNAS.map((item, i) => (
              <AccordionItem
                key={i}
                titulo={item.titulo}
                contenido={item.contenido}
                open={openCol === i}
                onToggle={() => setOpenCol(openCol === i ? null : i)}
              />
            ))}
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {items.map((item, i) => (
      <AccordionItem
        key={i}
        titulo={item.titulo}
        contenido={item.contenido}
        open={open === i}
        onToggle={() => setOpen(open === i ? null : i)}
      />
    ))}
  </div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
