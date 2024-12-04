import React from 'react';

interface SectionProps {
  label: string;
  title: string;
  points: string[];
  delay?: number;
}

function Section({ label, title, points, delay = 0 }: SectionProps) {
  return (
    <div className={`opacity-0 animate-fade-slide-up [animation-delay:${delay}ms] text-center max-w-3xl mx-auto`}>
      <span className="text-4xl font-light text-indigo-600 tracking-[.25em] uppercase block mb-4 font-sans">
        {label}
      </span>
      <h3 className="text-5xl font-normal text-gray-800 leading-tight font-playfair mb-8">
        {title}
      </h3>
      <div className="space-y-1">
        {points.map((point, index) => (
          <p key={index} className="text-xl text-gray-600 leading-relaxed font-inter">
            {point}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  const sections = [
    {
      label: "AI Lab",
      title: "Collaborative AI Research",
      points: [
        "We bridge industry experience and academia to work on foundational AI research.",
        "We keep our research open and independent.",
        "Our work is published in top-tier venues."
      ],
      delay: 200
    },
    {
      label: "Good AI",
      title: "Advocating for Responsible AI",
      points: [
        "We promote ethical AI advancements.",
        "We address issues like bias, misuse, and inequity in AI systems.",
        "Our goal is to foster an AI community that values responsibility, inclusivity, and transparency."
      ],
      delay: 400
    }
  ];

  return (
    <section id="what-we-do" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-32 opacity-0 animate-fade-in">
          <h2 className="text-5xl font-light text-gray-800 font-playfair">
            WHAT WE DO
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-40">
          {sections.map((section, index) => (
            <Section key={index} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}