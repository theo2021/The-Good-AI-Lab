import type { Settings, Paper } from "@/types/settings";

export const settings: Settings = {
  social: {
    discord: {
      url: "https://discord.gg/uWt3a8S7",
      hoverColor: "hover:text-[#7289DA]",
    },
    x: {
      url: "https://x.com/thegoodailab",
      hoverColor: "hover:text-[#1DA1F2]",
    },
    instagram: {
      url: "https://instagram.com/thegoodailab",
      hoverColor: "hover:text-[#E1306C]",
    },
    // linkedin: {
    //   url: "https://linkedin.com/company/thegoodailab",
    //   hoverColor: "hover:text-[#0077B5]"
    // },
  },
  papers: [
    {
      title: "A Novel Approach to AI Research",
      authors: "John Doe, Jane Smith, Robert Johnson",
      venue: "ICLR 2024",
      links: [
        {
          text: "Paper",
          url: "https://arxiv.org/abs/...",
          icon: "file-lines",
        },
        {
          text: "Code",
          url: "https://github.com/...",
          icon: "code",
        },
        {
          text: "Blog",
          url: "https://blog.example.com/...",
          icon: "newspaper",
        },
      ],
    },
    {
      title: "Understanding Deep Learning Fundamentals",
      authors: "Jane Smith, Alan Turing, Grace Hopper",
      venue: "NeurIPS 2023",
      links: [
        {
          text: "Paper",
          url: "https://arxiv.org/abs/...",
          icon: "file-lines",
        },
        {
          text: "Project Page",
          url: "https://project.example.com/...",
          icon: "globe",
        },
      ],
    },
    // Add more papers as needed
  ] as Paper[],
};

export default settings;
