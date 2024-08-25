import { useState } from "react";
import nsdpyLogo from "./assets/nsdpy_transparent.png";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello NSDPY</h1>
        <div
          style={{
            background: "white",
            width: "140px",
            height: "140px",
            borderRadius: "70px",
          }}
        >
          <a href="https://pypi.org/project/nsdpy/" target="_blank">
            <img src={nsdpyLogo} className="logo" alt="NSDPY logo" />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
