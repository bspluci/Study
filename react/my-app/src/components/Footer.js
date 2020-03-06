import React, { Component } from "react";

class Footer extends Component {
   constructor(props) {
      super(props);
      this.ftChangeName = this.ftChangeName.bind(this);
   }

   ftChangeName() {
      var mode = null;
      var name = null;
      if (this.props.ftmode === "park") {
         mode = "gil";
         name = "GIL DA JEONG";
         this.props.onChangeName(mode, name);
      } else {
         mode = "park";
         name = "PARK JEONG HO";
         this.props.onChangeName(mode, name);
      }
   }

   render() {
      return (
         <footer>
            <div>
               <button onClick={this.ftChangeName}>Name Change</button>
               <p>Copyright © 2019 {this.props.name}All Rights Reserved.</p>
            </div>
         </footer>
      );
   }
}

export default Footer;
