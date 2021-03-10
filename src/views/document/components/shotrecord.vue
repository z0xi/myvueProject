<template>
  <el-container>
    <el-header>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
      >
      </el-date-picker>
      <el-select v-model="value" style="margin-left:12px" placeholder="选择视频源">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"
                 style="margin-left:12px"
                 @click="handleDownload"
      >
        导出
      </el-button>
    </el-header>
    <el-container>
      <el-aside style="width:350px">
        <el-row>
          <el-col :span="7" v-for="value in manphoto" style="padding:10px">
            <el-card :body-style="{ padding: '0px' }">
              <img style="padding:6px;height:130px;" v-bind:src="value.photosrc" class="image">
              <div style="padding: 2px;">
                <span>{{ value.loc }}</span>
                <div class="time">
                  <time>{{ value.phototime }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>

export default {
  data() {
    return {
      manphoto: [
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'guandong',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'beijing',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'beijing',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'beijing',
          phototime: '2020年1月1日21：00'
        },
        {
          photosrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          loc: 'beijing',
          phototime: '2020年1月1日21：00'
        }],
      downloadLoading: false,
      currentDate: new Date(),
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ''
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

/deep/ .amap-logo{
  display: none;
  opacity:0 !important;
}

.image {
  width: 100%;
  display: block;
  padding:10px;
}
.time {
  font-size: 2px;
  color: #999;
}

.el-header {
  color: #333;
  line-height: 40px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}



</style>
