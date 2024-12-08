import Intro from "@/components/layout/Intro";
import Footer from "@/components/layout/Footer";
import Section from "@/components/Section";
import Papers from "@/components/layout/Papers";
import { SectionRowProps } from "@/components/SectionRow";

function WhatWeDo() {
  const sections: SectionRowProps[] = [
    {
      suptitle: "AI Lab",
      title: "Collaborative AI Research",
      paragraph: [
        "We bridge industry experience and academia to work on foundational AI research.",
        "We keep our research open and independent.",
        "Our work is published in top-tier venues.",
      ],
      delay: 200,
    },
    {
      suptitle: "Good AI",
      title: "Advocating for Responsible AI",
      paragraph: [
        "We promote ethical AI advancements.",
        "We address issues like bias, misuse, and inequity in AI systems.",
        "Our goal is to foster an AI community that values responsibility, inclusivity, and transparency.",
      ],
      delay: 400,
    },
  ];
  return <Section id="what-we-do" title="WHAT WE DO" sections={sections} />;
}

function HowWeOperate() {
  const sections: SectionRowProps[] = [
    {
      suptitle: "Collaborations",
      paragraph:
        "We collaborate with universities, research institutes, and R&D labs to co-supervise impactful research projects.",
      delay: 0,
    },
    {
      suptitle: "Dissemination",
      paragraph:
        "We openly share our findings through open-source code, publications, conferences, workshops, and public events.",
      delay: 200,
    },
    {
      suptitle: "Ethics",
      paragraph:
        "We advocate and promote the ethical use of AI in critical fields like healthcare, sustainability, education, and social impact, while also highlighting the risks and harms of irresponsible AI applications.",
      delay: 400,
    },
  ];

  return (
    <Section id="how-we-operate" title="HOW WE OPERATE" sections={sections} />
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Intro />
      <WhatWeDo />
      <HowWeOperate />
      <Papers />
      <Footer />
    </main>
  );
}
