import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
   state = {
      input: "",
   };

   handleChange = e => {
      this.setState({
         input: e.target.value,
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      this.props.onInsert(this.state.input);
      this.setState({
         input: "",
      });
   };

   render() {
      let regex = /^[AEIOU]/;
      regex = regex.test(this.props.type[0]);

      return (
         <div className="Form">
            <form
               className="form_container" //
               onSubmit={this.handleSubmit}
            >
               <input
                  placeholder={`add ${regex ? "a" : "an"} ` + this.props.type} //
                  value={this.state.input}
                  onChange={this.handleChange}
               ></input>
               <button type="submit">추가</button>
            </form>
         </div>
      );
   }
}

export default Form;
