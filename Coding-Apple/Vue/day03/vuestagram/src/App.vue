<template>
   <div id="app">
      <div class="header">
         <ul v-if="step > 0" class="header-button-left">
            <li v-on:click="step--">Cancel</li>
         </ul>
         <ul v-if="step == 1" class="header-button-right">
            <li v-on:click="step++">Next</li>
         </ul>
         <ul v-if="step == 2" class="header-button-right">
            <li v-on:click="publish">Publish</li>
         </ul>

         <img src="./assets/logo.png" class="logo" />
      </div>

      <Body
         :newFilter="newFilter"
         v-on:textwrite="textWrite = $event"
         :Postings="Postings"
         :step="step"
         :imgsrc="imgsrc"
      />

      <button v-on:click="showMore">더보기</button>
      <p>{{ $store.state.name }}</p>
      <p>{{ $store.state.age }}</p>
      <!-- <button v-on:click=" $store.state.이름 = 'park' ">버튼</button> -->
      <button v-on:click="$store.commit('changeName', '김씨')">버튼</button>
      <button v-on:click="$store.commit('agePlus')">나이+</button>

      <div class="footer">
         <ul class="footer-button-plus">
            <input v-on:change="upload" type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
         </ul>
      </div>
      <p>{{ trans }}</p>
   </div>
</template>

<script>
import Body from "./components/Body.vue";
import Postdata from "./assets/postdata.js";
import EventBus from "./bus.js";
import axios from "axios";

export default {
   name: "App",
   data() {
      return {
         step: 0,
         imgsrc: "",
         Postings: Postdata,
         textData: "",
         textWrite: "",
         newFilter: "",
         trans: "",
      };
   },
   components: {
      Body: Body,
   },
   methods: {
      showMore() {
         axios
            .get("https://yogoho210.github.io/postdata2.json")
            .then((a) => {
               this.Postings.push(a.data);
            })
            .catch(() => {
               console.log("에러났어요");
            });
      },
      upload(e) {
         this.step = this.step + 1;

         let file = e.target.files;
         let reader = new FileReader();
         reader.readAsDataURL(file[0]);
         reader.onload = (e) => {
            this.imgsrc = e.target.result;
         };
      },
      publish() {
         this.step = 0;

         var objectData = {
            name: "myName",
            userImage: "https://placeimg.com/100/100/arch",
            postImage: this.imgsrc,
            likes: 0,
            date: "May 15",
            liked: false,
            caption: this.textWrite,
            filter: this.newFilter,
         };
         // this.Postings.push(); 배열 뒤에 추가
         this.Postings.unshift(objectData); //배열 앞에 추가
         this.textWrite = "";
      },
   },
   mounted() {
      EventBus.$on("sa", (data) => {
         this.newFilter = data;
      });
      EventBus.$on("tran", (data) => {
         this.trans = data;
      });
      EventBus.$on("cont", (data, num) => {
         this.Postings[num].likes = this.Postings[num].likes + data;
      });
   },
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   margin-top: 60px;
}
body {
   margin: 0;
}
ul {
   padding: 5px;
   list-style-type: none;
}
.logo {
   width: 22px;
   margin: auto;
   display: block;
   position: absolute;
   left: 0;
   right: 0;
   top: 13px;
}
.header {
   width: 100%;
   height: 40px;
   background-color: white;
   padding-bottom: 8px;
   position: sticky;
   top: 0;
}
.header-button-left {
   color: skyblue;
   float: left;
   width: 50px;
   padding-left: 20px;
   cursor: pointer;
   margin-top: 10px;
}
.header-button-right {
   color: skyblue;
   float: right;
   width: 50px;
   cursor: pointer;
   margin-top: 10px;
}
.footer {
   width: 100%;
   position: sticky;
   bottom: 0;
   padding-bottom: 10px;
   background-color: white;
}
.footer-button-plus {
   width: 80px;
   margin: auto;
   text-align: center;
   cursor: pointer;
   font-size: 24px;
   padding-top: 12px;
}
.sample-box {
   width: 100%;
   height: 600px;
   background-color: bisque;
}
.inputfile {
   display: none;
}
.input-plus {
   cursor: pointer;
}
#app {
   box-sizing: border-box;
   font-family: "consolas";
   margin-top: 60px;
   width: 100%;
   max-width: 460px;
   margin: auto;
   position: relative;
   border-right: 1px solid #eee;
   border-left: 1px solid #eee;
}
</style>
