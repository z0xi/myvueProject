<template>
  <div v-if="flag">
    <el-col :span="7" v-for="value in manphoto" style="padding:10px" >
      <el-card :body-style="{ padding: '0px' }" >
        <div @click="peerdetail()">
        <img style="padding:6px;height:130px;" v-bind:src="value.photosrc" class="image">
        <div style="padding: 2px;">
          <span>{{ value.loc }}</span>
          <div class="time">
            <time>{{ value.phototime }}</time>
          </div>
        </div>
        </div>
      </el-card>
    </el-col>
  </div>
  <div v-else>
    <el-container>
      <el-header>
      <el-button-group>
        <el-button type="text" icon="el-icon-arrow-left" @click="back()">返回</el-button>
      </el-button-group>
      </el-header>
      <el-container>
      <el-aside style="width:300px">
        <div class="user-profile">
          <el-row>
            <el-col :span="8" style="text-align: left">
              <div class="box-center">
                <pan-thumb :image="avatar" :height="'100px'" :width="'100px'" :hoverable="false">
                </pan-thumb>
              </div>
            </el-col>
            <el-col :span="8" style="text-align: left">
              <div class="box-center">
                <div class="user-name">{{ name }}</div>
                <div class="user-name">we-did-12345678</div>
              </div>
            </el-col>
          </el-row>
          <el-table
            :data="peerlocation"
            style="width: 100%"
            >
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="位置">
            </el-table-column>
          </el-table>
        </div>
      </el-aside>
      <el-main>
        <el-amap class="amap-box" :vid="'amap1-vue'"></el-amap>
      </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import PanThumb from '@/components/PanThumb'
export default {
  components: { PanThumb },
  data() {
    return {
      flag:true,
      manphoto: [
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'did-123',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'did-123',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'did-123',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'did-123',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'did-123',
          phototime: '2020年1月1日21：00'
        }],
      name: '',
      avatar:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
      peerlocation:'',
    }
  },
  methods:{
    peerdetail(){
      this.flag = false;
    },
    back(){
      this.flag = true;
    }
  }
}
</script>
<style scoped>
.amap-box {
  height: 500px;
}
/*高德去logo和水印*/
/deep/ .amap-copyright{
  opacity:0;
}
.el-card{
  background-color: transparent;
  color: white;
}

/deep/ .amap-logo{
  display: none;
  opacity:0 !important;
}

/deep/ .el-table, /deep/ .el-table__expanded-cell {
  background-color: transparent;
  color: white;
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
  color: white;
}

/*table item鼠标悬停颜色*/
/deep/ .el-table tbody tr:hover > td {
  background-color: #C0C4CC;
}
</style>
