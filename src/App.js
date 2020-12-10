import "./App.css";
import Lorem from "./Lorem";

function App() {
  return (
    <div class="flex min-h-screen">
      <nav className="flex flex-col items-center justify-between  bg-red-100 w-10">
        {/* needs to not scroll */}
        <div className="w-4 h-4 bg-green-500"></div>
        <div className="w-4 h-4 bg-green-500"></div>
      </nav>
      <div class="flex flex-col flex-1  bg-blue-100">
        <div className="h-10 bg-blue-500">{/* needs to be fixed */}</div>
        <div className="flex">
          <div className="w-32 bg-green-200 overflow-hidden">
            {/* needs to be scrollable */}
            <Lorem count={50} />
          </div>
          <div className="flex flex-col flex-1">
            <div className="h-10 bg-yellow-50">{/* needs to be fixed */}</div>
            <div className="flex-1">
              {/* needs to be scrollable */}
              <Lorem count={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
