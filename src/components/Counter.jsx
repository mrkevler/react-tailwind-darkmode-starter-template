import useCounter from "../store/useCounter";

const Counter = () => {
  const { counter, increase, decrease, reset } = useCounter();

  return (
    <div className="bg-neutral-700 p-8 rounded-lg max-w-md">
      <h3 className="text-xl font-semibold mb-4">Counter Demo</h3>

      <div className="text-center mb-6">
        <p className="text-4xl font-bold">{counter}</p>
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={decrease}
          className="bg-yellow-400 text-neutral-800 px-4 py-2 rounded font-semibold hover:bg-yellow-300 transition-colors"
        >
          Decrease
        </button>
        <button
          onClick={reset}
          className="bg-neutral-600 text-white px-4 py-2 rounded font-semibold hover:bg-neutral-500 transition-colors"
        >
          Reset
        </button>
        <button
          onClick={increase}
          className="bg-cyan-400 text-neutral-800 px-4 py-2 rounded font-semibold hover:bg-cyan-300 transition-colors"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
