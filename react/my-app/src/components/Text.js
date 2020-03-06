import React, { Component } from "react";
import Textsub from "./components/Textsub;";

class Text extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: "gkgkgkgkgk",
      };
   }

   render() {
      return (
         <div>
            <Textsub changeText={this.changeText}></Textsub>
         </div>
      );
   }
}

export default Text;
