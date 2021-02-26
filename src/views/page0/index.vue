<template>
  <div class="homeWrap">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" height="100%" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message" text-align="center" />技战法</template>
            <el-menu-item index="1-1" text-align="center">通用技战法</el-menu-item>
            <el-menu-item index="1-2" text-align="center">实有人口</el-menu-item>
            <el-menu-item index="1-3" text-align="center">入室盗窃</el-menu-item>
            <el-menu-item index="1-4" text-align="center">上访管控</el-menu-item>
            <el-menu-item index="1-5" text-align="center">FK监测</el-menu-item>
            <el-menu-item index="1-6" text-align="center">涉毒打击</el-menu-item>
            <el-menu-item index="1-7" text-align="center">GB重点</el-menu-item>
            <el-menu-item index="1-8" text-align="center">医闹肇事</el-menu-item>
            <el-menu-item index="1-9" text-align="center">精神病人</el-menu-item>
            <el-menu-item index="1-10" text-align="center">社区管控</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: left; font-size: 12px">
          <p><strong>通用技战法</strong></p>
          <p>包含这个系统所有的技战法，用户可以依据自己的需求来自定义使用</p>
        </el-header>
        <el-main>
          <template>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-default btn-lg" @click="go">频繁过人</button>
                  </p>
                </div>
              </el-col>
              <el-col :span="12" style="text-align: left">
                <div class="grid-content bg-purple">

                  <el-row>
                    <el-col :span="7">
                      <div class="grid-content bg-purple">
                        <!--                        插入图片-->
                        <div class="demo-image">
<!--                          <div class="block" v-for="fit in fits" :key="fit">-->
                          <div class="block">
                            <span class="demonstration"></span>
                            <el-image
                              style="width: 150px; height: 150px"
                              :src="url">
                            </el-image>
                          </div>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="17">
                      <div class="grid-content bg-purple">
                        <el-row-bg>
                          <p class="bg-primary">
                            <el-link type="primary" @click="go">时空档案过滤</el-link>
                          </p>
                          <p>
                            此技战法在没有嫌疑人的人脸图片信息时，在指定时间、区域范围内排查作案嫌疑人；又如某个时间段内找出所有出现在吸毒窝点的人。
                          </p>
                        </el-row-bg>

                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-success" @click="go">昼伏夜出</button>
                  </p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-success" @click="go">时空碰撞</button>
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-success" @click="go">首次出现</button>
                  </p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-success" @click="go">连续出现</button>
                  </p>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-success" @click="go">感知离开</button>
                  </p>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <p class="bg-primary">
                    <button type="button" class="btn btn-success" @click="go">精准同行分析</button>
                  </p>
                </div>
              </el-col>
            </el-row>
          </template>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  name: 'Page0',
  methods: {
    go() {
      this.$router.push('/example/table')
    }
  }
}
</script>
<style scoped>

.el-header {
  background-color: transparent;
  color: #bfcbd9;
  line-height: 10px;
}
.el-aside {
  color: #bfcbd9;
  height:100%;
}
.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
#logo{
  background: url("../../img/1.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
.row{
  border:1px solid #2b2f3a;
  height: 140px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 140px;
}
.col{
  border: 1px solid #2b2f3a;
  background-color: transparent;
}
.el-row {
  margin-bottom: 20px;

  &:last-child {
   margin-bottom: 0;
     /*color: #bfcbd9;*/
 }
}
.el-col {
  border-radius: 2px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #1f2d3d;
  color: #bfcbd9;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 2px;
  min-height: 140px;

}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>
