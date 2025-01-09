import React from 'react';
import { BookOpen, Link as LinkIcon, Brain, Eye } from 'lucide-react';

interface Paper {
  title: string;
  authors: string[];
  conference: string;
  year: number;
  abstract: string;
  link: string;
  image: string;
  tags: string[];
  category: 'stable-diffusion' | 'adaptive-agents' | 'vision';
}

const papers: Paper[] = [
  {
    title: 'Real-time Adaptation in Autonomous Vehicles: A New Paradigm',
    authors: ['Pier Luigi Dovesi', 'Sarah Chen', 'Michael Roberts'],
    conference: 'NeurIPS 2023',
    year: 2023,
    abstract:
      'We present a novel approach to real-time adaptation in autonomous driving systems, enabling vehicles to respond to unexpected scenarios and environmental changes.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1553260168-69b041873e65?auto=format&fit=crop&w=800&q=80',
    tags: ['Autonomous Driving', 'Adaptive Systems', 'Real-time Learning'],
    category: 'adaptive-agents',
  },
  {
    title: 'Vision Transformers for Dynamic Scene Understanding',
    authors: ['Emma Thompson', 'Pier Luigi Dovesi', 'Alex Kumar'],
    conference: 'CVPR 2023',
    year: 2023,
    abstract:
      'A new architecture for vision transformers that excels at understanding dynamic scenes, with applications in autonomous driving and robotics.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=800&q=80',
    tags: ['Computer Vision', 'Transformers', 'Scene Understanding'],
    category: 'vision',
  },
  {
    title: 'Stable Diffusion: Advancing Text-to-Image Generation',
    authors: ['Pier Luigi Dovesi', 'Michael Roberts'],
    conference: 'ICLR 2024',
    year: 2024,
    abstract:
      'Novel improvements to stable diffusion models, enhancing image quality and semantic understanding while reducing computational requirements.',
    link: '#',
    image:
      'https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=800&q=80',
    tags: ['Stable Diffusion', 'Text-to-Image', 'Deep Learning'],
    category: 'stable-diffusion',
  },
];

export default function Papers() {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const categories = [
    { id: 'stable-diffusion', name: 'Stable Diffusion', icon: Brain },
    { id: 'adaptive-agents', name: 'Adaptive Agents', icon: Eye },
    { id: 'vision', name: 'Computer Vision', icon: BookOpen },
  ];

  const filteredPapers = selectedCategory
    ? papers.filter(paper => paper.category === selectedCategory)
    : papers;

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our Publications
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !selectedCategory
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="grid gap-8 mx-4">
          {filteredPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={paper.image}
                    alt={paper.title}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{paper.conference}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {paper.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {paper.authors.join(', ')}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{paper.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={paper.link}
                    className="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                  >
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Read Paper
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
