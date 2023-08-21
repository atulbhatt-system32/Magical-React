import { useEffect } from "react";
import "./App.css";

function App() {
  let count = 0;

  useEffect(() => {
    alert(`count in useEffect is ${count}`);
  }, [count]);

  return (
    <>
      <div></div>
      <h1>Does count increase triggers useEffect?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button
          onClick={() => {
            count++;
            alert(`count is ${count}`);
          }}
        >
          Increment Count
        </button>
        <button
          onClick={() => {
            count--;
            alert(`count is ${count}`);
          }}
        >
          Decrement Count
        </button>
        <button
          onClick={() => {
            count = 0;
            alert(`count is ${count}`);
          }}
        >
          Reset Count
        </button>
      </div>
      <p> Count is {`${count}`}</p>
    </>
  );
}

export default App;
