import FeatherIcon from 'feather-icons-react';

export default function BoxesPage() {
  return (
    <div className="max-w-300 mx-auto px-6">
      <h2>Cajas y Bloques</h2>
      <div className="mt-6 space-y-12">
        {/* ── 1. Box foto + link — 4 columnas ─────────────────── */}
        <div>
          <h3 className="mb-1">Box con foto + link — 4 columnas</h3>
          <p className="text-grey mb-4">
            Grilla de 4 tarjetas con imagen de fondo, capa oscura, ícono,
            etiqueta y bajada.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 mb-4">
            {[
              {
                label: 'Lorem',
                desc: 'Ipsum dolor sit amet consectetur',
                icon: 'bell',
                seed: 1
              },
              {
                label: 'Ipsum',
                desc: 'Adipiscing elit sed do eiusmod',
                icon: 'users',
                seed: 2
              },
              {
                label: 'Dolor',
                desc: 'Tempor incididunt ut labore et',
                icon: 'book-open',
                seed: 3
              },
              {
                label: 'Sit Amet',
                desc: 'Dolore magna aliqua ut enim',
                icon: 'map-pin',
                seed: 4
              }
            ].map(({ label, desc, icon, seed }) => (
              <a
                key={label}
                href="#"
                className="relative block overflow-hidden group h-48"
              >
                <img
                  src={`https://picsum.photos/600/400?random=${seed}`}
                  alt={label}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-2">
                    <FeatherIcon icon={icon} size={14} className="text-white" />
                  </div>
                  <p className="text-white text-xs font-bold uppercase m-0">
                    {label}
                  </p>
                  <h4 className="text-white m-0 text-sm">{desc}</h4>
                </div>
              </a>
            ))}
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<a href="#" className="relative block overflow-hidden group h-48">
  <img src="https://picsum.photos/600/400?random=1"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-2">
      <FeatherIcon icon="bell" size={14} className="text-white" />
    </div>
    <p className="text-white text-xs font-bold uppercase m-0">Lorem</p>
    <h4 className="text-white m-0 text-sm">Ipsum dolor sit amet consectetur</h4>
  </div>
</a>`}</code>
          </pre>
        </div>

        {/* ── 2. Box foto + link — 3 columnas ─────────────────── */}
        <div>
          <h3 className="mb-1">Box con foto + link — 3 columnas</h3>
          <p className="text-grey mb-4">
            Grilla de 3 tarjetas con imagen, capa oscura e ícono de acción.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
            {[
              {
                label: 'Lorem',
                desc: 'Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod',
                icon: 'link',
                seed: 5
              },
              {
                label: 'Ipsum',
                desc: 'Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim',
                icon: 'download',
                seed: 6
              },
              {
                label: 'Dolor',
                desc: 'Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex',
                icon: 'file',
                seed: 7
              }
            ].map(({ label, desc, icon, seed }) => (
              <a
                key={label}
                href="#"
                className="relative block overflow-hidden group h-56"
              >
                <img
                  src={`https://picsum.photos/600/400?random=${seed}`}
                  alt={desc}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-2">
                    <FeatherIcon icon={icon} size={14} className="text-white" />
                  </div>
                  <p className="text-white text-xs font-bold uppercase m-0">
                    {label}
                  </p>
                  <h4 className="text-white m-0 text-sm">{desc}</h4>
                </div>
              </a>
            ))}
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<a href="#" className="relative block overflow-hidden group h-56">
  <img src="https://picsum.photos/600/400?random=5"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center mb-2">
      <FeatherIcon icon="download" size={14} className="text-white" />
    </div>
    <p className="text-white text-xs font-bold uppercase m-0">Ipsum</p>
    <h4 className="text-white m-0 text-sm">Tempor incididunt ut labore et dolore magna</h4>
  </div>
</a>`}</code>
          </pre>
        </div>

        {/* ── 3. Box foto + link — Big ─────────────────────────── */}
        <div>
          <h3 className="mb-1">Box con foto + link — Big</h3>
          <p className="text-grey mb-4">
            Banner de ancho completo con capa oscura, texto destacado y CTA.
          </p>
          <a
            href="#"
            className="relative block overflow-hidden group h-72 mb-4"
          >
            <img
              src="https://picsum.photos/1920/400?random=8"
              alt="Lorem ipsum"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-10">
              <div className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center mb-4">
                <FeatherIcon icon="link" size={14} className="text-black" />
              </div>
              <p className="text-white font-bold uppercase text-sm m-0">
                Lorem ipsum dolor sit amet
              </p>
              <h2 className="text-white my-2">
                Consectetur adipiscing elit sed do eiusmod tempor.
              </h2>
              <p className="text-white/80 m-0 mb-4">
                Incididunt ut labore et dolore magna aliqua ut enim ad minim
                veniam.
              </p>
              <span className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2 rounded-lg w-fit">
                Quis nostrud <FeatherIcon icon="chevron-right" size={18} />
              </span>
            </div>
          </a>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<a href="#" className="relative block overflow-hidden group h-72">
  <img src="https://picsum.photos/1920/400?random=8"
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
  <div className="absolute inset-0 bg-black/60 flex flex-col justify-center px-10">
    <div className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center mb-4">
      <FeatherIcon icon="link" size={14} className="text-black" />
    </div>
    <p className="text-white font-bold uppercase text-sm m-0">Lorem ipsum dolor sit amet</p>
    <h2 className="text-white my-2">Consectetur adipiscing elit sed do eiusmod tempor.</h2>
    <p className="text-white/80 m-0 mb-4">Incididunt ut labore et dolore magna aliqua.</p>
    <span className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2 rounded-lg w-fit">
      Quis nostrud <FeatherIcon icon="chevron-right" size={18} />
    </span>
  </div>
</a>`}</code>
          </pre>
        </div>

        {/* ── 4. Box negro + listado ───────────────────────────── */}
        <div>
          <h3 className="mb-1">Box negro + título + botón + listado</h3>
          <p className="text-grey mb-4">
            Panel izquierdo oscuro con CTA y grilla de links a la derecha sobre
            imagen de fondo.
          </p>
          <div className="relative overflow-hidden mb-4">
            <img
              src="https://picsum.photos/1920/300?random=9"
              alt="Lorem ipsum"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="relative flex flex-col lg:flex-row min-h-48">
              <div className="bg-black/90 lg:w-1/4 p-8 flex flex-col justify-center gap-4">
                <h2 className="text-white m-0">Lorem Ipsum</h2>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-fit hover:opacity-90 transition-opacity"
                >
                  Ver más <FeatherIcon icon="chevron-right" size={16} />
                </a>
              </div>
              <div className="bg-black/70 lg:w-3/4 p-8">
                <p className="text-white font-bold uppercase text-sm mb-4">
                  Dolor sit amet
                </p>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 list-none m-0 p-0">
                  {[
                    'Lorem',
                    'Ipsum',
                    'Dolor',
                    'Sit',
                    'Amet',
                    'Consectetur',
                    'Adipiscing',
                    'Elit'
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white hover:text-yellow transition-colors text-sm flex items-center gap-1"
                      >
                        <FeatherIcon icon="chevron-right" size={14} /> {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="relative overflow-hidden">
  <img src="https://picsum.photos/1920/300?random=9"
    className="w-full h-full object-cover absolute inset-0" />
  <div className="relative flex flex-col lg:flex-row min-h-48">
    <div className="bg-black/90 lg:w-1/4 p-8 flex flex-col justify-center gap-4">
      <h2 className="text-white m-0">Lorem Ipsum</h2>
      <a href="#" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-fit">
        Ver más <FeatherIcon icon="chevron-right" size={16} />
      </a>
    </div>
    <div className="bg-black/70 lg:w-3/4 p-8">
      <p className="text-white font-bold uppercase text-sm mb-4">Dolor sit amet</p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 list-none m-0 p-0">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-white hover:text-yellow text-sm flex items-center gap-1">
              <FeatherIcon icon="chevron-right" size={14} /> {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>`}</code>
          </pre>
        </div>

        {/* ── 5. Box negro derecha + bajada + botón ───────────── */}
        <div>
          <h3 className="mb-1">
            Box negro a la derecha + título + bajada + botón
          </h3>
          <p className="text-grey mb-4">
            Imagen de fondo con panel oscuro anclado a la derecha.
          </p>
          <div className="relative overflow-hidden h-64 mb-4">
            <img
              src="https://picsum.photos/1920/400?random=10"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-end">
              <div className="bg-black/90 w-full lg:w-1/2 p-8 flex flex-col justify-center gap-3">
                <h2 className="text-white m-0">Lorem Ipsum Dolor</h2>
                <p className="text-white/80 m-0">
                  Sit amet consectetur adipiscing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-fit hover:opacity-90 transition-opacity"
                >
                  Ut enim <FeatherIcon icon="chevron-right" size={16} />
                </a>
              </div>
            </div>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="relative overflow-hidden h-64">
  <img src="https://picsum.photos/1920/400?random=10"
    className="w-full h-full object-cover" />
  <div className="absolute inset-0 flex justify-end">
    <div className="bg-black/90 w-full lg:w-1/2 p-8 flex flex-col justify-center gap-3">
      <h2 className="text-white m-0">Lorem Ipsum Dolor</h2>
      <p className="text-white/80 m-0">Sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
      <a href="#" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-fit">
        Ut enim <FeatherIcon icon="chevron-right" size={16} />
      </a>
    </div>
  </div>
</div>`}</code>
          </pre>
        </div>

        {/* ── 6. Box blanco texto + botón ─────────────────────── */}
        <div>
          <h3 className="mb-1">Box blanco con texto + botón</h3>
          <p className="text-grey mb-4">
            Tarjetas con borde, título, descripción y CTA. Responsive en 2
            columnas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                titulo: 'Lorem ipsum dolor',
                desc: 'Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                cta: 'Ut enim ad'
              },
              {
                titulo: 'Consectetur adipiscing',
                desc: 'Minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis.',
                cta: 'Aute irure'
              }
            ].map(({ titulo, desc, cta }) => (
              <div
                key={titulo}
                className="border border-grey/30 dark:border-grey/50 rounded-lg p-6 flex flex-col gap-4 bg-white dark:bg-black/40"
              >
                <h4 className="font-bold m-0">{titulo}</h4>
                <p className="text-grey m-0">{desc}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-fit hover:opacity-90 transition-opacity text-sm"
                >
                  {cta} <FeatherIcon icon="chevron-right" size={16} />
                </a>
              </div>
            ))}
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="border border-grey/30 dark:border-grey/50 rounded-lg p-6 flex flex-col gap-4 bg-white dark:bg-black/40">
  <h4 className="font-bold m-0">Lorem ipsum dolor</h4>
  <p className="text-grey m-0">Sit amet consectetur adipiscing elit sed do eiusmod tempor.</p>
  <a href="#" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-4 py-2 rounded-lg w-fit text-sm">
    Ut enim ad <FeatherIcon icon="chevron-right" size={16} />
  </a>
</div>`}</code>
          </pre>
        </div>

        {/* ── 7. Box blanco / negro mitad ─────────────────────── */}
        <div>
          <h3 className="mb-1">Box blanco / negro</h3>
          <p className="text-grey mb-4">
            Dos paneles contrastantes: uno oscuro con CTA y uno claro con texto
            informativo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-grey/30 dark:border-grey/50 rounded-lg overflow-hidden mb-4">
            <div className="bg-black p-8 flex flex-col items-center justify-center text-center gap-4">
              <h3 className="text-white m-0">Lorem ipsum dolor sit amet</h3>
              <p className="text-white/80 m-0">
                Consectetur adipiscing elit sed do eiusmod tempor incididunt.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Ut labore <FeatherIcon icon="chevron-right" size={16} />
              </a>
            </div>
            <div className="bg-white dark:bg-black/40 p-8 flex flex-col items-center justify-center text-center gap-3">
              <h4 className="m-0">
                Dolore magna aliqua ut enim ad{' '}
                <strong>minim veniam quis nostrud</strong> exercitation ullamco
                laboris.
              </h4>
              <h5 className="text-grey m-0">
                Nisi ut aliquip · Ex ea commodo · Consequat duis
              </h5>
            </div>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-1 sm:grid-cols-2 border border-grey/30 rounded-lg overflow-hidden">
  <div className="bg-black p-8 flex flex-col items-center justify-center text-center gap-4">
    <h3 className="text-white m-0">Lorem ipsum dolor sit amet</h3>
    <p className="text-white/80 m-0">Consectetur adipiscing elit sed do eiusmod.</p>
    <a href="#" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2 rounded-lg">
      Ut labore <FeatherIcon icon="chevron-right" size={16} />
    </a>
  </div>
  <div className="bg-white dark:bg-black/40 p-8 flex flex-col items-center justify-center text-center gap-3">
    <h4 className="m-0">Dolore magna aliqua ut enim ad <strong>minim veniam.</strong></h4>
    <h5 className="text-grey m-0">Nisi ut aliquip · Ex ea commodo</h5>
  </div>
</div>`}</code>
          </pre>
        </div>

        {/* ── 8. Box color primario + texto + imagen ───────────── */}
        <div>
          <h3 className="mb-1">Box color escuela + texto + imagen</h3>
          <p className="text-grey mb-4">
            Dos columnas: imagen a la izquierda y panel con color de escuela a
            la derecha.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-lg mb-4">
            <img
              src="https://picsum.photos/800/400?random=11"
              alt="Lorem ipsum"
              className="w-full h-full object-cover"
            />
            <div className="bg-primary p-8 flex flex-col justify-center gap-4">
              <h3 className="text-white m-0">Lorem ipsum dolor sit amet</h3>
              <p className="text-white/90 m-0">
                Consectetur adipiscing elit sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </p>
            </div>
          </div>
          <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
            <code>{`<div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden rounded-lg">
  <img src="https://picsum.photos/800/400?random=11"
    className="w-full h-full object-cover" />
  <div className="bg-primary p-8 flex flex-col justify-center gap-4">
    <h3 className="text-white m-0">Lorem ipsum dolor sit amet</h3>
    <p className="text-white/90 m-0">Consectetur adipiscing elit sed do eiusmod tempor.</p>
  </div>
</div>`}</code>
          </pre>
        </div>
      </div>
      <h2>Tarjetas</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { titulo: 'Lorem ipsum', acento: 'bg-primary' },
          { titulo: 'Lorem ipsum', acento: 'bg-yellow' },
          { titulo: 'Lorem ipsum', acento: 'bg-secondary' }
        ].map(({ titulo, acento }) => (
          <div
            key={titulo}
            className="rounded-lg p-6 space-y-2 transition-colors duration-300 bg-white dark:bg-black/40 border border-grey/30 dark:border-grey/50"
          >
            <div className={`w-10 h-1 mb-4 ${acento}`} />
            <h3>{titulo}</h3>
            <p className="text-grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vero deserunt reiciendis harum cupiditate perspiciatis? Dolor quo
              exercitationem, id, consectetur aut vel esse excepturi labore
              harum ab, quas rerum eaque.
            </p>
            <a
              href="#"
              className="text-primary font-bold text-sm hover:underline"
            >
              Ver más →
            </a>
          </div>
        ))}
      </div>
      <pre className="text-sm rounded-lg p-4 overflow-x-auto bg-white dark:bg-black/40 text-grey">
        <code>{`<div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
  <div class="rounded-lg p-6 space-y-2 transition-colors duration-300 bg-white dark:bg-black/40 border border-grey/30 dark:border-grey/50">
    <div class="w-10 h-1 mb-4 bg-primary"></div>
    <h3>Lorem ipsum</h3>
      <p class="text-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero deserunt reiciendis harum cupiditate perspiciatis?
        Dolor quo exercitationem, id, consectetur aut vel esse excepturi labore harum ab, quas rerum eaque.
      </p>
      <a href="#" class="text-primary font-bold text-sm hover:underline">Ver más →</a>
    </div>
  <div class="rounded-lg p-6 space-y-2 transition-colors duration-300 bg-white dark:bg-black/40 border border-grey/30 dark:border-grey/50">
    <div class="w-10 h-1 mb-4 bg-yellow"></div>
    <h3>Lorem ipsum</h3>
    <p class="text-grey">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero deserunt reiciendis harum cupiditate perspiciatis?
      Dolor quo exercitationem, id, consectetur aut vel esse excepturi labore harum ab, quas rerum eaque.
    </p>
    <a href="#" class="text-primary font-bold text-sm hover:underline">Ver más →</a>
  </div>
  <div class="rounded-lg p-6 space-y-2 transition-colors duration-300 bg-white dark:bg-black/40 border border-grey/30 dark:border-grey/50">
    <div class="w-10 h-1 mb-4 bg-secondary"></div>
    <h3>Lorem ipsum</h3>
    <p class="text-grey">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vero deserunt reiciendis harum cupiditate perspiciatis?
      Dolor quo exercitationem, id, consectetur aut vel esse excepturi labore harum ab, quas rerum eaque.
    </p>
    <a href="#" class="text-primary font-bold text-sm hover:underline">Ver más →</a>
  </div>
</div>`}</code>
      </pre>
    </div>
  );
}
