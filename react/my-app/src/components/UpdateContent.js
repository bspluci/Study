import React, { Component } from "react";

class UpdateContent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         title: this.props.data.title,
         desc: this.props.data.desc,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleText = this.handleText.bind(this);
   }

   handleChange(e) {
      this.setState({ title: e.target.value });
   }
   handleSubmit(e) {
      e.preventDefault();
      var _title = e.target.title.value;
      var _desc = e.target.desc.value;
      this.props.handleSubmit(_title, _desc);
   }
   handleText(e) {
      this.setState({ desc: e.target.value });
   }

   render() {
      console.log(this.props.data);
      console.log("Update Content render");
      return (
         <article>
            <h2>Update</h2>
            <form
               action="/create_process"
               method="post"
               // onSubmit={function(e) {
               //    e.preventDefault();
               //    var _title = e.target.title.value;
               //    var _desc = e.target.desc.value;
               //    this.props.onSubmit(_title, _desc);
               // }.bind(this)}
               onSubmit={this.handleSubmit}
            >
               <p>
                  <input
                     type="text"
                     name="title"
                     placeholder="title"
                     value={this.state.title}
                     onChange={this.handleChange}
                  ></input>
               </p>
               <p>
                  <textarea
                     name="desc"
                     placeholder="description"
                     value={this.state.desc}
                     onChange={this.handleText}
                  />
               </p>
               <p>
                  <input type="submit"></input>
               </p>
            </form>
         </article>
      );
   }
}

export default UpdateContent;
