<template>
   <div class="post">
      <div class="post-header">
         <div class="profile" :style="`background-image:url(${Postings.userImage})`"></div>
         <span class="profile-name">{{ Postings.name }}</span>
      </div>

      <div :class="`post-body ${Postings.filter}`" :style="`background-image:url(${Postings.postImage})`"></div>

      <div class="post-content">
         <button v-on:click="likeCounter">{{ Postings.likes }} Likes</button>
         <p>
            <strong>{{ Postings.name }}</strong>
            {{ Postings.caption }}
         </p>
         <p class="date">May 15</p>
      </div>
   </div>
</template>

<script>
import EventBus from "./../bus.js";

export default {
   props: {
      Postings: Object,
      newFilter: String,
      num: Number,
   },
   data() {
      return {};
   },
   methods: {
      likeCounter() {
         EventBus.$emit("cont", 1, this.num);
      },
   },
};
</script>

<style>
.post {
   width: 100%;
}
.profile {
   background-image: url("https://placeimg.com/100/100/arch");
   width: 30px;
   height: 30px;
   background-size: 100%;
   border-radius: 50%;
   float: left;
}
.profile-name {
   display: block;
   float: left;
   padding-left: 10px;
   padding-top: 7px;
   font-size: 14px;
}
.post-header {
   height: 30px;
   padding: 10px;
}
.post-body {
   background-image: url("https://placeimg.com/640/480/animals");
   height: 450px;
   background-position: center;
   background-size: cover;
}
.post-content {
   padding-left: 15px;
   padding-right: 15px;
   font-size: 14px;
}
.date {
   font-size: 11px;
   color: grey;
   margin-top: -8px;
}
</style>
