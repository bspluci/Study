<template>
   <div class="container mt-5">
      <h4>{{ posts[$route.params.id].title }}</h4>
      <h4>글제목 : ??</h4>
      <p>내용 : ??</p>
   </div>
</template>

<script>
export default {
   name: "Detail",
   props: {
      posts: Array,
   },
};
</script>

<style></style>
