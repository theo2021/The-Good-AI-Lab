import React from "react";

export interface SectionRowProps {
  subtitle?: string; // Optional subtitle displayed as a <span>
  title?: string; // Optional main title displayed as a <h3>
  paragraph: string | string[]; // Paragraph(s), either a single string or an array of strings
  delay?: number; // Optional animation delay in milliseconds
}

export default function SectionRow({
  subtitle: subtitle,
  title,
  paragraph,
  delay = 100,
}: SectionRowProps) {
  return (
    <div
      className={`opacity-0 animate-fade-slide-up [animation-delay:${delay}ms] text-center max-w-3xl mx-auto`}
    >
      {title && (
        <h3 className="text-5xl font-normal text-gray-600 leading-tight font-playfair mb-8">
          {title}
        </h3>
      )}
      {subtitle && (
        <span className="text-4xl font-light text-indigo-600 tracking-[.25em] uppercase block mb-4 font-sans">
          {subtitle}
        </span>
      )}
      <div className="space-y-2 max-w-4xl mx-auto">
        {Array.isArray(paragraph)
          ? paragraph.map((point, index) => (
              <p
                key={index}
                className="text-xl text-gray-500 leading-relaxed font-inter text-justify py-2"
              >
                {point}
              </p>
            ))
          : typeof paragraph === "string" && (
              <p className="text-xl text-gray-500 leading-relaxed font-inter text-justify">
                {paragraph}
              </p>
            )}
      </div>
    </div>
  );
}
