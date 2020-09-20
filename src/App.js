import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      console.log(response.data);
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("5967c078021a0ed38791", {
      cluster: "ap1",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMessage) {
      // alert(JSON.stringify(newMessage));   // alertnya di comment aja, karena udah ga dipakai lagi
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

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
