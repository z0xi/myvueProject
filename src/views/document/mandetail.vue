<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <man-card :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="抓拍记录" name="activity">
                <shotrecord />
              </el-tab-pane>
              <el-tab-pane label="重点同行人分析" name="timeline">
                <timeline />
              </el-tab-pane>
              <el-tab-pane label="历史预警" name="account">
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
import manCard from './components/manCard'
import shotrecord from './components/shotrecord'
import Timeline from './components/Timeline'
import Account from './components/Account'

export default {
  name: 'mandetail',
  components: { manCard, shotrecord, Timeline, Account },
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
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      this.user = {
        name: this.name,
        avatar: this.avatar
      }
    }
  }
}
</script>
