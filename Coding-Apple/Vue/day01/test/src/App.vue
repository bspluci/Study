<template>
   <div id="app">
      <div class="container">
         <div class="row">
            <div class="col-md-2">
               <ul>
                  <li v-on:click="clickSortHandler()">가격순 정렬</li>
                  <li>가나다순정렬</li>
                  <li>다시원래대로</li>
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
      clickSortHandler() {
         this.rooms.sort(function(a, b) {
            return a.price - b.price;
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
