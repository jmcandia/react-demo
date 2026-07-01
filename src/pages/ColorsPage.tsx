export default function ColorsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2>Paleta de colores</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[
          {
            name: 'Black',
            hex: '#1A1A1A',
            bg: 'bg-black',
            text: 'text-white'
          },
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
          {
            name: 'Grey',
            hex: '#666666',
            bg: 'bg-grey',
            text: 'text-white'
          },
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
