import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Intro() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2 mx-10">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The Good AI Lab
              <br />
              <span className="text-green-500">Shaping Our Future</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              AI is changing every aspect of our society, including how we think about ourselves and
              our potential. The question is not just what AI can do, but how it should do it.
            </p>
            <div className="flex gap-4">
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
          <div className="hidden lg:block lg:w-2/5 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-500/20 rounded-lg blur-xl"></div>
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
                alt="AI Research"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
