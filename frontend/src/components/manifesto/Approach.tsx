import React from 'react';
import { Users2, Share, Handshake } from 'lucide-react';

export default function Approach() {
  const methods = [
    {
      icon: <Users2 className="h-6 w-6 text-green-500" />,
      title: 'Collaborations',
      description:
        'We team up with universities, research institutes, and R&D labs to tackle projects that have real impact.',
    },
    {
      icon: <Share className="h-6 w-6 text-green-500" />,
      title: 'Openness and Community',
      description:
        'We share what we find, learn, and create at conferences, workshops, and public events, aiming to spark honest conversation and inspire both research and action.',
    },
    {
      icon: <Handshake className="h-6 w-6 text-green-500" />,
      title: 'Partnerships',
      description:
        'Hand-in-hand with charitable non-profit organisations, we promote and develop AI applications that drive tangible improvements — education, healthcare, humanitarian aid, environmental protection, and more.',
    },
  ];

  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {methods.map((method, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-green-50 dark:bg-green-900/30 rounded-full mb-4">
                {method.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">{method.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
