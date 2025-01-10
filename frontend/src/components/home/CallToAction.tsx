export default function CallToAction() {
  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-white dark:from-gray-800 dark:to-gray-900" id="cta">
      <div className="max-w-xl mx-auto px-4">
        <div className="bg-green-500 dark:bg-green-600 rounded-2xl p-12 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Join Us</h2>
          <p className="text-green-50 mb-8 text-xl">
            Whether you're a researcher, developer, or simply passionate about ethical AI, there's a
            place for you in our community.
          </p>
          <a
            href="https://discord.gg/54MS3tPXEQ"
            className="bg-white text-green-500 dark:bg-gray-800 dark:text-green-400 px-8 py-3 rounded-md hover:bg-green-50 dark:hover:bg-gray-700 transition-colors"
          >
            Join Us
          </a>
        </div>
      </div>
    </div>
  );
}
