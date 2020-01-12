import {
  ADD_MESSAGE_ACTION,
  REMOVE_MESSAGE_ACTION,
  GET_MESSAGE_ACTION
} from "../constants/action";
import websocket from "./../services/websocket";

export const addMessage = (message, username) => {
  return {
    type: ADD_MESSAGE_ACTION,
    message,
    username
  };
};
export const sendMessage = message => {
  return (dispatch, getState) => {
    const username = getState().settings.username;
    const action = { type: ADD_MESSAGE_ACTION, message, username };
    websocket.send(JSON.stringify(action));

    return dispatch(action);
  };
};
