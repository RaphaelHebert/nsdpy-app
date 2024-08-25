import nsdpyLogo from "./assets/nsdpy_transparent.png";
import RequestForm from "@/components/RequestForm";

function App() {
  return (
    <>
      <div>
        <RequestForm />
        {/* <h1>Hello NSDPY</h1>
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
        </div> */}
      </div>
    </>
  );
}

export default App;
