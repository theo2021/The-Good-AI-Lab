import React from 'react';
import { BookOpen, Link as LinkIcon, Eye } from 'lucide-react';
import papersData from '../../data/papers.yaml';
import { Paper, validatePaper } from '../../types';

const rawPapers = papersData.papers;
const papers = rawPapers.filter(validatePaper);

if (papers.length !== rawPapers.length) {
  console.warn(`Filtered out ${rawPapers.length - papers.length} invalid papers`);
}

export default function Papers() {
  const [selectedCategory, setSelectedCategory] = React.useState<Paper['category'] | null>(null);

  const categories = [
    // { id: 'stable-diffusion' as const, name: 'Stable Diffusion', icon: Brain },
    { id: 'adaptive-agents' as const, name: 'Adaptive Agents', icon: Eye },
    { id: 'vision' as const, name: 'Computer Vision', icon: BookOpen },
  ];

  const filteredPapers = selectedCategory
    ? papers.filter((paper: Paper) => paper.category === selectedCategory)
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
          {filteredPapers.map((paper: Paper, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative md:flex">
                <div className="md:absolute md:inset-y-0 md:w-96 h-64 md:h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={paper.image}
                    alt={paper.title}
                  />
                </div>
                <div className="p-8 md:ml-96">
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
                    {paper.tags.map((tag: string, idx: number) => (
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
