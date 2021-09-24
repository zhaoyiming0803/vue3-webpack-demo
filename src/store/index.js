import { createStore } from 'vuex'

export default createStore({
  modules: {
    
  },

  state () {
    return {
      count: 0
    }
  },

  mutations: {
    increment (state) {
      state.count += 100
    }
  },

  actions: {
    
  }
})
