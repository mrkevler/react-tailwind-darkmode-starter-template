import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white">
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start gap-4">
            <div className="flex items-center gap-4 w-full">
              <img
                src="./react-tailwind-darkmode-starter-template-logo-mrKevler.png"
                alt="React Tailwind Darkmode Starter Template"
                className="max-h-20"
              />
              <h1 className="text-5xl font-bold whitespace-nowrap">
                Welcome to React Tailwind Darkmode Starter Template
              </h1>
            </div>
            <p className="text-xl text-gray-300 mt-8 mb-8 w-full">
              This is a modern React template built with Vite, Tailwind CSS and
              best practices. This template is a perfect starting point for your
              next project. Enjoy 😉
            </p>
            <div className="flex gap-4 mt-8 mb-8 md:mt-0">
              <Link
                to="/sample"
                className="bg-cyan-400 text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors"
              >
                Explore Sample Page
              </Link>
              <button className="bg-yellow-400 text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-neutral-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3">Fast Development</h3>
          <p className="text-gray-300">
            Built with Vite for lightning-fast HMR and optimized builds.
          </p>
        </div>
        <div className="bg-neutral-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3">Modern Stack</h3>
          <p className="text-gray-300">
            React 19, Tailwind CSS, and Zustand for state management.
          </p>
        </div>
        <div className="bg-neutral-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3">Production Ready</h3>
          <p className="text-gray-300">
            Clean code structure and best practices included.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
