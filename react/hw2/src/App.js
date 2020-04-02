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
            rating: ["☆", "☆", "☆", "☆", "☆"],
            num: 0,
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
      const fullStar = "★";
      const emptyStar = "☆";
      const increase = 1;

      this.setState({
         todos: this.state.todos.map(todo => {
            const maxRating = todo.rating.length - 1;

            if (todo.id === id) {
               if (name === "plus") {
                  if (todo.num > maxRating) todo.num = maxRating;
                  todo.num = todo.num + increase;
                  todo.rating.splice(todo.num - 1, 1, fullStar);

                  return {
                     ...todo,
                     rating: todo.rating,
                  };
               }
               if (name === "minus") {
                  todo.num = todo.num - increase;
                  if (todo.num < 1) todo.num = 0;
                  todo.rating.splice(todo.num, 1, emptyStar);

                  return {
                     ...todo,
                     rating: todo.rating,
                  };
               }
            } else {
               return todo;
            }
            return todo;
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

export default App;
