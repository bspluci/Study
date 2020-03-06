import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
import Footer from "./components/Footer";
import Text from "./components/Text";
import "./App.css";

class App extends Component {
   constructor(props) {
      super(props);
      this.max_content_id = 3;
      this.state = {
         mode: "welecom",
         selected_content_id: 2,
         subject: { title: "WEB", sub: "world wide web!" },
         welecom: { title: "Welecom", desc: "Hello, React!!" },
         contents: [
            { id: 1, title: "HTML", desc: "HTML is HyperText..." },
            { id: 2, title: "CSS", desc: "CSS is for design..." },
            { id: 3, title: "JavaScript", desc: "JavaScript is..." },
         ],
         ftmode: "park",
         name: "PARK JEONG HO",
      };

      this.onChangePage = this.onChangePage.bind(this);
      this.onChangeName = this.onChangeName.bind(this);
   }

   getReadContent() {
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
         var _content = this.getReadContent();
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

                  var _contents = Array.from(this.state.contents);
                  _contents.push({
                     id: this.max_content_id,
                     title: _title,
                     desc: _desc,
                  });

                  this.setState({
                     contents: _contents,
                     mode: "read",
                     selected_content_id: this.max_content_id,
                  });
               }.bind(this)}
            ></CreateContent>
         );
      } else if (this.state.mode === "update") {
         var _content = this.getReadContent();
         _article = (
            <UpdateContent
               data={_content}
               onSubmit={function(_title, _desc, _id) {
                  var _contents = Array.from(this.state.contents);
                  for (let i = 0; i < _contents.length; i++) {
                     if (_contents[i].id === _id) {
                        _contents[i] = { title: _title, desc: _desc, id: _id };
                        break;
                     }
                  }
                  this.setState({
                     contents: _contents,
                     mode: "read",
                  });
                  console.log(_title, _desc);
               }.bind(this)}
            ></UpdateContent>
         );
      }
      return _article;
   }

   onChangePage(mode, id) {
      this.setState({ mode: mode });
      this.setState({ selected_content_id: Number(id) });
   }

   onChangeName(mode, name) {
      this.setState({ ftmode: mode });
      this.setState({ name: name });
   }

   render() {
      var subject = this.state.subject;
      return (
         <div className="App">
            <Subject
               title={subject.title}
               sub={subject.sub}
               onChangePage={this.onChangePage}
            ></Subject>
            <TOC
               onChangePage={this.onChangePage}
               content={this.state.contents}
            ></TOC>
            <Control
               onChangeMode={function(_mode) {
                  if (_mode === "delete") {
                     if (window.confirm("really??")) {
                        var _contents = Array.from(this.state.contents);
                        for (let i = 0; i < _contents.length; i++) {
                           if (
                              _contents[i].id === this.state.selected_content_id
                           ) {
                              _contents.splice(i, 1);
                              break;
                           }
                        }
                        this.setState({
                           contents: _contents,
                           mode: "welwcom",
                        });
                        alert("delete!!");
                     }
                  } else {
                     this.setState({ mode: _mode });
                  }
               }.bind(this)}
            ></Control>
            {this.getContent()}
            <Footer
               ftmode={this.state.ftmode}
               onChangeName={this.onChangeName}
               name={this.state.name}
            ></Footer>
            <Text></Text>
         </div>
      );
   }
}

export default App;
