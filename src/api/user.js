import request from '@/utils/request'

export function login(params) {
  return request({
    url: '/login',
    method: 'post',
    params
  })
}

export function getInfo(token) {
  return request({
    url: '/user',
    method: 'get',
    params: token
  })
}

export function changeInfo(params) {
  return request({
    url: '/user/info',
    method: 'post',
    params
  })
}

export function changePassword(params) {
  return request({
    url: '/user/password',
    method: 'post',
    params
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
