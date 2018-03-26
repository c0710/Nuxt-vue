import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
console.log('vuexvuexvuexxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
}
export default createStore
