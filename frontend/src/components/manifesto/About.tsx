export default function About() {
  return (
    <div className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Who We Are</h2>
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">
              The Good AI Lab is a research collective dedicated to ensuring artificial intelligence
              benefits everyone. We believe AI should be developed democratically, with input from
              diverse voices and a focus on social impact.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our team brings together researchers, engineers, and ethicists who share a commitment
              to responsible AI development. We work at the intersection of technical innovation and
              social good, always asking not just what AI can do, but what it should do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
