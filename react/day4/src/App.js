import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Main from "./Main";
import Sub from "./Sub";
import Profile from "./Profile";

class App extends Component {
   render() {
      return (
         <div>
            <ul>
               <li>
                  <Link to="/">메인화면으로</Link>
               </li>
               <li>
                  <Link to="Sub">서브화면으로</Link>
               </li>
            </ul>
            <Route path="/" exact component={Main} />
            <Route path="/Sub" component={Sub} />
            <Route path="/profile/:username" component={Profile} />
         </div>
      );
   }
}

export default App;
