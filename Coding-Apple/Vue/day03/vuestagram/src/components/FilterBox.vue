<template>
   <div>
      <div v-on:click="filterClick" :class="`filter-item ${filterName}`" :style="`background-image:url(${imgsrc})`">
         <slot></slot>
      </div>
   </div>
</template>

<script>
import EventBus from "./../bus.js";

export default {
   props: {
      imgsrc: String,
      filterName: String,
   },
   methods: {
      filterClick() {
         EventBus.$emit("sa", this.filterName);
      },
   },
};
</script>

<style>
.filter-item {
   width: 100px;
   height: 100px;
   margin: 10px 10px 10px auto;
   padding: 8px;
   display: inline-block;
   color: white;
   background-size: cover;
   background-position: center;
   border: 1px solid #000;
}
</style>
