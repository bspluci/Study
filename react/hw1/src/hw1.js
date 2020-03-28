import React, { Component } from "react";

class App extends Component {
   state = {
      userid: "",
      password: "",
      email: "",
      disabled: true,
   };

   handleChange = e => {
      const { value, name } = e.target;

      this.setState({
         [name]: value,
      });
   };

   isSafe = () => {
      const { userid, password, email, disabled } = this.state;
      const passwordMatch = password.indexOf(userid);

      this.setState({
         disabled: !passwordMatch ? true : false,
      });

      // const passwordMatch = this.state.password.indexOf(this.state.userid);
      // const emailMatch = this.state.email.indexOf("@");
      // const alphabet = /(?=.*[a-z])(?=.*[A-Z])/;

      // (this.state.password.length > 5,
      // alphabet.test(this.state.password),
      // passwordMatch,
      // emailMatch)
      //    ? this.setState({ disabled: false })
      //    : this.setState({ disabled: true });
   };

   render() {
      const { userid, password, email, disabled } = this.state;
      return (
         <form onChange={this.isSafe}>
            <input name="userid" value={userid} onChange={this.handleChange}></input>
            <input name="password" value={password} onChange={this.handleChange}></input>
            <input name="email" value={email} onChange={this.handleChange}></input>
            <button type="button" disabled={disabled}>
               Submit
            </button>
         </form>
      );
   }
}

export default App;
