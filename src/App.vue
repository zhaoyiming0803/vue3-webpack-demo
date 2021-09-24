<template>
  <router-view></router-view>
  <div>state.count: {{ state.count }}</div>
  <div>store.state.count: {{ store.state.count }}</div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  setup(props, context) {
    console.log('context: ', context)

    const store = useStore()

    const state = reactive({
      count: 0
    })

    const fn1 = () => {
      console.log('fn1')
      setTimeout(() => {
        store.commit('increment')
      })
    }

    const fn2 = () => {
      setInterval(() => {
        state.count += 1
      }, 1000)
      console.log('fn2')
    }

    onMounted(fn1)
    onMounted(fn2)

    return {
      state,
      store
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
