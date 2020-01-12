import * as types from "./../actions/settings";

const INITIAL_STATE = {
  colorCode: "#0dfe00",
  username: "Branis"
};

const settings = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.UPDATE_CHAT_COLOR:
      return { ...state, colorCode: action.colorCode };

    case types.UPDATE_USERNAME:
      return { ...state, username: action.username };

    default:
      return state;
  }
};

export default settings;
