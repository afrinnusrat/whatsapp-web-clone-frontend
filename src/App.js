import React from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    // BEM class naming
    <div className="app">
      <div className="app__body">
        {/* Sidebar Component */}
        <Sidebar />

        {/* Chat Component */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
