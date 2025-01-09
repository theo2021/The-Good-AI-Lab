import { Linkedin, BookOpenCheck, Users } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Pier Luigi Dovesi',
      role: 'Founder & Lead Researcher',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Originally from Bologna, with a long history of social and political engagement. AI researcher and engineer collaborating with various universities including UniBo, KTH, University of Toronto, TU Munich, and ETH Zurich.',
      expertise: ['AI Research', 'Social Impact', 'Project Management'],
      links: {
        scholar: 'https://scholar.google.com',
        linkedin: 'https://linkedin.com',
      },
    },
  ];

  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="h-12 w-12 mx-auto text-green-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collective of scientists, professors, engineers, and researchers dedicated to making
            AI more democratic and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img className="h-64 w-full object-cover" src={member.image} alt={member.name} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-green-400 font-medium">{member.role}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={member.links.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                  >
                    <BookOpenCheck className="h-5 w-5 mr-1" />
                    Scholar
                  </a>
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                  >
                    <Linkedin className="h-5 w-5 mr-1" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
