import React, { Component } from "react";

class TOC extends Component {
   render() {
      var lists = [];
      var data = this.props.content;
      var i = 0;
      while (i < data.length) {
         lists.push(
            <li key={data[i].id}>
               <a href={"content" + data[i].id + ".html"}>{data[i].title}</a>
               <p>{data[i].desc}</p>
            </li>
         );
         i = i + 1;
      }

      return (
         <nav>
            <ul>{lists}</ul>
         </nav>
      );
   }
}

export default TOC;
