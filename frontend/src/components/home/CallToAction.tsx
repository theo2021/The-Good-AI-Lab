export default function CallToAction() {
  return (
    <div className="py-16 bg-green-500 dark:bg-green-600" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Join Us in Shaping the Future of AI</h2>
        <p className="text-green-50 mb-8 max-w-2xl mx-auto">
          Whether you're a researcher, developer, or simply passionate about ethical AI, there's a
          place for you in our community.
        </p>
        <a
          href="mailto:thegoodailab@gmail.com?subject=Joining%20The%20Good%20AI%20Lab&body=Hello,%0D%0A%0D%0AI%20am%20interested%20in%20joining%20The%20Good%20AI%20Lab.%20Please%20provide%20me%20with%20more%20information.%0D%0A%0D%0AThank%20you!"
          className="bg-white text-green-500 dark:bg-gray-800 dark:text-green-400 px-8 py-3 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
        >
          Join The Good AI Lab
        </a>
      </div>
    </div>
  );
}
