import React, { Component } from "react";

class Textsub extends Component {
   changeText() {
      this.props.text = "zzzzzzzz";
   }

   render() {
      return (
         <div>
            <button onClick={this.changeText}></button>
            <p>{this.props.text}</p>
         </div>
      );
   }
}

export default Textsub;
