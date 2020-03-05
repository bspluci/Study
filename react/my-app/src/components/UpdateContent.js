import React, { Component } from "react";

class UpdateContent extends Component {
   constructor(props) {
      super(props);
      this.state = {
         id: this.props.data.id,
         title: this.props.data.title,
         desc: this.props.data.desc,
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit(e) {
      e.preventDefault();
      var _id = this.state.id;
      var _title = this.state.title;
      var _desc = this.state.desc;
      this.props.onSubmit(_title, _desc, _id);
   }

   render() {
      return (
         <article>
            <h2>Update</h2>
            <form
               action="/create_process"
               method="post"
               onSubmit={this.handleSubmit}
            >
               <input type="hidden" name="id" value={this.state.id}></input>
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
                     onChange={this.handleChange}
                  ></textarea>
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
