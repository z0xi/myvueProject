<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <man-card class="bg" :user="user" />
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="抓拍记录" name="activity">
                <shotRecord />
              </el-tab-pane>
              <el-tab-pane label="重点同行人分析" name="timeline">
                <peer />
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
import shotRecord from './components/shotRecord'
import peer from './components/peer'

export default {
  name: 'manDetail',
  components: { manCard, shotRecord, peer },
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
<style lang="scss" scoped>
.el-card{
  background-color: transparent;
  color:white;
}
</style>
