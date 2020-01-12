import {
  ADD_MESSAGE_ACTION,
  REMOVE_MESSAGE_ACTION,
  GET_MESSAGE_ACTION
} from "../constants/action";

const INITIAL_STATE = {
  messages: [],
  loading: false,
  error: null
};

const messages = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      return {
        messages: [
          ...state.messages,
          { message: action.message, username: action.username }
        ]
      };
    case GET_MESSAGE_ACTION:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default messages;
