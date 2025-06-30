import Counter from "../components/Counter";

const SamplePage = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-8">Sample Page</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          State Management Example
        </h2>
        <p className="text-gray-300 mb-6">
          This page demonstrates Zustand state management with a simple counter
          example.
        </p>
        <Counter />
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">About This Template</h2>
        <div className="bg-neutral-700 p-6 rounded-lg">
          <p className="text-gray-300 mb-4">
            This template provides a solid foundation for React projects with:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>React Router for navigation</li>
            <li>Tailwind CSS for styling</li>
            <li>Zustand for state management</li>
            <li>Vite for fast development</li>
            <li>ESLint for code quality</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SamplePage;
