<template>
  <div class="login">
    <van-nav-bar
      title="登录"
    />
    <van-cell-group>
      <van-field   required v-model="value" label="手机号:" placeholder="请输入手机号" />
      <van-field  required v-model="value" label="密码:" placeholder="请输入密码" />
    </van-cell-group>
    <div class="loginOption">
      <van-button type="info" size="large">登录</van-button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'LofinPage',
  components: {},
  props: [],
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}

</script>

<style scoped lang="less">
.login {
  height: 100vh;
  background-color: lavenderblush;
}
.van-cell-group {
  padding: 0 10px;
}
.loginOption {
  padding: 20px 10px;
  button {
    border-radius: 5px;
  }
}
</style>
