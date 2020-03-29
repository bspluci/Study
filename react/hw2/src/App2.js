import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

class App2 extends Component {
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
            rating: [],
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
            } else {
               return todo;
            }
         }),
      });
   };

   handleRemove = id => {
      this.setState({
         todos: this.state.todos.filter(todo => todo.id !== id),
      });
   };

   handleRating = (id, name) => {
      this.setState({
         todos: this.state.todos.map(todo => {
            if (todo.id === id) {
               if (name === "plus") {
                  if (todo.rating.length < 5) {
                     return {
                        ...todo,
                        rating: todo.rating.concat("★"),
                     };
                  } else {
                     return todo;
                  }
               }
               if (name === "minus") {
                  return {
                     ...todo,
                     rating: todo.rating.splice(1, todo.rating.length - 1),
                  };
               }
            } else {
               return todo;
            }
         }),
      });
   };

   render() {
      const TYPE = "SONGS";
      return (
         <div className="App">
            <h3>LIST OF {TYPE}</h3>
            <Form
               onInsert={this.handleInsert} //
               type={TYPE}
            />
            <List
               todos={this.state.todos} //
               onToggle={this.handleToggle}
               onRemove={this.handleRemove}
               numRatign={this.handleRating}
            />
         </div>
      );
   }
}

export default App2;
