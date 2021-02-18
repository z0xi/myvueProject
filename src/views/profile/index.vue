<template>
  <a>{{ user.name }}</a>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  data() {
    return {
      user: {},
      activeTab: 'activity'
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        email: 'admin@test.com',
        avatar: this.avatar
      }
    }
  }
}
</script>

<style scoped>

</style>
