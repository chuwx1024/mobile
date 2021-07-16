import request from '@/utils/request.js'

export async function login (data) {
  return request({
    method: 'post',
    url: '/app/v1_0/authorizations',
    data
  })
}
