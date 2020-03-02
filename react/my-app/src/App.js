import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Content from "./components/Content";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         mode: "welecom",
         subject: { title: "WEB", sub: "world wide web!" },
         welecom: { title: "Welecom", desc: "Hello, React!!" },
         contents: [
            { id: 1, title: "HTML", desc: "HTML is HyperText..." },
            { id: 2, title: "CSS", desc: "CSS is for design..." },
            { id: 3, title: "JavaScript", desc: "JavaScript is for interative..." }
         ]
      };
   }
   render() {
      var _title,
         _desc = null;
      if (this.state.mode == "welecom") {
         _title = this.state.welecom.title;
         _desc = this.state.welecom.desc;
      } else {
         _title = this.state.contents[0].title;
         _desc = this.state.contents[0].desc;
      }
      var subject = this.state.subject;
      return (
         <div className="App">
            {/* <Subject
               var
               title={subject.title} //
               sub={subject.sub}
            ></Subject> */}
            <header>
               <h1>
                  <a
                     href="/"
                     onClick={function(e) {
                        e.preventDefault();
                        alert("hi");
                     }}
                  >
                     {subject.title}
                  </a>
               </h1>
               {subject.sub}
            </header>
            <TOC content={this.state.contents}></TOC>
            <Content title={_title} desc={_desc}></Content>
         </div>
      );
   }
}

export default App;
