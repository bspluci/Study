import React from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./store/modules";
import { Provider } from "react-redux";

const store = createStore(rootReducer, composeWithDevTools());

const Root = () => {
   return (
      <div>
         <Provider store={store}>
            <BrowserRouter>
               <App />
            </BrowserRouter>
         </Provider>
      </div>
   );
};

export default Root;
