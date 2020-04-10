import React, { Component } from "react";
import "./Button.scss";

class Button extends Component {
   render() {
      return (
         <div className="button" type="submit">
            {this.props.text}
         </div>
      );
   }
}

export default Button;
