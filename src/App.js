import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM class naming
    <div className="app">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Chat Component */}
      <Chat />
    </div>
  );
}

export default App;
