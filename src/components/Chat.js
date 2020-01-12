import React from "react";
import { FormattedMessage } from "react-intl";

import MessageListContainer from "./../containers/MessageListContainer";
import MessageBar from "./MessageBar";

const style = {
  borderRadius: 10,
  width: 300,
  padding: 10,
  display: "flex",
  flexDirection: "column"
};

const Chat = props => {
  return (
    <div style={{ ...style, backgroundColor: props.colorCode }}>
      <div>
        <FormattedMessage id="chat.title" />
      </div>

      <MessageBar />
      <MessageListContainer />
    </div>
  );
};

export default Chat;
