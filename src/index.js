import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, autoRehydrate } from "redux-persist";
import { IntlProvider } from "react-intl";

import Routes from "./containers/Routes";
import reducers from "./reducers/index";

const LOCALE = "dz";

const traductions = {
  fr: {
    "chat.title": "🇫🇷 Chat2000",
    "menu.chat": "Chat",
    "menu.settings": "Parametre",
    "message.placeholder": "Votre message...",
    "action.send": "Envoi"
  },
  dz: {
    "chat.title": "🇩🇿 Chat2000",
    "menu.chat": "Chat DZ",
    "menu.settings": "Parametre",
    "message.placeholder": "Votre message...",
    "action.send": "Envoi"
  }
};

const getTradMessages = locale => traductions[locale];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk), autoRehydrate())
);

persistStore(store, { whitelist: ["settings"] });

ReactDOM.render(
  <IntlProvider locale={LOCALE} messages={getTradMessages(LOCALE)}>
    <Provider store={store}>
      <Routes />
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
