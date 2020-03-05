import React, { Component } from "react";

class Footer extends Component {
   render() {
      return (
         <footer>
            <div>
               <button
                  onClick={function() {
                     if (this.props.ftmode === "park") {
                        this.props.onChangeName("gil");
                     } else {
                        this.props.onChangeName("park");
                     }
                  }.bind(this)}
               >
                  Name Change
               </button>
               <p>{this.props.name}</p>
            </div>
         </footer>
      );
   }
}

export default Footer;
