<template>
  <div class="test">
    <h1>vuex测试页面</h1>
    <button @click="$store.commit('increment')">点我加一</button>
    <P>{{ $store.state.count }}</P>
    <button @click='Jisuan'>点我佳佳</button>
    <p>{{ count }} </p>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  components: {},
  props: [],
  data () {
    return {
      count: window.localStorage.getItem('count') ? Number(window.localStorage.getItem('count')) : 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    Jisuan () {
      this.count++
      window.localStorage.setItem('count', this.count)
    }
  }
}

</script>

<style scoped lang="less">
</style>
