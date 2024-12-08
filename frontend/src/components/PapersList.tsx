import React from "react";
import { Paper } from "@/types/settings";

interface PapersListProps {
  papers: Paper[];
}

export default function PapersList({ papers }: PapersListProps) {
  return (
    <div className="space-y-8">
      {papers.map((paper, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
            {paper.title}
          </h3>
          <p className="text-gray-700 mb-2 font-medium">{paper.authors}</p>
          <p className="text-gray-600 text-sm mb-4 italic">{paper.venue}</p>

          <div className="paper-links flex gap-4">
            {paper.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 text-sm font-medium"
              >
                {link.text}
                <i className={`fa-regular fa-${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
