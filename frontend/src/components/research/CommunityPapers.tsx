import React from 'react';
import { Users, ExternalLink } from 'lucide-react';

interface CommunityPaper {
  title: string;
  authors: string[];
  institution: string;
  year: number;
  abstract: string;
  link: string;
  image: string;
}

const communityPapers: CommunityPaper[] = [
  {
    title: 'Efficient Neural Networks for Edge Computing in Autonomous Systems',
    authors: ['Maria Garcia', 'John Smith'],
    institution: 'ETH Zurich',
    year: 2023,
    abstract:
      'A novel approach to optimizing neural networks for edge devices, enabling real-time processing in autonomous systems.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Multi-Modal Learning for Robust Perception',
    authors: ['David Chen', 'Sarah Williams'],
    institution: 'University of Toronto',
    year: 2023,
    abstract:
      'Investigating the integration of multiple sensory inputs for more robust perception in autonomous systems.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
];

export default function CommunityPapers() {
  return (
    <div className="py-16 bg-white dark:bg-gray-800" id="community">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Users className="h-8 w-8 text-green-500" />
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            Community Papers
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {communityPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            >
              <img className="w-full h-48 object-cover" src={paper.image} alt={paper.title} />
              <div className="p-6">
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                  {paper.institution} • {paper.year}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {paper.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  {paper.authors.join(', ')}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{paper.abstract}</p>
                <a
                  href={paper.link}
                  className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Publication
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
