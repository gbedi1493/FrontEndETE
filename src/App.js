import "./App.css";
import { MyNav } from "./Components/Header/MyNav";
import { useState } from "react";
import { LandingPage } from "./Components/Pages/LandingPage";
import { HtmlLandingPage } from "./Components/Pages/HtmlLandingPage";
import { CSSLandingPage } from "./Components/Pages/CSSLandingPage";
import { JavaScriptPage } from "./Components/Pages/JavaScriptPage";
import { PythonLandingPage } from "./Components/Pages/PythonLandingPage";
import { SQLLandingPage } from "./Components/Pages/SQLLandingPage";

function App() {
  const [isBottomNavVisible, setBottomNavVisibility] = useState(true);
  const handleToggleBottomNav = () => {
    setBottomNavVisibility(!isBottomNavVisible);
  };
  return (
    <div className="App">
      <MyNav toggleBottom={handleToggleBottomNav} />
      {isBottomNavVisible && <LandingPage />}
      {isBottomNavVisible && <HtmlLandingPage />}
      {isBottomNavVisible && <CSSLandingPage />}
      {isBottomNavVisible && <JavaScriptPage />}
      {isBottomNavVisible && <PythonLandingPage />}
      {isBottomNavVisible && <SQLLandingPage />}
    </div>
  );
}

export default App;
