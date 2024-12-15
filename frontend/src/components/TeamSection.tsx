// components/TeamSection.tsx
import React from "react";
import { TeamMember } from "@/data/team";
import TeamGrid from "./TeamGrid";

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

export default function TeamSection({ title, members }: TeamSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">{title}</h2>
      <TeamGrid members={members} />
    </section>
  );
}
