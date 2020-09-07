<template>
   <div id="app">
      <div class="container">
         <div class="row">
            <div class="col-md-2">
               <ul>
                  <li v-on:click="clickSortPrice" :style="style">가격순 정렬</li>
                  <li v-on:click="clickSortSpelling" :style="style">가나다순정렬</li>
                  <li v-on:click="clickSortReturn" :style="style">다시원래대로</li>
               </ul>
            </div>
            <div class="col-md-10">
               <div class="row">
                  <!-- <Card :hi="hi" /> -->
                  <Card :rooms="rooms[i]" v-for="(as, i) in rooms" v-bind:key="i" />
               </div>
            </div>
         </div>
      </div>
      <!-- <img alt="Vue logo" src="./assets/logo.png" />

      <p>{{ 블로그글 }}</p>
      <p :style="스타일">{{ 블로그글2 }}</p>
      <h4 v-for="작명 in 블로그글들" v-bind:key="작명">{{ 작명 }}</h4>

      <div v-for="aa in posts" v-bind:key="aa">
         <h4>{{ aa.title }}</h4>
         <p>{{ aa.data }}</p>
      </div> -->
      <!-- <p>{{ rooms }}</p> -->
      <p v-once>{{ maped() }}</p>
   </div>
</template>

<script>
import Data from "./assets/data.js";
import Card from "./components/Card.vue";

export default {
   name: "App",
   data() {
      return {
         hi: "안녕",
         rooms: Data,
         orignalRooms: Data,
         style: "cursor: pointer",
         //  블로그글: "강남역 추천 맛집",
         //  블로그글2: "남자옷 추천",
         //  블로그글들: ["글1", "글2", "글3"],
         //  스타일: "color: red",
         //  posts: [
         //     {
         //        title: "오늘의 일기",
         //        data: "4월 20일",
         //     },
         //     {
         //        title: "수분크림 추천",
         //        data: "3월 4일",
         //     },
         //     {
         //        title: "강남 맛집 후기",
         //        data: "2월 22일",
         //     },
         //  ],
      };
   },
   components: {
      Card,
   },
   methods: {
      maped() {
         this.rooms = this.rooms.map(function(item, idx) {
            const data = item;
            data["key"] = idx;
            return data;
         });
      },

      clickSortPrice() {
         this.rooms.sort(function(a, b) {
            return a.price - b.price;
         });
      },

      clickSortSpelling() {
         this.rooms.sort(function(a, b) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
         });
      },

      clickSortReturn() {
         this.rooms.sort(function(a, b) {
            return a.key - b.key;
         });
      },
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
</style>
