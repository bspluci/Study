<template>
   <div class="container mt-5">
      <div>
         <h4>{{ posts[0].title }}</h4>
         <p>{{ posts[0].content }}</p>
         <p>{{ posts[0].date }}</p>
         <hr />
      </div>
   </div>
</template>

<script>
export default {
   props: {
      posts: Array,
   },
};
</script>

<style></style>
