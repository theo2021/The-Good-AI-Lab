// components/TeamGrid.tsx
import React from "react";
import Grid from "@mui/material/Grid2";
import { TeamMember } from "@/data/team";
import TeamMemberCard from "./TeamMemberCard";

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {members.map((member) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={member.name}>
            <TeamMemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
