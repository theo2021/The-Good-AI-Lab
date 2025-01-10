import { useEffect } from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Paper, validatePaper } from '../../types';
import communityPapersData from '../../data/community-papers.yaml';

const papers = communityPapersData.papers.filter(validatePaper);

export default function CommunityPapers() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#community') {
      const element = document.getElementById('community');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
          {papers.map((paper: Paper, index: number) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
            >
              <img className="w-full h-48 object-cover" src={paper.image} alt={paper.title} />
              <div className="p-6">
                <p className="text-sm text-green-600 dark:text-green-400 mb-2">
                  {paper.conference} • {paper.year}
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
