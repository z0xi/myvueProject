<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>About me</span>
    </div>

    <div class="user-profile">
      <el-row  :gutter="12">
        <el-col :span="12" style="text-align: left">
          <div class="box-center">
            <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
            </pan-thumb>
          </div>
        </el-col>
        <el-col :span="8" style="text-align: left">
        <div class="box-center">
          <div class="user-name text-center">{{ user.name }}</div>
          <div class="user-name text-center">wedi-12345678</div>
        </div>
        </el-col>
      </el-row>
    </div>

    <div class="user-bio">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>行为信息</span>
          </template>
          <el-menu-item-group>
            <template slot="title">昼伏夜出</template>
          </el-menu-item-group>
          <el-menu-item-group >
            <template slot="title">活跃地点</template>
          </el-menu-item-group>
          <el-menu-item-group >
            <template slot="title">居住地</template>
          </el-menu-item-group>
          <el-menu-item-group >
            <template slot="title">工作地</template>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header"><span>重要场所</span></div>
        <div class="user-bio-section-body">
          <div class="progress-item">
            <span>娱乐场所</span>
            <el-progress :percentage="70" />
          </div>
          <div class="progress-item">
            <span>商场</span>
            <el-progress :percentage="18" />
          </div>
          <div class="progress-item">
            <span>办公写字楼</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>交通枢纽</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>医院</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>学校</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>政府机关</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>住宅小区</span>
            <el-progress :percentage="12" />
          </div>
          <div class="progress-item">
            <span>金融</span>
            <el-progress :percentage="12" />
          </div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          avatar: '',
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
