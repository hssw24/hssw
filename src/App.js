import React from 'react';

const App = () => {
  const links = [
    { label: '3. Klasse' },
    { label: '10er-Übergang minus - Vorbereitung für "Schriftliche Subtraktion"', name: '10erm', url: 'https://10erm.vercel.app/' },
    { label: 'Schriftliche Subtraktion mit Minuend und Subtrahend', name: 'ssub1s', url: 'https://ssub1s.vercel.app/' },
    { label: 'Runden auf 10er', name: 'rund10', url: 'https://rund10.vercel.app/' },
    { label: 'Runden auf 100er', name: 'rund100', url: 'https://rund100.vercel.app/' },
    { label: 'Schriftliche Addition mit 3 Summanden - 100er und 10er', name: 'saxx3s', url: 'https://saxx3s.vercel.app/' },
    { label: 'Schriftliche Addition mit 2 Summanden - 100er uns 10er', name: 'saxx23', url: 'https://saxx23.vercel.app/' },
    { label: 'Schriftliche Addition mit 2 Summanden - 100er', name: 'saxx-blush', url: 'https://saxx-blush.vercel.app/' },
    { label: 'Vorlage', name: '', url: '' },
    { label: 'Bei Fehlern bitte eine Nachricht über SDUI senden.', name: '', url: '' },
    { label: 'Vorlage', name: '', url: '' },
    { label: '2. Klasse' },
    { label: '', name: '', url: '' },
    { label: 'Sonstiges'},
    { label: '', name: '', url: '' },


    { label: 'Vorlage', name: '', url: '' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h5 className="text-4xl font-bold mb-8"></h5>
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
                  <button className="text-lg font-semibold bg-lightgreen text-blue-500">{link.name}</button>
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
