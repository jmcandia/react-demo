import FeatherIcon from 'feather-icons-react';

export default function TablesPage() {
  const filas = [
    { col1: 'Lorem ipsum', col2: 'Dolor sit amet' },
    { col1: 'Consectetur', col2: 'Adipiscing elit' },
    { col1: 'Sed do eiusmod', col2: 'Tempor incididunt' },
    { col1: 'Ut labore et', col2: 'Dolore magna aliqua' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2>Tablas y Listas</h2>
      <div className="mt-6 space-y-12">
        {/* ── Tabla ───────────────────────────────────────────── */}
        <div>
          <h3 className="mb-1">Tabla</h3>
          <p className="text-grey mb-4">
            Tabla con filas alternadas para mejorar la legibilidad.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 font-bold">Lorem ipsum</th>
                  <th className="px-4 py-3 font-bold">Dolor sit amet</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((fila, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0
                        ? 'bg-white dark:bg-black/20'
                        : 'bg-white/60 dark:bg-black/40'
                    }
                  >
                    <th className="px-4 py-3 font-bold border-b border-grey/20 dark:border-grey/30">
                      {fila.col1}
                    </th>
                    <td className="px-4 py-3 border-b border-grey/20 dark:border-grey/30">
                      {fila.col2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<table className="w-full text-left border-collapse">
  <thead>
    <tr className="bg-primary text-white">
      <th className="px-4 py-3 font-bold">Lorem ipsum</th>
      <th className="px-4 py-3 font-bold">Dolor sit amet</th>
    </tr>
  </thead>
  <tbody>
    {filas.map((fila, i) => (
      <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-black/20' : 'bg-white/60 dark:bg-black/40'}>
        <th className="px-4 py-3 font-bold border-b border-grey/20">{fila.col1}</th>
        <td className="px-4 py-3 border-b border-grey/20">{fila.col2}</td>
      </tr>
    ))}
  </tbody>
</table>`}</code>
          </pre>
        </div>

        {/* ── Lista espaciada con bullets ──────────────────────── */}
        <div>
          <h3 className="mb-1">Lista espaciada con bullets</h3>
          <p className="text-grey mb-4">
            Lista con espaciado generoso entre ítems y bullet personalizado.
          </p>
          <ul className="space-y-3 mb-4 pl-0 list-none">
            {[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
              'Laboris nisi ut aliquip ex ea commodo consequat duis aute.'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<ul className="space-y-3 list-none pl-0">
  <li className="flex items-start gap-3">
    <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0" />
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
  </li>
</ul>`}</code>
          </pre>
        </div>

        {/* ── Lista por defecto ────────────────────────────────── */}
        <div>
          <h3 className="mb-1">Lista por defecto</h3>
          <p className="text-grey mb-4">
            Lista estándar con estilo base del navegador.
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            {[
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
              'Laboris nisi ut aliquip ex ea commodo consequat duis aute.'
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<ul className="list-disc pl-6 space-y-1">
  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
  <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
</ul>`}</code>
          </pre>
        </div>

        {/* ── Lista de descargables ────────────────────────────── */}
        <div>
          <h3 className="mb-1">Lista de descargables</h3>
          <p className="text-grey mb-4">Links de descarga con ícono Feather.</p>
          <div className="mb-4">
            <h4 className="mb-3">Lorem ipsum dolor sit amet</h4>
            <div className="flex flex-col gap-2">
              {[
                'Consectetur adipiscing elit document.pdf',
                'Sed do eiusmod tempor incididunt.pdf',
                'Ut labore et dolore magna aliqua.pdf'
              ].map((archivo, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex items-center gap-2 font-bold hover:underline transition-colors text-primary"
                >
                  <FeatherIcon icon="download" size={18} />
                  {archivo}
                </a>
              ))}
            </div>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<a href="#" className="inline-flex items-center gap-2 font-bold hover:underline text-primary">
  <FeatherIcon icon="download" size={18} />
  Consectetur adipiscing elit document.pdf
</a>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
