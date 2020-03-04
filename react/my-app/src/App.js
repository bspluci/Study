import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.max_content_id = 3;
      this.state = {
         mode: "create",
         selected_content_id: 2,
         subject: { title: "WEB", sub: "world wide web!" },
         welecom: { title: "Welecom", desc: "Hello, React!!" },
         contents: [
            { id: 1, title: "HTML", desc: "HTML is HyperText..." },
            { id: 2, title: "CSS", desc: "CSS is for design..." },
            { id: 3, title: "JavaScript", desc: "JavaScript..." },
         ],
      };
   }

   gerReadContent() {
      for (let i = 0; i < this.state.contents.length; i++) {
         var data = this.state.contents[i];
         if (data.id === this.state.selected_content_id) {
            return data;
         }
      }
   }

   getContent() {
      var _title,
         _desc,
         _article = null;
      if (this.state.mode === "welecom") {
         _title = this.state.welecom.title;
         _desc = this.state.welecom.desc;
         _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
      } else if (this.state.mode === "read") {
         var _content = this.gerReadContent();
         _article = (
            <ReadContent
               title={_content.title}
               desc={_content.desc}
            ></ReadContent>
         );
      } else if (this.state.mode === "create") {
         _article = (
            <CreateContent
               onSubmit={function(_title, _desc) {
                  this.max_content_id = this.max_content_id + 1;

                  var _contents = this.state.contents.concat({
                     id: this.max_content_id,
                     title: _title,
                     desc: _desc,
                  });
                  this.setState({
                     contents: _contents,
                  });
                  console.log(_title, _desc);
               }.bind(this)}
            ></CreateContent>
         );
      } else if (this.state.mode === "update") {
         var _content = this.gerReadContent();
         _article = (
            <UpdateContent
               data={_content}
               onSubmit={function(_title, _desc) {
                  this.max_content_id = this.max_content_id + 1;
                  var _contents = this.state.contents.concat({
                     id: this.max_content_id,
                     title: _title,
                     desc: _desc,
                  });
                  this.setState({
                     contents: _contents,
                  });
                  console.log(_title, _desc);
               }.bind(this)}
            ></UpdateContent>
         );
      }
      return _article;
   }

   render() {
      var subject = this.state.subject;
      return (
         <div className="App">
            <Subject
               var
               title={subject.title}
               sub={subject.sub}
               onChangePage={function() {
                  this.setState({ mode: "welecom" });
               }.bind(this)}
            ></Subject>
            <TOC
               onChangePage={function(id) {
                  this.setState({
                     mode: "read",
                     selected_content_id: Number(id),
                  });
               }.bind(this)}
               content={this.state.contents}
            ></TOC>
            <Control
               onChangeMode={function(_mode) {
                  this.setState({ mode: _mode });
               }.bind(this)}
            ></Control>
            {this.getContent()}
         </div>
      );
   }
}

export default App;
