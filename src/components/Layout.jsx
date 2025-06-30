import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-800">
      {/* === NAVBAR === */}
      <header className="bg-fuchsia-600 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-lime-400">
            React Tailwind Darkmode Starter Template
          </h1>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link
                  to="/"
                  className="text-xl text-lime-400 hover:text-2xl hover:text-gray-200 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/sample"
                  className=" text-xl text-lime-400 hover:text-2xl hover:text-gray-200 transition-colors"
                >
                  Sample Page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* === MAIN CONTENT === */}
      <main className="flex-1 container mx-auto px-6 py-12">
        <Outlet />
      </main>

      {/* === FOOTER === */}
      <footer className="bg-purple-700 text-white p-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            © 2025 React Tailwind Darkmode Starter Template by
            <span className="text-lime-400"> mrKevler</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
