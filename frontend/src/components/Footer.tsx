import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';
import { mailto } from '../types';

export default function Footer() {
  const handleClick = (to: string) => {
    if (to.includes('#')) {
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sprout className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-lg font-semibold text-white">The <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Good</span> AI Lab</span>
            </div>
            <p className="text-xs">
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
          {[
            {
              title: 'About',
              links: [
                { name: 'Manifesto', to: '/manifesto' },
                { name: 'Team', to: '/team' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { name: 'Research', to: '/research' },
                { name: 'Community Papers', to: '/research#community' },
              ],
            },
            {
              title: 'Get Involved',
              links: [{ name: 'Contact us', to: mailto }],
            },
          ].map((section, index) => (
            <div key={index} className="mx-10">
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      to={link.to} 
                      className="hover:text-green-500 transition-colors"
                      onClick={() => handleClick(link.to)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} The Good AI Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
