<template>
  <div class="home">
    <HelloWorld msg="Home 路由" :list="list" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { reactive, toRefs } from '@vue/composition-api'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup () {
    const state = reactive({
      list: []
    })

    setTimeout(() => {
      state.list = Array(Math.round(Math.random() * 10)).fill(Math.random())
      console.log(state)
    }, 1000)

    return {
      ...toRefs(state)
    }
  }
}
</script>
