<template>
   <div id="app">
      <div>
         <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">Forent-End</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
               <nav>
                  <router-link to="/">Home</router-link>
                  <router-link to="/Project">Project</router-link>
                  <router-link to="/Detail/1">Detail</router-link>
               </nav>

               <!-- Right aligned nav items -->
               <b-navbar-nav class="ml-auto">
                  <b-nav-form>
                     <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                     <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                  </b-nav-form>

                  <b-nav-item-dropdown text="Lang" right>
                     <b-dropdown-item href="#">EN</b-dropdown-item>
                     <b-dropdown-item href="#">ES</b-dropdown-item>
                     <b-dropdown-item href="#">RU</b-dropdown-item>
                     <b-dropdown-item href="#">FA</b-dropdown-item>
                  </b-nav-item-dropdown>

                  <b-nav-item-dropdown right>
                     <!-- Using 'button-content' slot -->
                     <template v-slot:button-content>
                        <em>User</em>
                     </template>
                     <b-dropdown-item href="#">Profile</b-dropdown-item>
                     <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                  </b-nav-item-dropdown>
               </b-navbar-nav>
            </b-collapse>
         </b-navbar>
      </div>
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <button v-on:click="$router.push('/Detail/1')">버튼</button>
      <button v-on:click="$router.push('/Detail/2')">버튼</button>
      <Router-view :posts="posts" />
   </div>
</template>

<script>
// import Home from "./components/Home.vue";

export default {
   name: "App",
   data() {
      return {
         posts: [
            {
               title: "첫 째 프로젝트 : JavaScript 쇼핑몰",
               content: "서버가 아닌 프론트엔드 환경에서 대부분의 기능을 만들어낼 수 있기 때문에 만들어보았습니다.",
               date: "September 24, 2019",
               number: 0,
            },
            {
               title: "둘 째 프로젝트 : 뷰로만든 뷰동산",
               content: "이제 앱보다는 PWA가 대세입니다. 뷰를 이용하면 매끈한 앱같은 웹을 만들 수 있습니다.",
               date: "October 20, 2019",
               number: 1,
            },
            {
               title: "셋 째 프로젝트 : 현피 앱",
               content: "거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요",
               date: "September 24, 2019",
               number: 2,
            },
         ],
      };
   },
   components: {},
};
</script>

<style>
#app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
   /* margin-top: 60px; */
}
</style>
