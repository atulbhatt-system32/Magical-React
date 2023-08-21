import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [booleanToggle, setBooleanToggle] = useState(false);

  useEffect(() => {
    alert(`boolean is ${booleanToggle}`);
  }, [booleanToggle]);
  return (
    <>
      <div></div>
      <h1>Does boolean toggle triggers useEffect?</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={() => setBooleanToggle((prev) => !prev)}>
          Toggle Boolean
        </button>
        <button onClick={() => setBooleanToggle(false)}>
          Set Boolean to false
        </button>
        <button onClick={() => setBooleanToggle(true)}>
          Set Boolean to true
        </button>
      </div>
      <p> Boolean is {`${booleanToggle}`}</p>
    </>
  );
}

export default App;
