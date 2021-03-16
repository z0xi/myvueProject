<template>

  <el-card style="margin-bottom:20px;">
    <div slot="header">
      <span>档案详情</span>
    </div>

    <div class="user-profile" >
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
      <div v-for="value in actionInfo">
      <div>
        <el-card :body-style="{ padding: '0px' }">
          <div style="padding: 6px;">
            <span>0</span>
          </div>
          <div calss="block" style="padding: 6px;">
            <span>{{value}}</span>
          </div>
        </el-card>
      </div>
      </div>
    </el-container>
    <div class="card-style" style="padding: 20px;">重要场所</div>
    <el-row>
      <el-col :span="7" v-for="value in locInfo" class="loc-style">
        <el-card :body-style="{ padding: '0px' }" >
            <div style="padding: 6px;">
              <span>0</span>
            </div>
            <div style="padding: 6px;">
              <span>{{ value }}</span>
            </div>
        </el-card>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import PanThumb from '@/components/PanThumb'

export default {
  components: { PanThumb },
  data(){
    return{
      actionInfo:['活跃地点','昼伏夜出','居住地','工作地'],
      locInfo:['娱乐场所','商场','办公地','交通枢纽','医院','学习','政府机关','住宅小区','金融','行迹异常'],
    }
  },
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
  width: 100%;
  height: auto;	/* 不要使用定高度，后果自负 */
  border: 1px solid #000000;
  display: flex;
  flex-wrap: wrap;
}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  //color: #777;

}

.user-profile {
  .user-name {
    font-size: 14px;
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }
}
.el-card{
  background-color: transparent;
  color:white;
}

</style>
