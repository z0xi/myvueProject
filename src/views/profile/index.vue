<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
          <box-card />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="信息" name="activity">
                <activity />
              </el-tab-pane>
              <el-tab-pane label="历史纪录" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="账户信息" name="account">
                <account :user="user" />
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Activity from './components/Activity'
import Timeline from './components/Timeline'
import Account from './components/Account'
import BoxCard from './components/BoxCard'

export default {
  name: 'Profile',
  components: { BoxCard, Activity, Timeline, Account },
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
        role: this.roles.join(' | '),
        email: 'admin@test.com',
        avatar: this.avatar
      }
      },
  }
}
</script>
<style>
.el-card{
  background: transparent;
  color:white;
}

</style>
