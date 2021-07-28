<template>
  <div class="login">
    <van-nav-bar
      title="登录"
    />
    <van-cell-group>
      <van-field   required v-model="user.mobile" label="手机号:" placeholder="请输入手机号" />
      <van-field  required v-model="user.code" label="密码:" placeholder="请输入密码" />
    </van-cell-group>
    <div class="loginOption">
      <van-button type="info" size="large" @click="goNext">登录</van-button>
    </div>
  </div>

</template>

<script>
import { login } from '@/api/user.js'

export default {
  name: 'LoginPage',
  components: {},
  props: [],
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  computed: {},
  watch: {},
  created () {
    this.onLogin()
  },
  methods: {
    // onLogin () {
    //   request({
    //     method: 'post',
    //     url: '/app/v1_0/authorizations',
    //     data: this.user
    //   }).then(res => {
    //     console.log(res)
    //   })
    // }
    async onLogin () {
      // const res = await request({
      //   method: 'post',
      //   url: '/app/v1_0/authorizations',
      //   data: this.user
      // })
      // console.log(res)
      this.$toast.loading({
        duration: 5,
        forbidClick: true,
        message: '登录中....'
      })
      try {
        // const res = await request({
        //   method: 'post',
        //   url: '/app/v1_0/authorizations',
        //   data: this.user
        // })
        const res = await login(this.user)
        this.$store.commit('setUser', res.data.data)
        this.$toast.success('登录成功')
        // this.$router.push('/')
      } catch (error) {
        this.$toast.fail('登录失败' + error)
      }
      // toast.clear()  success 和fail 执行的时候,会把其他的toast先清除
    },
    goNext () {
      this.$router.push('/')
    }
  }
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
