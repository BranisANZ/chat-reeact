import React from "react";
import Emoji from "react-emoji-render";
import { connect } from "react-redux";

const MessageItem = ({ message }) => {
  console.log(message);
  return (
    <li
      style={{
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
      }}
    >
      <small>{message.username}</small>
      <div> {<Emoji text={message.message} />}</div>
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(null, mapDispatchToProps)(MessageItem);
