import React from "react";
import Chat from "../Chat/Chat";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Cole"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Mace"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Hunter"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
      <Chat
        name="Ryder"
        message="Yo whats up"
        timestamp="40 seconds ago"
        profilePic="..."
      />
    </div>
  );
}

export default Chats;
