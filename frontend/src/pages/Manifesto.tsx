import { Scroll } from 'lucide-react';

export default function Manifesto() {
  return (
    <div className="pt-28 lg:pt-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <Scroll className="h-10 w-10 lg:h-12 lg:w-12 mx-auto text-green-600 dark:text-green-500 mb-4" />
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Manifesto</h1>
        </div>
      </div>
      <div className="prose prose-base lg:prose-lg mx-auto px-4 lg:px-0 mb-16 lg:mb-20 dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-li:text-gray-600 dark:prose-li:text-gray-300 prose-h3:text-green-600 dark:prose-h3:text-green-500 max-w-4xl lg:max-w-8xl">
        <h3 className="text-xl lg:text-2xl mt-8 first:mt-0">Who We Are</h3>
        <p className="text-base lg:text-lg">
          We are a non-profit AI research collective—scientists, professors, engineers, researchers,
          and developers—coming together from top universities, labs, and companies. We're here
          because we're curious about what AI can be and should be, and we feel a responsibility to
          make it count for everyone.
        </p>

        <h3 className="text-xl lg:text-2xl mt-8">What We Believe</h3>
        <p className="text-base lg:text-lg">
          AI is shaping the future. It's changing every aspect of our society, including how we
          think about ourselves and our potential. The question is not just what AI can do, but what
          it should do. We believe that innovation without a guiding purpose is hollow. Real
          progress means more than building better tools; it means building them for everyone,
          especially those too often overlooked or forgotten. We want AI that doesn't just float at
          the top, serving the privileged, but flows downward and outward, reaching people and
          places long left behind.
        </p>

        <h3 className="text-xl lg:text-2xl mt-8">What We Do</h3>
        <ul className="text-base lg:text-lg space-y-4">
          <li>
            <strong>AI Lab:</strong> We focus on foundational academic AI research. We publish in
            open venues, share our code, and push the field forward.
          </li>
          <li>
            <strong>Good AI:</strong> We call out biases, support frameworks that keep AI honest,
            and build fairness, transparency, and accountability into every model we touch. We fight
            for meaningful, responsible applications that truly matter.
          </li>
        </ul>

        <h3 className="text-xl lg:text-2xl mt-8">How We Work</h3>
        <ul className="text-base lg:text-lg space-y-4">
          <li>
            <strong>Collaborations:</strong> We team up with universities, research institutes, and
            R&D labs to tackle projects that have real impact.
          </li>
          <li>
            <strong>Openness and Community:</strong> We share what we find, learn, and create at
            conferences, workshops, and public events, aiming to spark honest conversation and
            inspire both research and action.
          </li>
          <li>
            <strong>Partnerships:</strong> Hand-in-hand with charitable non-profit organisations, we
            promote and develop AI applications that drive tangible improvements—education,
            healthcare, humanitarian aid, environmental protection, and more.
          </li>
        </ul>

        <h3 className="text-xl lg:text-2xl mt-8">Our Vision</h3>
        <p className="text-base lg:text-lg">
          We see AI as a force that reveals new paths, includes more voices, and helps reshape
          society for the better. If we are to contribute with a verse to this powerful play, let it
          be driven by curiosity and guided by responsibility.
        </p>
      </div>
    </div>
  );
}
