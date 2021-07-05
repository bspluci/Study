import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
   let [title, setTitle] = useState(["남자코트 추천", "강남 우동맛집", "파이썬 독학"]);
   let [like, setLike] = useState(0);

   return (
      <div className="App">
         <div className="black-nav">
            <div>개발 Blog</div>
         </div>
         <div className="list">
            <h3>
               {title[0]}
               <span
                  onClick={() => {
                     setLike(like + 1);
                  }}
               >
                  👍
               </span>
               {like}
            </h3>
            <p>2월 17일 발행</p>
         </div>
         <div className="list">
            <h3> {title[1]} </h3>
            <p>2월 18일 발행</p>
         </div>
         <div className="list">
            <h3> {title[2]} </h3>
            <p>2월 19일 발행</p>
         </div>
      </div>
   );
}

export default App;
