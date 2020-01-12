import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../actions/messages";

const styleInput = {
  borderRadius: 10,
  border: "none",
  fontSize: 16,
  padding: 10,
  marginRight: 10,
  flexGrow: 1
};

const styleButton = {
  borderRadius: 10,
  cursor: "pointer",
  fontSize: 20,
  color: "#336E7B",
  fontWeight: "bold",
  padding: 10,
  border: "3px solid #336E7B",
  backgroundColor: "transparent"
};

const MessageBar = props => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector(state => state.messages.loading);
  const submitForm = event => {
    event.preventDefault();
    if (message) {
      dispatch(addMessage(message, "Branis"));
      setMessage("");
    }
  };
  const handleChange = e => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={submitForm}>
      <div style={{ display: "flex", padding: 10 }}>
        <input
          value={message}
          onChange={handleChange}
          placeholder="Entrer votre message"
          type="text"
          style={styleInput}
        />
        <br />
        <button style={styleButton}>Send</button>
      </div>
    </form>
  );
};

export default MessageBar;
