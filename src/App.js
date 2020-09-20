import React, { useEffect } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("5967c078021a0ed38791", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      alert(JSON.stringify(data));
    });
  }, []);

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
