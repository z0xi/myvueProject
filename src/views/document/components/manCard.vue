<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>档案详情</span>
    </div>

    <div class="user-profile">
      <el-row :gutter="12">
        <el-col :span="12" style="text-align: left">
          <div class="box-center">
            <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
            </pan-thumb>
          </div>
        </el-col>
        <el-col :span="8" style="text-align: left">
          <div class="box-center">
            <div class="user-name">{{ user.name }}</div>
            <div class="user-name">wedi-12345678</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="card-style" style="padding: 20px;">行为信息</div>
    <el-container>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>活跃地点</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>昼伏夜出</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>居住地</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>工作地</span>
          </div>
        </el-card>
      </div>
    </el-container>
    <div class="card-style" style="padding: 20px;">重要场所</div>
    <el-container>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>娱乐场所</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>商场</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>办公楼</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>交通枢纽</span>
          </div>
        </el-card>
      </div>
    </el-container>
    <el-container>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>医院</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>学校</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>政府机关</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>住宅小区</span>
          </div>
        </el-card>
      </div>
    </el-container>
    <el-container>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>金融</span>
          </div>
        </el-card>
      </div>
      <div class="card-style">
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div style="padding: 6px;">
            <span>行迹异常</span>
          </div>
        </el-card>
      </div>
    </el-container>

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
          avatar: ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-style {
  width: 200px;
  padding: 5px;
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-size: 14px;
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
