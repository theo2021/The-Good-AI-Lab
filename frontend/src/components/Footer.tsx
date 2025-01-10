import { Link } from 'react-router-dom';
import { Sprout } from 'lucide-react';

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
              <span className="ml-2 text-lg font-semibold text-white">AI for Good</span>
            </div>
            <p className="text-sm">
              Building a better future through ethical AI development and community engagement.
            </p>
          </div>
          {[
            {
              title: 'About',
              links: [
                { name: 'Organization', to: '/manifesto' },
                { name: 'Team', to: '/team' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { name: 'Research', to: '/research' },
                // { name: 'Community Papers', to: '/research#community' },
              ],
            },
            {
              title: 'Get Involved',
              links: [{ name: 'Join us on Discord', to: 'https://discord.gg/54MS3tPXEQ' }],
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
          © {new Date().getFullYear()} AI for Good. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
