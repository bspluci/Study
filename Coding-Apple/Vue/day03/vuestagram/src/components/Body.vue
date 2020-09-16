<template>
   <div class="body">
      <Post :Postings="Postings[i]" v-for="(as, i) in Postings" v-bind:key="i" />
   </div>
</template>

<script>
import Post from "./Post.vue";

export default {
   props: {
      Postings: Array,
   },
   components: {
      Post: Post,
   },
};
</script>

<style></style>
