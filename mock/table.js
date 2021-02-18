const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    did: '@sentence(5, 10)',
    'status|1': ['created', 'waiting', 'freshing'],
    devicedistrict: '广东省广州市番禺区',
    display_time: '@datetime',
    deviceposition: 'xx路xx号'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
