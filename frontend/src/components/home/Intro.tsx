import { ArrowRight, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mx-10">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Sprout className="h-14 w-14 text-green-500" />
              <span>The <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Good</span> AI Lab</span>
            </h1>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                  <div className="prose dark:prose-invert">
                    <p className="text-2xl text-gray-600 dark:text-gray-300">
                      We're a <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">research collective</span> ensuring AI benefits <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">everyone</span>.
                    </p>
                    <p className="text-2xl text-gray-600 dark:text-gray-300 mt-8">
                      Building <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">responsible AI</span> at the intersection of <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">innovation</span> and <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">social good</span>.
                    </p>
                  </div>
                </div>
              </div>
            <div className="flex gap-4 mt-8 mx-6">
              <Link
                to="/manifesto"
                className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/team"
                className="border-2 border-green-500 text-green-500 px-6 py-3 rounded-md hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/3 my-30 lg:mt-8">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[20%] bg-green-500/20 blur-xl"></div>
              <img
                src="/images/seedling.png"
                alt="AI Research"
                className="relative rounded-[20%] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
