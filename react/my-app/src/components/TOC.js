import React, { Component } from "react";

class TOC extends Component {
   render() {
      var data = this.props.content;
      var list = [];

      for (let i = 0; i < data.length; i++) {
         var content = (
            <li key={data[i].id}>
               <a
                  href={"content" + data[i].id + ".html"}
                  data-id={data[i].id}
                  onClick={function(e) {
                     e.preventDefault();
                     this.props.onChangePage(e.target.dataset.id);
                  }.bind(this)}
               >
                  {data[i].title}
               </a>
               <p>{data[i].desc}</p>
            </li>
         );
         list.push(content);
      }

      return (
         <nav>
            <ul>{list}</ul>
         </nav>
      );
   }
}

export default TOC;
