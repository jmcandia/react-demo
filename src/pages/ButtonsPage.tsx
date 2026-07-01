import FeatherIcon from 'feather-icons-react';

export default function ButtonsPage() {
  return (
    <div className="max-w-300 mx-auto px-6">
      <h2>Botones e Íconos</h2>
      <div className="mt-6 space-y-0">
        {[
          {
            titulo: 'Botón primario',
            desc: 'Acción principal / CTA',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity">
                Inscríbete <FeatherIcon icon="chevron-right" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity">
  Inscríbete <FeatherIcon icon="chevron-right" size={18} />
</button>`
          },
          {
            titulo: 'Botón secundario',
            desc: 'Acción secundaria',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-secondary text-black hover:opacity-90 transition-opacity">
                Ver más <FeatherIcon icon="chevron-right" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-secondary text-black hover:opacity-90 transition-opacity">
  Ver más <FeatherIcon icon="chevron-right" size={18} />
</button>`
          },
          {
            titulo: 'Botón ok',
            desc: 'Ejecutar / Aceptar',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                Aceptar <FeatherIcon icon="check-circle" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
  Aceptar <FeatherIcon icon="check-circle" size={18} />
</button>`
          },
          {
            titulo: 'Botón danger',
            desc: 'Eliminar / Clausurar',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
                Eliminar <FeatherIcon icon="trash-2" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors">
  Eliminar <FeatherIcon icon="trash-2" size={18} />
</button>`
          },
          {
            titulo: 'Botón link',
            desc: 'Apoyo dentro de contenido',
            btn: (
              <button className="flex items-center gap-2 font-bold px-2 py-2 text-black dark:text-white hover:underline transition-colors">
                Más información <FeatherIcon icon="external-link" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-2 py-2 text-black dark:text-white hover:underline transition-colors">
  Más información <FeatherIcon icon="external-link" size={18} />
</button>`
          },
          {
            titulo: 'Botón outline',
            desc: 'Acción alternativa',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg border-2 border-black dark:border-white text-black dark:text-white hover:opacity-90 transition-opacity">
                Agregar <FeatherIcon icon="plus-circle" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg border-2 border-black dark:border-white text-black dark:text-white hover:opacity-90 transition-opacity">
  Agregar <FeatherIcon icon="plus-circle" size={18} />
</button>`
          },
          {
            titulo: 'Primario outline',
            desc: 'Acción principal alternativa',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg border-2 border-primary text-primary hover:opacity-90 transition-opacity">
                Inscríbete <FeatherIcon icon="chevron-right" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg border-2 border-primary text-primary hover:opacity-90 transition-opacity">
  Inscríbete <FeatherIcon icon="chevron-right" size={18} />
</button>`
          },
          {
            titulo: 'Secundario outline',
            desc: 'Acción secundaria alternativa',
            btn: (
              <button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg border-2 border-secondary text-secondary hover:opacity-90 transition-opacity">
                Ver más <FeatherIcon icon="chevron-right" size={18} />
              </button>
            ),
            code: `<button className="flex items-center gap-2 font-bold px-6 py-2 rounded-lg border-2 border-secondary text-secondary hover:opacity-90 transition-opacity">
  Ver más <FeatherIcon icon="chevron-right" size={18} />
</button>`
          }
        ].map(({ titulo, desc, btn, code }, i, arr) => (
          <div
            key={titulo}
            className={`px-6 py-4 ${i < arr.length - 1 ? 'border-b border-grey/30 dark:border-grey/50' : ''}`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-48">
                <h5 className="m-0">{titulo}</h5>
                <small className="text-grey">{desc}</small>
              </div>
              {btn}
            </div>
            <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
              <code>{code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
