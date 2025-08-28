import { useState } from "react";
import LandingPage from "./LandingPage";
import MainApp from "./MainApp"; // Your wizard + calculator app

function App() {
  const [started, setStarted] = useState(false);

  return started ? <MainApp /> : <LandingPage onStart={() => setStarted(true)} />;
}

export default App;
