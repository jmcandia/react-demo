export default function TypographyPage() {
  return (
    <div className="max-w-4xl mx-auto">
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
    </div>
  );
}
