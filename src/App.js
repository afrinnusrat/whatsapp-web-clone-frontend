import React from "react";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM class naming
    <div className="app">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Chat Component */}
    </div>
  );
}

export default App;
