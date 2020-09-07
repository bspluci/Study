<template>
   <div id="app">
      <transition name="fade">
         <div class="white-bg" v-if="openModal == true">
            <div class="row">
               <div class="col-md-6">
                  <img :src="rooms[clickNum].image" />
               </div>
               <div class="col-md-6 mt-5">
                  <h4>{{ rooms[clickNum].title }}</h4>
                  <p>상품가격 : {{ rooms[clickNum].price }}</p>
                  <input
                     type="range"
                     class="form-control-range"
                     min="1"
                     max="12"
                     v-modal="month"
                     v-on:change="rangeMonth"
                  />
                  <p>선택한 개월 수 : {{ month }}</p>
                  <p>총액 : {{}}</p>

                  <button>주문하기</button>
                  <button v-on:click="openModal = false">닫기</button>
               </div>
            </div>
         </div>
      </transition>

      <div class="container">
         <div class="row">
            <div class="col-md-2">
               <ul>
                  <li v-on:click="clickSortHandler">가격순 정렬</li>
                  <li v-on:click="clickSortSpelling">가나다순정렬</li>
                  <li v-on:click="clickSortBack">다시원래대로</li>
               </ul>
            </div>
            <div class="col-md-10">
               <div class="row">
                  <!-- <Card :hi="hi" /> -->
                  <Card v-on:click.native="showModal(i)" :rooms="rooms[i]" v-for="(as, i) in rooms" v-bind:key="i" />
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
         month: 0,
         clickNum: 1,
         openModal: false,
         hi: "안녕",
         rooms: Data,
         roomsCopy: [...Data],
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
      clickSortSpelling() {
         this.rooms.sort(function(a, b) {
            return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
         });
      },
      clickSortBack() {
         this.rooms = [...this.roomsCopy]; // 자바스크립트 레퍼런스 데이터타입
      },
      showModal(i) {
         this.openModal = !this.openModal;
         this.clickNum = i;
      },
      rangeMonth() {
         console.log(this.month);
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
.white-bg {
   position: fixed;
   width: 100%;
   height: 100%;
   background: white;
   z-index: 5;
}

/* 입장animation */
.fade-enter {
   opacity: 0;
}
.fade-enter-to {
   opacity: 1;
}
.fade-enter-active {
   transition: all 0.5s;
}

/* 퇴장animation */
.fade-leave {
   transform: translateY(0);
}
.fade-leave-to {
   transform: translateY(300px);
}
.fade-leave-active {
   opacity: 0;
   transition: all 0.5s;
}
</style>
