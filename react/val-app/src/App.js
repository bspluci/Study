import React, { Component } from "react";
import "./App.css";

class App extends Component {
   render() {
      const name = "name";
      return <div>{name === "react" && <h1>welecom {name} !!</h1>}</div>;
   }
}

export default App;
