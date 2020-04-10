import React, { Component } from "react";
import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import { setup } from "axios-cache-adapter";

// Create `axios` instance with pre-configured `axios-cache-adapter` attached to it
const api = setup({
   // `axios` options
   baseURL: "http://askat.me:8000/api/slow",

   // `axios-cache-adapter` options
   cache: {
      maxAge: 15 * 60 * 1000,
   },
});

// Send a GET request to some REST api
api.get("http://askat.me:8000/api/slow	").then(async (response) => {
   // Do something awesome with response.data \o/
   console.log("Request response:", response);
   console.log(response.data);

   // Interacting with the store, see `localForage` API.
   const length = await api.cache.length();

   console.log("Cache store length:", length);
});

class App extends Component {
   id = 0;
   state = {
      data: null,
      birthday: null,
      num: null,
   };

   handleChange = (e) => {
      this.setState({
         birthday: e.target.value,
      });
   };

   handleClickA = () => {
      axios.get("http://askat.me:8000/api/lotto").then((response) => {
         this.setState({
            data: response.data.join(" "),
         });
      });
   };

   handleClickB = () => {
      this.state.birthday !== null &&
         axios.get(`http://askat.me:8000/api/fortune/${this.state.birthday}`).then((response) => {
            this.setState({
               data: response.data,
            });
         });
   };

   handleClickC = () => {
      axios
         .get("http://askat.me:8000/api/bad")
         .then((response) => {
            this.setState({
               data: response.data,
            });
         })
         .catch((error) => {
            alert(error);
         });
   };

   render() {
      const { birthday } = this.state;

      return (
         <div>
            <input name="birthday" type="date" onChange={this.handleChange} />
            <button onClick={this.handleClickA}>버튼A</button>
            <button onClick={this.handleClickB}>버튼B</button>
            <button onClick={this.handleClickC}>버튼C</button>
            <button onClick={this.handleClickD}>버튼D</button>
            <ul>
               <li>{birthday}</li>
            </ul>
         </div>
      );
   }
}

export default App;
