import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
   shouldComponentUpdate(nextProps, nextState) {
      if (this.props.todo !== nextProps.todo) {
         return true;
      } else {
         return false;
      }
   }

   render() {
      const { todo, onRemove, numRatign, editScore } = this.props;
      let rating = ["☆", "☆", "☆", "☆", "☆"];
      rating.splice(todo.score, 1, "★");

      return (
         <div className="Item">
            <div className="check">&#10004;</div>
            <div
               className="remove" //
               onClick={(e) => {
                  e.stopPropagation();
                  onRemove(todo.id);
               }}
            >
               [X]
            </div>
            <div
               className="plus" //
               onClick={editScore(todo.id, 1)}
            >
               [+]
            </div>
            <div
               className="minus" //
               onClick={editScore(todo.id, -1)}
            >
               [-]
            </div>
            <div className="star">{rating}</div>
            <div className="text">{todo.text}</div>
         </div>
      );
   }
}

export default Item;
