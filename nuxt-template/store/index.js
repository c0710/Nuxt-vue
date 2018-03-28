import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state: {
      count: 0,
      visits: []
    },
    mutations: {
      increment (state) {
        state.count++
      },
      ADD_VISIT(state, path) {
        state.visits.push({
          path,
          date: new Date().toJSON()
        })
      }
    }
  })
}
export default createStore
