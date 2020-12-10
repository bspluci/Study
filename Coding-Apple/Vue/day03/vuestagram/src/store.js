import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'

Vue.use(Vuex);

export let store = new Vuex.Store({
   state: {
      name: "John",
      age: 30,
   },
   getters: {
      getAge(state) {
         return state.age;
      },
   }, // 데이터 꺼내는 법 (함수)
   mutations: {
      changeName(state, data) {
         state.name = data;
      },
      agePlus(state) {
         state.age++;
      },
   }, // 데이터 수정하는 (함수)
   actions: {
      // getData(context){
      //   axios.get('url').then(()=>{ context.commit('changeName') })
      // }
   }, // axios 하는곳
});
