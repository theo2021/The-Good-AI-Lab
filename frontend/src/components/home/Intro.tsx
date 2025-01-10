import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 py-8 sm:py-12 lg:py-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-0">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-6 lg:space-y-16">
            <h1 className="text-3xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 lg:gap-6">
              <span className="text-center lg:text-left">The <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Good</span> AI Lab</span>
            </h1>
            <div className="prose dark:prose-invert space-y-4 lg:space-y-12">
              <p className="text-xl lg:text-3xl text-gray-600 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                We are an independent AI lab working on foundational{' '}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                  AI research
                </span>{' '}
                and innovation projects for{' '}
                <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent font-bold">
                  social good
                </span>.
              </p>
            </div>
            
            <div className="block lg:hidden w-full my-6">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute -inset-4 rounded-[20%] bg-green-500/20 blur-xl"></div>
                <img
                  src="/images/intro.webp"
                  alt="AI Research"
                  className="relative rounded-[20%] shadow-2xl"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8 mt-6 lg:mt-16">
              <Link
                to="/manifesto"
                className="w-full sm:w-auto bg-green-500 text-white px-6 lg:px-10 py-2.5 lg:py-4 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center text-base lg:text-xl"
              >
                Learn More
                <ArrowRight className="ml-2 lg:ml-3 h-5 w-5 lg:h-6 lg:w-6" />
              </Link>
              <Link
                to="/team"
                className="w-full sm:w-auto border-2 border-green-500 text-green-500 px-6 lg:px-10 py-2.5 lg:py-4 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-center text-base lg:text-xl"
              >
                Meet the Team
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[5%] bg-green-500/20 blur-xl"></div>
              <img
                src="/images/intro.webp"
                alt="AI Research"
                className="relative rounded-[5%] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
