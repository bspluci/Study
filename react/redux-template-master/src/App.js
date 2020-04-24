import React, { Component } from "react";
import "./App.css";
import ColorList from "./components/ColorList";
import CounterContainer from "./containers/CounterContainer";
import ColorSquareContainer from "./containers/ColorSquareContainer";
import ColorBoxList from "./containers/ColorBoxList";

class App extends Component {
   render() {
      return (
         <div className="App">
            <CounterContainer />
            <ColorSquareContainer />
            {/* <ColorList /> */}
            <ColorBoxList />
         </div>
      );
   }
}

export default App;
