import { ArrowRight, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="h-screen flex items-center bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="flex-1 space-y-8 lg:space-y-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-8 flex items-center gap-3 lg:gap-6">
              <Sprout className="h-10 w-10 lg:h-16 lg:w-16 text-green-500" />
              <span>The <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Good</span> AI Lab</span>
            </h1>
              <div className="prose dark:prose-invert space-y-6 lg:space-y-12">
                <p className="text-2xl sm:text-xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-normal text-center lg:text-left">
                  We're a{' '}
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                    research collective
                  </span>{' '}
                  ensuring AI benefits{' '}
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                    everyone
                  </span>.
                </p>
                <p className="text-2xl sm:text-xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed sm:leading-normal text-center lg:text-left">
                  Building{' '}
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                    responsible AI
                  </span>{' '}
                  at the intersection of{' '}
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                    innovation
                  </span>{' '}
                  and{' '}
                  <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                    social good
                  </span>.
                </p>
              </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-8 mt-8 lg:mt-16">
              <Link
                to="/manifesto"
                className="w-auto bg-green-500 text-white px-8 lg:px-10 py-3 lg:py-4 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center text-lg lg:text-xl"
              >
                Learn More
                <ArrowRight className="ml-2 lg:ml-3 h-5 w-5 lg:h-6 lg:w-6" />
              </Link>
              <Link
                to="/team"
                className="w-auto border-2 border-green-500 text-green-500 px-8 lg:px-10 py-3 lg:py-4 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-center text-lg lg:text-xl"
              >
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="hidden lg:block w-1/3 my-30 lg:mt-8">
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
