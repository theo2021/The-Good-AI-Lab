import { FlaskConical } from 'lucide-react';
import researchData from '../../data/research.yaml';
import { Research, validateResearch } from '../../types';

const rawPapers = researchData.research;
const researches = rawPapers.filter(validateResearch);

if (researches.length !== rawPapers.length) {
  console.warn(`Filtered out ${rawPapers.length - researches.length} invalid papers`);
}

export default function OurResearch() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid gap-8 mx-4">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <FlaskConical className="h-12 w-12 mx-auto text-green-500 dark:text-green-400 mb-6" />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6">
              Research
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
            We focus on foundational academic AI research. 
            <br />
            We publish in open venues, share our code, and push the field forward.
            </p>
          </div>
          {researches.map((research: Research, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative md:flex">
                <div className="md:absolute md:inset-y-0 md:w-64 h-64 md:h-full">
                  <img
                    className="w-full h-full object-cover"
                    src={research.image}
                    alt={research.title}
                  />
                </div>
                <div className="p-8 md:ml-64">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {research.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{research.abstract}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {research.tags.map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
