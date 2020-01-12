import React from "react";
import MessageItem from "./MessageItem";
import Emoji from "react-emoji-render";
import { useSelector } from "react-redux";

const style = { borderColor: "grey", padding: 10, listStyle: "none" };

const MessageList = () => {
  const messages = useSelector(state => state.messages.messages);
  console.log(messages);

  const allMessages = messages.map((message, i) => (
    <MessageItem key={i} index={i} message={message} />
  ));
  return <ul style={style}>{allMessages}</ul>;
};

export default MessageList;
