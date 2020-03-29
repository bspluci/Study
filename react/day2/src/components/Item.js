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
      const { todo, onToggle, onRemove } = this.props;
      return (
         <div
            className={`Item ${todo.done && "active"}`} //
            onClick={() => onToggle(todo.id)}
         >
            <div className="check">&#10004;</div>
            <div
               className="remove"
               onClick={e => {
                  e.stopPropagation();
                  onRemove(todo.id);
               }}
            >
               REMOVE
            </div>
            <div className="text">{todo.text}</div>
         </div>
      );
   }
}

export default Item;
