import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-fuchsia-600 mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Page not found</p>
        <Link
          to="/"
          className="bg-cyan-400 text-neutral-800 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
