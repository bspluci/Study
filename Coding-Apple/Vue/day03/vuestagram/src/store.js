import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'

Vue.use(Vuex);

export let store = new Vuex.Store({
   state: {
      이름: "John",
      나이: 30,
   },
   getters: {
      getAge(state) {
         return state.나이;
      },
   }, // 데이터 꺼내는 법 (함수)
   mutations: {
      changeName(state, data) {
         state.이름 = data;
      },
      agePlus(state) {
         state.나이++;
      },
   }, // 데이터 수정하는 (함수)
   actions: {
      // getData(context){
      //   axios.get('url').then(()=>{ context.commit('changeName') })
      // }
   }, // axios 하는곳
});
