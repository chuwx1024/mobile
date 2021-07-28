<template>
  <div class="tabbar">
    <router-view/>
    <TabbarBottom/>
  </div>
</template>

<script>
import TabbarBottom from '@/views/tabbar/tabbarBottom'

export default {
  name: 'TabbarPage',
  components: {
    TabbarBottom
  },
  props: [],
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
</style>
