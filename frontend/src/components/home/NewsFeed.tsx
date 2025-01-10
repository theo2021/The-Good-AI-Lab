import React from 'react';
import { Newspaper } from 'lucide-react';
import { NewsItem, validateNewsItem } from '../../types';
import newsData from '../../data/news.yaml';

const newsItems = newsData.news.filter(validateNewsItem);

export default function NewsFeed() {
  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Newspaper className="h-8 w-8 text-green-500" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">In the News</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {newsItems.map((item: NewsItem, index: number) => (
            <a
              key={index}
              href={item.link}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-600 dark:text-green-400 font-medium">{item.source}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}