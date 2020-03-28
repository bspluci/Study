import React, { Component } from "react";
class App extends Component {
   id = 1;
   state = {
      username: "",
      password: "",
      list: [],
   };

   usernameInput = React.createRef();

   handleChange = e => {
      const { value, name } = e.target;

      this.setState({
         [name]: value,
      });
   };

   handleInsert = e => {
      e.preventDefault();

      this.setState({
         username: "",
         password: "",
         list: this.state.list.concat({
            username: this.state.username,
            password: this.state.password,
            id: this.id,
         }),
      });
      this.id++;
      this.usernameInput.current.focus();
   };

   handleRemove = id => {
      this.setState({
         list: this.state.list.filter(item => item.id !== id),
      });
   };

   render() {
      const { username, password } = this.state;
      return (
         <div>
            <form onSubmit={this.handleInsert}>
               <input
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  ref={this.usernameInput}
               />
               <input name="password" value={password} onChange={this.handleChange} />
               <button type="submit">추가하기</button>
            </form>
            <ul>
               {this.state.list.map(item => {
                  return (
                     <li key={item.id}>
                        {item.username} - {item.password}
                        <button onClick={() => this.handleRemove(item.id)}>삭제하기</button>
                     </li>
                  );
               })}
            </ul>
         </div>
      );
   }
}

export default App;
