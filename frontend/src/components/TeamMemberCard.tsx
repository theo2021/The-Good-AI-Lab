// components/TeamMemberCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

const placeholder =
  "data:image/svg+xml;base64," +
  btoa(`
<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="64" cy="64" r="64" fill="#555"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M64 32C54.0589 32 46 40.0589 46 50C46 59.9411 54.0589 68 64 68C73.9411 68 82 59.9411 82 50C82 40.0589 73.9411 32 64 32ZM64 72C48.1929 72 32.7363 81.8239 32.1362 97.214C31.8891 103.703 37.165 109 43.66 109H84.34C90.835 109 96.1109 103.703 95.8638 97.214C95.2637 81.8239 79.8071 72 64 72Z" fill="#ccc"/>
</svg>
`);

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  const { name, title, bio, links } = member;
  const imageSrc = member.imageSrc || placeholder;

  return (
    <motion.div
      className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow flex flex-col items-center select-none"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-32 h-32 mb-4 select-none">
        <Image
          src={imageSrc}
          alt={name}
          className="rounded-full object-cover"
          fill
        />
      </div>
      <h3 className="text-lg text-gray-500 font-semibold select-none">
        {name}
      </h3>
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      {bio && <p className="text-sm text-center text-gray-600 mb-4">{bio}</p>}
      {links && (
        <div className="flex space-x-4">
          {links.website && (
            <a
              href={links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Website
            </a>
          )}
          {links.linkedin && (
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              LinkedIn
            </a>
          )}
          {links.twitter && (
            <a
              href={links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Twitter
            </a>
          )}
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
