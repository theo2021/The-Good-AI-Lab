"use client";

import React from "react";
import { settings } from "@/config/settings";
import PapersList from "../../components/PapersList";

export default function Papers() {
  return (
    <section
      id="papers"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6 py-24">
        <div className="text-center mb-16 transform transition-all duration-1000 opacity-0 translate-y-6 animate-fade-in">
          <h2 className="text-5xl font-light text-gray-800 font-playfair mb-4">
            PUBLICATIONS
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <PapersList papers={settings.papers} />
        </div>
      </div>
    </section>
  );
}
