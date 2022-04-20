import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter((prev) => prev + 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  const setFive = () => {
    setCounter(5);
  };
  
  return (
    <div className="App">
      <div>
        The counter is <span data-testid="counter">{counter}</span>
      </div>
      <button onClick={increaseCounter}>Increase !!</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={setFive}>Five!</button>
    </div>
  );
}

export default App;
