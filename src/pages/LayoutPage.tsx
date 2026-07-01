function ColDemo({ label }: { label: string }) {
  return (
    <div className="bg-primary/20 dark:bg-primary/30 border border-primary/40 rounded px-2 py-3 text-center text-sm font-bold text-primary">
      {label}
    </div>
  );
}

function LayoutPage() {
  return (
    <div className="max-w-300 mx-auto px-6">
      <div>
        <h1>Layout, Contenedores y Grilla</h1>
        <p className="text-grey">
          Equivalencia del sistema de layout de Bootstrap 4 implementado en
          Tailwind CSS v4. La grilla base es de <strong>12 columnas</strong> con
          breakpoints Mobile First:
          <code className="mx-1 px-1 bg-grey/10 rounded text-sm">
            sm ≥ 640px
          </code>
          <code className="mx-1 px-1 bg-grey/10 rounded text-sm">
            md ≥ 768px
          </code>
          <code className="mx-1 px-1 bg-grey/10 rounded text-sm">
            lg ≥ 1024px
          </code>
        </p>
      </div>

      {/* ── Contenedores ─────────────────────────────────── */}
      <section className="space-y-8">
        <h2>Contenedores</h2>

        {/* container-fluid */}
        <div>
          <h3 className="mb-1">container-fluid</h3>
          <p className="text-grey mb-3">
            Ocupa el 100% del ancho disponible. Se usa fuera de los contenedores
            de contenido.
          </p>
          <div className="w-full bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-lg p-4">
            <code className="text-primary font-bold text-sm">w-full</code>
            <span className="text-grey text-sm ml-3">— 100% del ancho</span>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="w-full">
  {/* Contenido al 100% del ancho */}
</div>`}</code>
          </pre>
        </div>

        {/* container content */}
        <div>
          <h3 className="mb-1">container content</h3>
          <p className="text-grey mb-3">
            Contenedor general con ancho máximo de 1200px y centrado automático.
            Siempre debe aplicarse para el contenido principal.
          </p>
          <div className="w-full bg-grey/10 dark:bg-grey/20 rounded-lg p-2">
            <div className="max-w-300 mx-auto px-6 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-lg p-4">
              <code className="text-primary font-bold text-sm">
                max-w-300 mx-auto px-6
              </code>
              <span className="text-grey text-sm ml-3">
                — Máx. 1200px, centrado
              </span>
            </div>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="max-w-300 mx-auto px-6">
  {/* Contenido general de la página */}
</div>`}</code>
          </pre>
        </div>

        {/* container-narrow */}
        <div>
          <h3 className="mb-1">container-narrow</h3>
          <p className="text-grey mb-3">
            Contenedor angosto (máx. 768px) para evitar el agotamiento visual en
            bloques de texto extenso.
          </p>
          <div className="w-full bg-grey/10 dark:bg-grey/20 rounded-lg p-2">
            <div className="max-w-3xl mx-auto px-6 bg-primary/10 dark:bg-primary/20 border border-primary/30 rounded-lg p-4">
              <code className="text-primary font-bold text-sm">
                max-w-3xl mx-auto px-6
              </code>
              <span className="text-grey text-sm ml-3">
                — Máx. 768px, centrado
              </span>
            </div>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="max-w-300 mx-auto px-6">
  <div className="max-w-3xl mx-auto px-6">
    {/* Texto largo, artículos, formularios */}
  </div>
</div>`}</code>
          </pre>
        </div>
      </section>

      {/* ── Grilla ───────────────────────────────────────── */}
      <section className="space-y-8">
        <h2>Grilla de 12 columnas</h2>
        <p className="text-grey">
          Equivale al sistema de grilla de Bootstrap 4. Usa{' '}
          <code className="px-1 bg-grey/10 rounded text-sm">
            grid grid-cols-12 gap-6
          </code>{' '}
          como contenedor y{' '}
          <code className="px-1 bg-grey/10 rounded text-sm">col-span-N</code>{' '}
          para cada columna.
        </p>

        {/* col-12 */}
        <div>
          <h3 className="mb-3">col-12 (100%)</h3>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <ColDemo label="col-span-12" />
            </div>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12">Contenido</div>
</div>`}</code>
          </pre>
        </div>

        {/* col-8 + col-4 */}
        <div>
          <h3 className="mb-3">col-8 + col-4</h3>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <ColDemo label="col-span-8" />
            </div>
            <div className="col-span-12 md:col-span-4">
              <ColDemo label="col-span-4" />
            </div>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 md:col-span-8">Principal</div>
  <div className="col-span-12 md:col-span-4">Sidebar</div>
</div>`}</code>
          </pre>
        </div>

        {/* col-7 + col-5 */}
        <div>
          <h3 className="mb-3">col-7 + col-5</h3>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-7">
              <ColDemo label="col-span-7" />
            </div>
            <div className="col-span-12 md:col-span-5">
              <ColDemo label="col-span-5" />
            </div>
          </div>
        </div>

        {/* col-6 + col-6 */}
        <div>
          <h3 className="mb-3">col-6 + col-6 (50% / 50%)</h3>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <ColDemo label="col-span-6" />
            </div>
            <div className="col-span-12 md:col-span-6">
              <ColDemo label="col-span-6" />
            </div>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 md:col-span-6">Mitad izquierda</div>
  <div className="col-span-12 md:col-span-6">Mitad derecha</div>
</div>`}</code>
          </pre>
        </div>

        {/* col-4 x 3 */}
        <div>
          <h3 className="mb-3">col-4 × 3 (tercios)</h3>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <ColDemo label="col-span-4" />
            </div>
            <div className="col-span-12 md:col-span-4">
              <ColDemo label="col-span-4" />
            </div>
            <div className="col-span-12 md:col-span-4">
              <ColDemo label="col-span-4" />
            </div>
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 md:col-span-4">Tercio 1</div>
  <div className="col-span-12 md:col-span-4">Tercio 2</div>
  <div className="col-span-12 md:col-span-4">Tercio 3</div>
</div>`}</code>
          </pre>
        </div>

        {/* col-3 x 4 */}
        <div>
          <h3 className="mb-3">col-3 × 4 (cuartos)</h3>
          <div className="grid grid-cols-12 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="col-span-6 md:col-span-3">
                <ColDemo label="col-span-3" />
              </div>
            ))}
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-12 gap-6">
  <div className="col-span-6 md:col-span-3">Cuarto 1</div>
  <div className="col-span-6 md:col-span-3">Cuarto 2</div>
  <div className="col-span-6 md:col-span-3">Cuarto 3</div>
  <div className="col-span-6 md:col-span-3">Cuarto 4</div>
</div>`}</code>
          </pre>
        </div>

        {/* col-2 x 6 */}
        <div>
          <h3 className="mb-3">col-2 × 6</h3>
          <div className="grid grid-cols-12 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="col-span-6 md:col-span-2">
                <ColDemo label="col-span-2" />
              </div>
            ))}
          </div>
        </div>

        {/* col-1 x 12 */}
        <div>
          <h3 className="mb-3">col-1 × 12</h3>
          <div className="grid grid-cols-12 gap-6">
            {Array.from({ length: 12 }).map((_, n) => (
              <div key={n} className="col-span-1">
                <ColDemo label="1" />
              </div>
            ))}
          </div>
          <pre className="mt-3 text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-12 gap-6">
  {Array.from({ length: 12 }).map((_, i) => (
    <div key={i} className="col-span-1">...</div>
  ))}
</div>`}</code>
          </pre>
        </div>

        {/* Breakpoints */}
        <div>
          <h3 className="mb-3">Breakpoints Mobile First</h3>
          <p className="text-grey mb-4">
            Equivalencia directa con Bootstrap 4. Redimensiona la ventana para
            ver el comportamiento responsivo.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 font-bold">Bootstrap</th>
                  <th className="px-4 py-3 font-bold">Tailwind</th>
                  <th className="px-4 py-3 font-bold">Ancho mínimo</th>
                  <th className="px-4 py-3 font-bold">Dispositivo</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    bs: '(ninguno)',
                    tw: '(ninguno)',
                    px: '< 640px',
                    dev: 'Móvil'
                  },
                  {
                    bs: 'col-sm-N',
                    tw: 'sm:col-span-N',
                    px: '≥ 640px',
                    dev: 'Móvil grande'
                  },
                  {
                    bs: 'col-md-N',
                    tw: 'md:col-span-N',
                    px: '≥ 768px',
                    dev: 'Tablet'
                  },
                  {
                    bs: 'col-lg-N',
                    tw: 'lg:col-span-N',
                    px: '≥ 1024px',
                    dev: 'Desktop'
                  },
                  {
                    bs: 'col-xl-N',
                    tw: 'xl:col-span-N',
                    px: '≥ 1280px',
                    dev: 'Desktop XL'
                  }
                ].map(({ bs, tw, px, dev }, i) => (
                  <tr
                    key={i}
                    className={
                      i % 2 === 0
                        ? 'bg-white dark:bg-black/20'
                        : 'bg-white/60 dark:bg-black/40'
                    }
                  >
                    <td className="px-4 py-3 border-b border-grey/20 font-mono">
                      {bs}
                    </td>
                    <td className="px-4 py-3 border-b border-grey/20 font-mono text-primary">
                      {tw}
                    </td>
                    <td className="px-4 py-3 border-b border-grey/20">{px}</td>
                    <td className="px-4 py-3 border-b border-grey/20 text-grey">
                      {dev}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`{/* Ejemplo responsivo completo */}
<div className="grid grid-cols-12 gap-6">
  <div className="col-span-12 md:col-span-8 lg:col-span-9">
    {/* Contenido principal */}
  </div>
  <div className="col-span-12 md:col-span-4 lg:col-span-3">
    {/* Sidebar */}
  </div>
</div>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}

export default LayoutPage;
