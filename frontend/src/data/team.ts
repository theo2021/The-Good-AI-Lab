export interface TeamMember {
  name: string;
  title: string;
  imageSrc: string | null;
  bio?: string;
  links?: {
    website?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const boardMembers: TeamMember[] = [
  {
    name: "Pier Luigi Dovesi",
    title: "Board Chair",
    imageSrc: null,
    bio: "-",
    links: {},
  },
  {
    name: "Lorenzo Andraghetti",
    title: "Treasurer",
    imageSrc: null,
    bio: "-",
    links: {},
  },
  {
    name: "Saroosh Shabbir",
    title: "Secretary",
    imageSrc: null,
    bio: "-",
    links: {},
  },
  {
    name: "Theodoros Panagiotakopoulos",
    title: "Auditor",
    imageSrc: null,
    bio: "-",
    links: {},
  },
  {
    name: "Carlo Rapisarda",
    title: "Board Member",
    imageSrc: null,
    bio: "-",
    links: {},
  },
  {
    name: "Jussi Karlgren",
    title: "Board Member",
    imageSrc: null,
    bio: "-",
    links: {},
  },
];

export const staffMembers: TeamMember[] = [
  {
    name: "Jane Doe",
    title: "Program Director",
    imageSrc: null,
    bio: "Jane leads day-to-day operations and oversees research programs.",
    links: {},
  },
  {
    name: "John Doe",
    title: "Research Fellow",
    imageSrc: null,
    bio: "John focuses on NLP research and community outreach.",
    links: {},
  },
];
