import { Linkedin, BookOpenCheck, Users } from 'lucide-react';
import { TeamMember, validateTeamMember } from '../types';
import teamData from '../data/team.yaml';

const members = teamData.members.filter(validateTeamMember);

export default function Team() {
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
          {members.map((member: TeamMember, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="relative">
                <img className="h-64 w-full object-cover" src={member.image} alt={member.name} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{member.name}</h3>
                  <p className="text-green-400 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{member.role}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-10">{member.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill: string, idx: number) => (
                      <span
                        key={idx}
                        className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {member.links.scholar && (
                    <a
                      href={member.links.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                    >
                      <BookOpenCheck className="h-5 w-5 mr-1" />
                      Scholar
                    </a>
                  )}
                  {member.links.linkedin && (
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400"
                    >
                      <Linkedin className="h-5 w-5 mr-1" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
