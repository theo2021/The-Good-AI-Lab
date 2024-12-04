interface OperationSectionProps {
  title: string;
  description: string;
  delay?: number;
}

function OperationSection({ title: title, description, delay = 0 }: OperationSectionProps) {
  return (
    <div className={`opacity-0 animate-fade-slide-up [animation-delay:${delay}ms] text-center max-w-3xl mx-auto`}>
      <span className="text-4xl font-light text-indigo-600 tracking-[.25em] uppercase block mb-4 font-sans">
        {title}
      </span>
      <p className="text-xl text-gray-600 leading-relaxed font-inter">
        {description}
      </p>
    </div>
  );
}

export default function HowWeOperate() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-32 opacity-0 animate-fade-in">
          <h2 className="text-5xl font-light text-gray-800 font-playfair">
            HOW WE OPERATE
          </h2>
        </div>
        <div className="max-w-6xl mx-auto space-y-40">
          <OperationSection
            title="Collaborations"
            description="We collaborate with universities, research institutes, and R&D labs to co-supervise impactful research projects."
            delay={0}
          />
          <OperationSection
            title="Dissemination"
            description="We openly share our findings through open-source code, publications, conferences, workshops, and public events."
            delay={200}
          />
          <OperationSection
            title="Ethics"
            description="We advocate and promote the ethical use of AI in critical fields like healthcare, sustainability, education, and social impact, while also highlighting the risks and harms of irresponsible AI applications."
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}