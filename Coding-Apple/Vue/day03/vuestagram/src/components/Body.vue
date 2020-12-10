<template>
   <div class="body">
      <div v-if="step == 0">
         <Post :Postings="Postings[i]" v-for="(as, i) in Postings" v-bind:key="i" :newFilter="newFilter" :num="i" />
      </div>

      <div v-if="step == 1">
         <div :class="`upload-image ${newFilter}`" :style="`background-image:url( ${imgsrc} )`"></div>
         <div class="filters">
            <FilterBox :filterName="filterName[i]" v-for="(as, i) in filterName" :key="i" :imgsrc="imgsrc">
               <p class="filterTitle">{{ filterName[i] }}</p>
            </FilterBox>
         </div>
         <button v-on:click="translate" value="넘어가쪄">aaaaaaaaaaaaaaaaaa</button>
      </div>

      <div v-if="step == 2">
         <div :class="`upload-image ${newFilter}`" :style="`background-image:url( ${imgsrc} )`"></div>
         <div class="write">
            <textarea v-on:input="$emit('textwrite', $event.target.value)" class="write-box">write!</textarea>
         </div>
      </div>
   </div>
</template>

<script>
import Post from "./Post.vue";
import EventBus from "./../bus.js";
import FilterBox from "./FilterBox.vue";

export default {
   props: {
      Postings: Array,
      step: Number,
      imgsrc: String,
      newFilter: String,
   },
   components: {
      Post: Post,
      FilterBox: FilterBox,
   },
   data() {
      return {
         filterName: [
            "normal",
            "clarendon",
            "gingham",
            "moon",
            "lark",
            "reyes",
            "juno",
            "slumber",
            "aden",
            "perpetua",
            "mayfair",
            "rise",
            "hudson",
            "valencia",
            "xpro2",
            "willow",
            "lofi",
            "inkwell",
            "nashville",
         ],
      };
   },
   methods: {
      translate(e) {
         EventBus.$emit("tran", e.target.value);
      },
   },
};
</script>

<style>
.upload-image {
   width: 100%;
   height: 450px;
   background: cornflowerblue;
   background-size: cover;
}
.filters {
   display: flex;
   overflow-x: scroll;
   white-space: nowrap;
}
.filter-1 {
   width: 100px;
   height: 100px;
   background-color: cornflowerblue;
   margin: 10px 10px 10px auto;
   padding: 8px;
   display: inline-block;
   color: white;
   background-size: cover;
}
.filters::-webkit-scrollbar {
   height: 5px;
}
.filters::-webkit-scrollbar-track {
   background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
   background: #888;
   border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
   background: #555;
}
.write-box {
   border: none;
   width: 90%;
   height: 100px;
   padding: 15px;
   margin: auto;
   display: block;
   outline: none;
}
.filterTitle {
   background: rgba(0, 0, 0, 0.5);
}
</style>
