import React, { Component } from "react";
import "./Item.css";

class Item2 extends Component {
   shouldComponentUpdate(nextProps, nextState) {
      if (this.props.todo != nextProps.todo) {
         return true;
      } else {
         return false;
      }
   }

   render() {
      const { todo, onRemove, numRatign } = this.props;

      return (
         <div className="Item">
            <div className="check">&#10004;</div>
            <div
               className="remove" //
               onClick={e => {
                  e.stopPropagation();
                  onRemove(todo.id);
               }}
            >
               [X]
            </div>
            <div
               className="plus" //
               onClick={e => {
                  e.stopPropagation();
                  numRatign(todo.id, e.target.className);
               }}
            >
               [+]
            </div>
            <div
               className="minus" //
               onClick={e => {
                  e.stopPropagation();
                  numRatign(todo.id, e.target.className);
               }}
            >
               [-]
            </div>
            <div className="star">{todo.rating}</div>
            <div className="text">{todo.text}</div>
         </div>
      );
   }
}

export default Item2;
