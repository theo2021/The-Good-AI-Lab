import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Sprout className="h-8 w-8 text-green-500" />
            <span className="ml-2 text-xl font-semibold dark:text-white">The Good AI Lab</span>
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-green-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/manifesto" className="text-gray-700 dark:text-gray-200 hover:text-green-500">
              Manifesto
            </Link>
            <Link to="/team" className="text-gray-700 dark:text-gray-200 hover:text-green-500">
              Team
            </Link>
            <Link to="/research" className="text-gray-700 dark:text-gray-200 hover:text-green-500">
              Research
            </Link>
            <ThemeToggle />
            <Link
              to="https://discord.gg/54MS3tPXEQ"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/manifesto"
                className="block text-gray-700 dark:text-gray-200 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Manifesto
              </Link>
              <Link
                to="/team"
                className="block text-gray-700 dark:text-gray-200 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/research"
                className="block text-gray-700 dark:text-gray-200 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Research
              </Link>
              <div className="py-2">
                <ThemeToggle />
              </div>
              <Link
                to="https://discord.gg/54MS3tPXEQ"
                className="block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
