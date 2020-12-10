import "./App.css";
import Lorem from "./Lorem";

function App() {
  return (
    <div class="flex flex-row items-stretch w-screen h-screen">
      <nav className="w-10 bg-red-100 flex-none">.</nav>
      <div className="flex flex-col items-stretch w-full flex-auto overflow-hidden sm:overflow-auto">
        <div className="bg-purple-300 flex-none h-12 sticky top-0">
          search -- topmost nav --{" "}
        </div>
        <div className="flex sm:flex-row w-full flex-auto items-stretch overflow-y-auto sm:overflow-hidden flex-col">
          <div className="bg-green-500 w-full sm:w-56 sm:flex-none sm:overflow-y-auto">
            <p>top</p>
            <Lorem count={70} />
          </div>
          <div className="bg-blue-500 w-full flex-auto sm:overflow-y-auto">
            <p>foo</p>
            <Lorem count={170} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
