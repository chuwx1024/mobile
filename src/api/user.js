import request from '@/utils/request.js'

export function login (data) {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data
  })
}
