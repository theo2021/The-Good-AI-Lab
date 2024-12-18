// pages/team.tsx
import React from "react";
import Head from "next/head";
import { boardMembers, staffMembers } from "@/data/team";
import TeamSection from "../../components/TeamSection";

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>The Good AI Lab - Our Team</title>
        <meta
          name="description"
          content="Meet the team behind The Good AI Lab."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-3xl font-extrabold text-gray-300">Our Team</h1>
          <p className="text-gray-200 text-sm mt-2">
            Meet the dedicated individuals driving our mission forward.
          </p>
        </header>

        <TeamSection title="Board Members" members={boardMembers} />
        <TeamSection title="Staff" members={staffMembers} />
      </main>
    </>
  );
}
