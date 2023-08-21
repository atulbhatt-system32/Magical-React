import { useState } from "react";
import "./App.css";
import { Fetch_w_ue, Fetch_wo_ue } from "./Components";

const options = ["Fetch with useEffect", "Fetch without useEffect"];
function App() {
  const [option, setOptions] = useState(options[0]);

  return (
    <>
      <div></div>
      <h1>API Calling on component mount</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          gap: "10px",
        }}
      >
        <select
          style={{ width: "50%", margin: "auto" }}
          onChange={(e) => setOptions(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {option === options[0] && <Fetch_w_ue />}
        {option === options[1] && <Fetch_wo_ue />}
      </div>
    </>
  );
}

export default App;
