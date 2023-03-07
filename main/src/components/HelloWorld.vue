<!--<template>-->
<!--  <div class="hello">-->
<!--    <p>list:</p>-->
<!--    {{list}}-->
<!--  </div>-->
<!--</template>-->

<script>
export default {
  name: 'HelloWorld',
  props: {
    list: {
      default: () => []
    },
    a: {
      type: Number
    },
    msg: String
  },
  computed: {
  },
  data () {
    return {

    }
  },
  render (createElement, context) {
    console.log(createElement, context, this.list, this.a)
    return <p>{this.list}</p>
  },
  created () {
    console.log(this)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
