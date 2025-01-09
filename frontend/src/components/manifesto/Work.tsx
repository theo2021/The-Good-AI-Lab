import React from 'react';
import { Microscope, Users, HandHeart } from 'lucide-react';

export default function Work() {
  const areas = [
    {
      icon: <Microscope className="h-8 w-8 text-green-500" />,
      title: 'AI Lab',
      description:
        'We focus on foundational academic AI research. We publish in open venues, share our code, and push the field forward.',
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: 'Good AI',
      description:
        'We call out biases, support frameworks that keep AI honest, and build fairness, transparency, and accountability into every model we touch.',
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">What We Do</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
