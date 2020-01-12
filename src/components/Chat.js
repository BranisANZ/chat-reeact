import React, { useState, useEffect } from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { getMessages } from "../actions/messages";
const chatStyle = {
  display: "flex",
  flexDirection: "column",
  borderRadius: 10,
  width: 500,
  fontFamily: "Montserrat",
  backgroundColor: "#A2DED0",
  padding: 10
};

const titleStyle = {
  paddingLeft: 10,
  paddingTop: 10,
  fontSize: 30
};

const Chat = () => {
  return (
    <div style={chatStyle}>
      <div style={titleStyle}>Chat2000</div>

      <MessageList />
      <MessageBar />
    </div>
  );
};

export default Chat;
