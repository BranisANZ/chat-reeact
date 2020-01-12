import {
  ADD_MESSAGE_ACTION,
  REMOVE_MESSAGE_ACTION,
  GET_MESSAGE_ACTION
} from "../constants/action";

export const addMessage = (message, username) => {
  return {
    type: ADD_MESSAGE_ACTION,
    message,
    username
  };
};
