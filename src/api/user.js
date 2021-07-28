import request from '@/utils/request.js'

export function login (data) {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data
  })
}

// 获取用户频道列表
export function getUserChannels () {
  return request({
    method: 'get',
    url: '/app/v1_0/user/channels'
  })
}
