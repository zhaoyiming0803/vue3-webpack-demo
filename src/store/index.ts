import { createStore } from 'vuex'

interface State {
  count: number
}

export default createStore({
  modules: {
    
  },

  state () {
    return {
      count: 0
    }
  },

  mutations: {
    increment (state: State) {
      state.count += 100
    }
  },

  actions: {
    
  }
})
