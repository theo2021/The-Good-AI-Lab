import OurResearch from '../components/research/OurResearch';
import CommunityPapers from '../components/research/CommunityPapers';
import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-green-50/10 to-transparent dark:from-green-950/10 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <BookOpen className="h-12 w-12 mx-auto text-green-500 dark:text-green-400 mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-6">
            Research at The Good AI Lab
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
          We focus on foundational academic AI research. 
          <br />
          We publish in open venues, share our code, and push the field forward.
          </p>
        </div>
      </div>
      <OurResearch />
      <CommunityPapers />
    </div>
  );
}
