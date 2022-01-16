import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-16px">
      <div className="py-4px shadow-lg px-8px hover:bg-red-600 cursor-pointer">
        Foo
        <span className="text-green-700 font-bold">Bar</span>
        <span className="block mt-8px text-red-700 font-bold">Baz</span>
      </div>
      <button className="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">
        クリックして！
      </button>
    </div>
  );
}

export default App;
