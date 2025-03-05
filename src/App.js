import React from 'react';

const App = () => {
  const links = [
    { label: '3. Klasse' },
    { label: '10er-Übergang minus - Vorbereitung für "Schriftliche Subtraktion"', name: '10er-Übergang minus', url: 'https://10erm.vercel.app/' },
    { label: 'Dritte Seite', name: 'Zehner Plus', url: 'https://zehnerplus.vercel.app/' },
    { label: '2. Klasse' },
    { label: 'Vierte Seite', name: '10er-Übergang mit +', url: 'https://obst-one.vercel.app/' },
    { label: 'Fünfte Seite', name: '10er-Übergang mit -', url: 'https://verliebte-zahlen.vercel.app/' },
    { label: 'Sonstiges'},
    { label: '6. Seite', name: 'Schriftliche Addition - 3 Summanden', url: 'https://verliebte-zahlen.vercel.app/' },
    { label: '7. Seite', name: 'Verliebte Zahlen', url: 'https://verliebte-zahlen.vercel.app/' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Meine Seiten</h1>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            {link.label && (!link.name || !link.url) && (
              <span className="my-2 text-lg font-semibold">{link.label}</span>
            )}
            {link.name && link.url && (
              <div className="flex flex-col items-center">
                <span className="mb-2 text-lg font-semibold">{link.label}</span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 transition text-center"
                >
                  <button className="text-lg font-semibold text-blue-500">{link.name}</button>
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;
