import { useState } from "react";
import Header from "./Header";

function App() {
  let [count, setCount] = useState(0);

  // Increment Counter function
  function incrementCounter() {
    if (count < 10) {
      setCount(count + 1);
    } else {
      alert("Counter value cannot be greater than 10");
    }
  }
  // Decrement Counter function
  function decrementCounter() {
    if (count > 0) {
      setCount(--count);
    } else {
      alert("Counter value cannot be less than 0");
    }
  }

  return (
    <>
      <Header />
      <div className="flex justify-between text-2xl font-semibold m-3">
        <div className="counter">
          Counter: {count /*It is the evaluted expression*/}
        </div>
        <div className="counter">
          Counter: {count /*It is the evaluted expression*/}
        </div>
        <div className="counter">
          Counter: {count /*It is the evaluted expression*/}
        </div>
      </div>
      <div className="buttons flex justify-around p-3">
        <button
          className="text-xl font-semibold text-blue-500 bg-slate-300 p-2 rounded"
          onClick={incrementCounter}
        >
          Increment Counter
        </button>
        <button
          className="text-xl font-semibold text-blue-500  bg-slate-300 p-2 rounded"
          onClick={decrementCounter}
        >
          Decrement Counter
        </button>
      </div>
    </>
  );
}

export default App;
