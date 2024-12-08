import React from "react";

export interface SectionRowProps {
  suptitle?: string; // Optional subtitle displayed as a <span>
  title?: string; // Optional main title displayed as a <h3>
  paragraph: string | string[]; // Paragraph(s), either a single string or an array of strings
  delay?: number; // Optional animation delay in milliseconds
}

export default function SectionRow({
  suptitle,
  title,
  paragraph,
  delay = 0,
}: SectionRowProps) {
  return (
    <div
      className={`opacity-0 animate-fade-slide-up [animation-delay:${delay}ms] text-center max-w-3xl mx-auto`}
    >
      {suptitle && (
        <span className="text-4xl font-light text-indigo-600 tracking-[.25em] uppercase block mb-4 font-sans">
          {suptitle}
        </span>
      )}
      {title && (
        <h3 className="text-5xl font-normal text-gray-800 leading-tight font-playfair mb-8">
          {title}
        </h3>
      )}
      <div className="space-y-1">
        {Array.isArray(paragraph)
          ? paragraph.map((point, index) => (
              <p
                key={index}
                className="text-xl text-gray-600 leading-relaxed font-inter"
              >
                {point}
              </p>
            ))
          : typeof paragraph === "string" && (
              <p className="text-xl text-gray-600 leading-relaxed font-inter">
                {paragraph}
              </p>
            )}
      </div>
    </div>
  );
}
