import React from 'react';

export default function Clients() {
  const clients = [
    {
      logo: 'logo-amazon.svg',
      alt: 'logo-amazon',
    },
    {
      logo: 'logo-microsoft.svg',
      alt: 'logo-microsoft',
    },
    {
      logo: 'logo-tesla.svg',
      alt: 'logo-tesla',
    },
    {
      logo: 'logo-google.svg',
      alt: 'logo-google',
    },
    {
      logo: 'logo-facebook.svg',
      alt: 'logo-facebook',
    },
  ];
  return (
    <div className="flex justify-center">
      {clients.map((client, index) => (
        <div className="w-1/6" key={index}>
          <img
            src={`/images/${client.logo}`}
            alt={client.alt}
            className="mx-auto"
          />
        </div>
      ))}
    </div>
  );
}
