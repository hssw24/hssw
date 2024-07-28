import React from 'react';

const App = () => {
  const links = [
    { name: 'Names Counter', url: 'https://names-counter-2a.vercel.app/' },
    { name: 'Silben Auswahl', url: 'https://silbenauswahl.vercel.app/' },
    { name: 'Zehner Plus', url: 'https://zehnerplus.vercel.app/' },
    { name: 'Obst One', url: 'https://obst-one.vercel.app/' },
    { name: 'Verliebte Zahlen', url: 'https://verliebte-zahlen.vercel.app/' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Meine Seiten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white p-6 rounded-lg shadow-md hover:bg-gray-50 transition"
          >
            <button className="text-lg font-semibold text-blue-500">{link.name}</button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
