import React from "react";
import PropTypes from "prop-types";
import Emoji from "react-emoji-render";

const MessageItem = props => {
  return (
    <li
      style={{
        marginBottom: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10
      }}
    >
      <small>{props.message.username}</small>
      <div> {<Emoji text={props.message.message} />}</div>
    </li>
  );
};
MessageItem.propTypes = {
  message: PropTypes.string.isRequired
};
export default MessageItem;
