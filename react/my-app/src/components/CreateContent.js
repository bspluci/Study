import React, { Component } from "react";

class CreateContent extends Component {
   constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
   }

   onSubmit(e) {
      e.preventDefault();
      var _title = e.target.title.value;
      var _desc = e.target.desc.value;

      (_title !== "", _desc !== "")
         ? this.props.onSubmit(_title, _desc)
         : alert("내용을 입력해 주세요");
   }

   render() {
      return (
         <article>
            <h2>Create</h2>
            <form
               action="/create_process"
               method="post"
               onSubmit={this.onSubmit}
            >
               <p>
                  <input type="text" name="title" placeholder="title"></input>
               </p>
               <p>
                  <textarea name="desc" placeholder="description"></textarea>
               </p>
               <p>
                  <input type="submit"></input>
               </p>
            </form>
         </article>
      );
   }
}

export default CreateContent;
