import React from "react";
import SectionRow, { SectionRowProps } from "./SectionRow";

interface SectionProps {
  id: string;
  title?: string;
  sections: SectionRowProps[];
}

export default function Section({ id, title, sections }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-24 pb-12"
    >
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center pb-16 opacity-0 animate-fade-in">
            <h2 className="text-5xl font-light text-gray-600 font-playfair">
              {title}
            </h2>
          </div>
        )}

        <div className="max-w-6xl mx-auto space-y-20">
          {sections.map((section, index) => (
            <SectionRow key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}
