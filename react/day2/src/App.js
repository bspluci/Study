import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
class App extends Component {
   id = 1;
   state = {
      todos: [],
   };
   handleInsert = text => {
      this.setState({
         todos: this.state.todos.concat({
            text: text,
            id: this.id,
            done: false,
         }),
      });
      this.id++;
   };
   handleToggle = id => {
      this.setState({
         todos: this.state.todos.map(todo => {
            if (todo.id === id) {
               return {
                  ...todo,
                  done: !todo.done,
               };
            } else return todo;
         }),
      });
   };

   handleRemove = id => {
      this.setState({
         todos: this.state.todos.filter(todo => todo.id !== id),
      });
   };
   render() {
      return (
         <div className="App">
            <h3>TODO LIST</h3>
            <Form onInsert={this.handleInsert} />
            <List
               todos={this.state.todos} //
               onToggle={this.handleToggle}
               onRemove={this.handleRemove}
            />
         </div>
      );
   }
}
export default App;
