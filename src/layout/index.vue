<template>
  <div class="layout_index">
    <div class="header">
      <div class="header_left">
        <div class="header_title">平台名称</div>
        <div class="header_hr" />
        <div class="header_el-dropdown_switch">
          <img :src="switchIcon" alt="" class="switch_icon" @click="switchIconNav">
        </div>
      </div>
      <div class="header_right">
        <el-dropdown class="admin_user">
          <span class="el-dropdown-link">
            <img src="../assets/icon/user_icon.png" alt="" class="user_img">
            {{ username }}<i class="el-icon-caret-bottom el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown" class="admin_user_popper">
            <el-dropdown-item>修改信息</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="user_number">
          <img src="../assets/icon/browse_icon.png" alt="" class="user_img">
          用户浏览数：
          <span>102400</span>
        </div>
      </div>
    </div>
    <div class="main" :class="switchMain">
      <div class="nav_left">
        <el-scrollbar class="main-scrollbar" wrap-class="scrollbar-wrapper">
          <!--<el-menu
            :default-active="defaultActive"
            class="nav_el_menu el-menu-vertical-demo"
            :collapse="isCollapse"
            :unique-opened="true"
            background-color="#020C1C"
            text-color="#8098BE"
            active-text-color="#2B9EFF"
            :router="true"
          >-->
          <el-menu
            :default-active="defaultActive"
            class="nav_el_menu el-menu-vertical-demo"
            :collapse="isCollapse"
            :unique-opened="true"
            :router="true"
          >
            <template v-for="menu in routes">
              <el-menu-item v-if="menu.meta === undefined&&!menu.hidden" :key="menu.path" :index="Path(menu.path)">
                <i :class="menu.children[0].meta.icon" class="menu_img_icon" />
                <span slot="title" class="menu_title">{{ menu.children[0].meta.title }}</span>
              </el-menu-item>
              <el-submenu v-else-if="!menu.hidden" :key="menu.path" :index="menu.path">
                <template slot="title">
                  <i :class="menu.meta.icon" class="menu_img_icon" />
                  <span slot="title" class="menu_title">{{ menu.meta.title }}</span>
                </template>
                <el-menu-item v-for="son in menu.children" :key="son.path" :index="childPath(menu.path, son.path)">{{ son.meta.title }}</el-menu-item>
              </el-submenu>
            </template>
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="app_main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      username: 'admin',
      switchMain: 'openNav',
      switchIcon: require('../assets/icon/switchIcon_down.png'),
      defaultActive: this.$route.path,
      isCollapse: false
    }
  },
  computed: {
    routes() {
      console.log('this.$router.options.routes1:', this.$router.options.routes)
      return this.$router.options.routes
    }
  },
  watch: {
    '$route'(to, from) {
      this.defaultActive = to.path
    }
  },
  methods: {
    Path(e) {
      if (e === '/') {
        return '/Dashboard'
      } else {
        return e
      }
    },
    childPath(path, path1) {
      return `${path}/${path1}`
    },
    switchIconNav() {
      if (this.isCollapse) {
        this.isCollapse = false
        this.switchMain = 'openNav'
        this.switchIcon = require('../assets/icon/switchIcon_down.png')
      } else {
        this.isCollapse = true
        this.switchMain = 'hideNav'
        this.switchIcon = require('../assets/icon/switchIcon_up.png')
      }
    }
  }
}
</script>