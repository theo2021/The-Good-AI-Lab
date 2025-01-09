import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impact() {
  const caseStudies = [
    {
      title: 'Medical Triage Optimization',
      category: 'Healthcare',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      description:
        'Developed an AI-powered triage system that improved patient assessment efficiency by 40% in resource-constrained environments.',
      impact: [
        '40% faster patient assessment',
        'Reduced waiting times',
        'Improved resource allocation',
      ],
      partner: 'Médecins Sans Frontières',
      slug: 'medical-triage-optimization',
    },
    // ...
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Impact</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world applications of AI technology driving positive change in communities
            worldwide.
          </p>
        </div>

        <div className="grid gap-12 mb-20">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={`/impact/${study.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-64 w-full object-cover md:w-96"
                    src={study.image}
                    alt={study.title}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
                    {study.category}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 group-hover:text-green-500">
                    {study.title}
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">{study.description}</p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2 dark:text-white">Key Impacts:</h3>
                    <ul className="space-y-2">
                      {study.impact.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <Target className="h-4 w-4 text-green-500 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 flex items-center text-green-500 font-medium">
                    Read Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                  <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Partner Organization: {study.partner}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
