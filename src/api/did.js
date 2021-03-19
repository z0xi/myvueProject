import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/page3/step1/getIssuerList',
    method: 'POST',
    params
  })
}
