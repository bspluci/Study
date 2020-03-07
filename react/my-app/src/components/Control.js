import React, { Component } from "react";

class Control extends Component {
   constructor(props) {
      super(props);

      this.onChangeMode = this.onChangeMode.bind(this);
   }

   onChangeMode(e) {
      e.preventDefault();
      var _mode = e.target.innerHTML;
      this.props.onChangeMode(_mode);
   }

   render() {
      return (
         <ul>
            <li>
               <a href="/create" onClick={this.onChangeMode}>
                  create
               </a>
            </li>
            <li>
               <a href="/update" onClick={this.onChangeMode}>
                  update
               </a>
            </li>
            <li>
               <input
                  type="button"
                  value="delete"
                  onClick={function(e) {
                     e.preventDefault();
                     this.props.onChangeMode("delete");
                  }.bind(this)}
               ></input>
            </li>
         </ul>
      );
   }
}

export default Control;
