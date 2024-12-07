import React from "react";
import SectionRow, { SectionRowProps } from "./SectionRow";

interface SectionProps {
  id: string;
  title: string;
  sections: SectionRowProps[];
}

export default function Section({ id, title, sections }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-32 opacity-0 animate-fade-in">
          <h2 className="text-5xl font-light text-gray-800 font-playfair">
            {title}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-40">
          {sections.map((section, index) => (
            <SectionRow key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}
