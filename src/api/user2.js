import request from '@/utils/request'

// 获取频道列表
export function getChannels () {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
// 获取文章列表
export function getArticles (params) {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
