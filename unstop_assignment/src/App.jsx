import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar-section/Sidebar";
import RightSection from "./components/right-section/RightSection";

function App() {
  return (
    <>
      <div className="main-container">
        {/* left-section */}
        <Sidebar />

        {/* right-section starts here */}
        <RightSection />
      </div>
    </>
  );
}

export default App;
