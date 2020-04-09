import React, { Component } from "react";
import axios from "axios";

class App extends Component {
   state = {
      data: null,
   };

   handleClick = () => {
      axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
         this.setState({
            data: response.data,
         });
      });
   };

   render() {
      const { data } = this.state;
      return (
         <div>
            <button onClick={this.handleClick}>api불러오기</button>
            <ul>
               {data &&
                  data.map((item) => {
                     return <li key={item.id}>{item.title}</li>;
                  })}
            </ul>
         </div>
      );
   }
}

export default App;
