import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import rootReducer from "./store/modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleweare(reduxThunk)));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);

serviceWorker.unregister();
