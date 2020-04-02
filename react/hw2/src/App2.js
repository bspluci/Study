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
            rating: 0,
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
            const maxRating = 10;

            if (todo.id === id) {
               if (name === "plus") {
                  if (todo.rating < maxRating) todo.rating = todo.rating + 1;

                  return {
                     ...todo,
                     rating: todo.rating,
                  };
               }
               if (name === "minus") {
                  if (todo.rating <= 0) todo.rating = 0;

                  return {
                     ...todo,
                     rating: todo.rating - 1,
                  };
               }
            } else {
               return todo;
            }
         }),
      });
   };

   render() {
      const TYPE = "E-MOVIES";

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
