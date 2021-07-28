<template>
  <div class="home">
    <!-- nav -->
    <van-nav-bar title="首页" />
    <!-- 标签页 -->
    <van-tabs v-model="active">
      <van-tab
        v-for="channel in channels"
        :key="channel.id"
        :title="channel.name">
        <van-list
          v-model="loading"
          :finished="channel.finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in channel.articles"
          :key="item.art_id"
          :title="item.title" />
        </van-list>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import { getChannels, getArticles } from '@/api/user2'
export default {
  name: 'Home2',
  components: {},
  props: [],
  data () {
    return {
      active: 0,
      channels: [],
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getChannels()
  },
  methods: {
    async getChannels () {
      const res = await getChannels()
      // console.log(res)
      const channels = res.data.data.channels
      channels.forEach(element => {
        element.articles = []
        element.timestamp = null
        element.finished = false
      })
      this.channels = channels
    },
    async onLoad () {
      const activeChannel = this.channels[this.active]
      const articles = activeChannel.articles
      const res = await getArticles({
        channel_id: activeChannel.id,
        timestamp: activeChannel.timestamp || Date.now(),
        with_top: 1
      })
      console.log(res)
      const pretimestamp = res.data.data.pre_timestamp
      // 添加到文章中
      articles.push(...res.data.data.results)
      this.loading = false
      if (pretimestamp) {
        activeChannel.timestamp = pretimestamp
      } else {
        activeChannel.finished = true
      }
    }
    // onLoad () {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1)
    //     }

    //     // 加载状态结束
    //     this.loading = false

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // }
  }
}

</script>

<style scoped lang="less">
</style>
