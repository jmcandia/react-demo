export default function TypographyPage() {
  return (
    <div className="max-w-300 mx-auto px-6">
      <h2>Escala tipográfica</h2>
      <div className="mt-6 space-y-4 border-l-4 border-yellow pl-6">
        <h1>h1 — Título principal (Merriweather Bold, 2.6875rem)</h1>
        <h2>h2 — Subtítulos y textos grandes (Merriweather Bold, 2.1rem)</h2>
        <h3>h3 — Títulos párrafos interiores (Merriweather Bold, 1.5rem)</h3>
        <h4>h4 — Texto bajada (Merriweather Regular, 1.25rem)</h4>
        <h5>h5 — Título 5to nivel (Lato Regular, 1rem)</h5>
        <p>
          p — Cuerpo del texto (Lato Regular, 1rem). Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
        <small>small — Texto pequeño de apoyo (Lato Regular, 0.8125rem)</small>
      </div>

      <h2 className="mt-16">Paleta de colores</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          { name: 'Black', hex: '#1A1A1A', bg: 'bg-black', text: 'text-white' },
          {
            name: 'White',
            hex: '#EEEEEE',
            bg: 'bg-white',
            text: 'text-black border border-grey'
          },
          {
            name: 'Yellow',
            hex: '#FFB800',
            bg: 'bg-yellow',
            text: 'text-black'
          },
          { name: 'Grey', hex: '#666666', bg: 'bg-grey', text: 'text-white' },
          {
            name: 'Primary',
            hex: '#307FE2',
            bg: 'bg-primary',
            text: 'text-white'
          },
          {
            name: 'Secondary',
            hex: '#8BB8E8',
            bg: 'bg-secondary',
            text: 'text-black'
          }
        ].map(({ name, hex, bg, text }) => (
          <div key={name} className={`${bg} ${text} rounded p-4`}>
            <p className="font-bold m-0">{name}</p>
            <small>{hex}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
