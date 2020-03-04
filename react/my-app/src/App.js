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
         selected_content_id: 2,
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
      } else if (this.state.mode == "read") {
         for (let i = 0; i < this.state.contents.length; i++) {
            var data = this.state.contents[i];
            if (data.id == this.state.selected_content_id) {
               _title = data.title;
               _desc = data.desc;
               break;
            }
         }
      }
      var subject = this.state.subject;
      return (
         <div className="App">
            <Subject
               var
               title={subject.title} //
               sub={subject.sub}
               onChangePage={function() {
                  this.setState({ mode: "welecom" });
               }.bind(this)}
            ></Subject>
            <TOC
               onChangePage={function(id) {
                  this.setState({ mode: "read", selected_content_id: Number(id) });
               }.bind(this)}
               content={this.state.contents}
            ></TOC>
            <Content title={_title} desc={_desc}></Content>
         </div>
      );
   }
}

export default App;
