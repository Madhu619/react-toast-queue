import FailureDemo from "./FailureDemo";
import InfoDemo from "./InfoDemo";
import SuccessDemo from "./SuccessDemo";
import { ToastContextProvider } from "@lib";

function App() {
  return (
    <div className="App">
      <ToastContextProvider>
        <div className="demo-grid">
          <SuccessDemo />
          <FailureDemo />
          <InfoDemo />
        </div>
      </ToastContextProvider>
    </div>
  );
}

export default App;
