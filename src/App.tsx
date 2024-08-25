import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello NSDPY</h1>
        <a href="https://pypi.org/project/nsdpy/" target="_blank">
          <img
            src={
              "https://github.com/RaphaelHebert/nsdpyImage/blob/main/nsdpyLogoSmall.png?raw=true"
            }
            className="logo"
            alt="NSDPY logo"
          />
        </a>
      </div>
    </>
  );
}

export default App;
