import Intro from "@/components/layout/Intro";
import Footer from "@/components/layout/Footer";
import Section from "@/components/Section";
import { SectionRowProps } from "@/components/SectionRow";

function WhoWeAre() {
  const sections: SectionRowProps[] = [
    {
      paragraph: [
        "We are a non-profit AI research collective — scientists, professors, engineers, researchers, and developers — coming together from top universities, labs, and companies.",
        "We're here because we're curious about what AI can be and should be, and we feel a responsibility to make it count for everyone.",
      ],
    },
  ];
  return <Section id="who-we-are" title="WHO WE ARE" sections={sections} />;
}

function WhatWeBelieve() {
  const sections: SectionRowProps[] = [
    {
      paragraph: [
        "AI is shaping the future. It's changing every aspect of our society, including how we think about ourselves and our potential.",
        "The question is not just what AI can do, but what it should do. We believe that innovation without a guiding purpose is hollow.",
        "Real progress means more than building better tools; it means building them for everyone, especially those too often overlooked or forgotten.",
        "We want AI that doesn't just float at the top, serving the privileged, but flows downward and outward, reaching people and places long left behind.",
      ],
    },
  ];
  return (
    <Section id="what-we-believe" title="WHAT WE BELIEVE" sections={sections} />
  );
}

function WhatWeDo() {
  const sections: SectionRowProps[] = [
    {
      subtitle: "AI Lab",
      paragraph:
        "We focus on foundational academic AI research. We publish in open venues, share our code, and push the field forward.",
    },
    {
      subtitle: "Good AI",
      paragraph:
        "We call out biases, support frameworks that keep AI honest, and build fairness, transparency, and accountability into every model we touch. We fight for meaningful, responsible applications that truly matter.",
    },
  ];
  return <Section id="what-we-do" title="WHAT WE DO" sections={sections} />;
}

function HowWeWork() {
  const sections: SectionRowProps[] = [
    {
      subtitle: "Collaborations",
      paragraph:
        "We team up with universities, research institutes, and R&D labs to tackle projects that have real impact.",
    },
    {
      subtitle: "Openness and Community",
      paragraph:
        "We share what we find, learn, and create at conferences, workshops, and public events, aiming to spark honest conversation and inspire both research and action.",
    },
    {
      subtitle: "Partnerships",
      paragraph:
        "Hand-in-hand with charitable non-profit organisations, we promote and develop AI applications that drive tangible improvements—education, healthcare, humanitarian aid, environmental protection, and more.",
    },
  ];
  return <Section id="how-we-work" title="HOW WE WORK" sections={sections} />;
}

function OurVision() {
  const sections: SectionRowProps[] = [
    {
      paragraph: [
        "We see AI as a force that reveals new paths, includes more voices, and helps reshape society for the better.",
        "If we are to contribute with a verse to this powerful play, let it be driven by curiosity and guided by responsibility.",
      ],
    },
  ];
  return <Section id="our-vision" title="OUR VISION" sections={sections} />;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Intro />
      <WhoWeAre />
      <WhatWeBelieve />
      <WhatWeDo />
      <HowWeWork />
      <OurVision />
      <Footer />
    </main>
  );
}
