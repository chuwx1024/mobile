<template>
  <div class="homePage">
    <van-nav-bar title="首页" />
    <van-tabs v-model="active">
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key= channel.id>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="channel.finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <van-cell v-for="(item,index) in channel.articles"
              :key="index" :title="item.title" >
            </van-cell>
          </van-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import { getArticles } from '@/api/article'
export default {
  name: 'HomePage',
  components: {},
  props: [],
  data () {
    return {
      active: 0,
      loading: false,
      isLoading: false,
      channels: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadUserChannels()
  },
  methods: {
    // onLoad () {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   const activeChannel = this.channels[this.active]
    //   const articles = activeChannel.articles
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       // this.list.push(this.list.length + 1)
    //       articles.push(articles.length + 1)
    //     }

    //     // 加载状态结束
    //     this.loading = false

    //     // 数据全部加载完成
    //     if (articles.length >= 40) {
    //       this.finished = true
    //     }
    //   }, 1000)
    // },
    async onLoad () {
      // 获取数据
      const activeChannel = this.channels[this.active]
      const articles = activeChannel.articles
      const res = await getArticles({
        channel_id: activeChannel.id,
        timestamp: activeChannel.timestamp || Date.now(),
        with_top: 1
      })
      // console.log(res)
      // 把数据添加到列表中
      articles.push(...res.data.data.results)
      // 将loading设置为false
      this.loading = false
      // 判断有没有数据了
      const pretimestamp = res.data.data.pre_timestamp
      if (pretimestamp) {
        activeChannel.timestamp = pretimestamp
      } else {
        activeChannel.finished = true
      }
    },
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 1000)
    },
    async loadUserChannels () {
      const res = await getUserChannels()
      const channels = res.data.data.channels
      channels.forEach(element => {
        element.articles = []
        element.finished = false
        element.timestamp = null
      })
      this.channels = channels
    }
  }
}

</script>

<style scoped lang="less">
</style>
