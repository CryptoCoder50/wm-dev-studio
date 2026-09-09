'use client'

import { apps } from '../data/apps';

export default function AppsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {apps.map((app) => (
        <div key={app.id} className="border rounded-lg p-6 shadow-md">
          <div className="text-4xl mb-2">{app.icon}</div>
          <h2 className="text-xl font-bold">{app.title}</h2>
          <p className="text-gray-600 mb-4">{app.description}</p>
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Launch App →
          </a>
        </div>
      ))}
    </div>
  );
}