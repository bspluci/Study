import React, { Component } from "react";
import { connect } from "react-redux";
import { changeInput, insert } from "./store/modules/input";

class App extends Component {
   handleChange = (e) => {
      const { value } = e.target;
      this.props.changeInput(value);
   };

   handleSubmit = (e) => {
      e.preventDefault();
      const { input } = this.props;
      this.props.insert(input);
   };

   render() {
      const { input } = this.props;
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <input onChange={this.handleChange} value={input} />
               <button type="submit">insert</button>
            </form>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   input: state.input.input,
});

const mapDispatchToProps = {
   changeInput,
   insert,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
