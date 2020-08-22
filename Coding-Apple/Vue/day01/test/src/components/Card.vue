<template>
   <div class="col-md-6">
      <img :style="style" :src="rooms.image" />
      <h4>{{ rooms.title }}</h4>
      <p>상품가격 : {{ rooms.price }}</p>
   </div>
</template>

<script>
export default {
   props: {
      hi: String,
      rooms: Object,
   },
   data() {
      return {
         style: "width: 100%",
      };
   },
};
</script>

<style></style>
