<template>
  <div class="dashboard_index">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row class="chart-wrapper" style="height: 431px;margin-top:15px;">
      <div class="chart-title">视频数详情</div>
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper chart-wrapper-hasbg1">
        	<div class="chart-title">任务数</div>
          <devicePie />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper chart-wrapper-hasbg2">
        	<div class="chart-title">资源情况</div>
          <ringBar :inner="resourceStatus.inner" :outer="resourceStatus.outer"/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper chart-wrapper-hasbg3">
        	<div class="chart-title">抓拍及档案</div>
          <ringBar :inner="snapshotArchives.inner" :outer="snapshotArchives.outer"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const lineChartData = {
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import devicePie from './components/devicePie'
import ringBar from './components/ringBar'
export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    devicePie,
    ringBar
  },
  data() {
    return {
      lineChartData: lineChartData.messages,
      //资源情况
      resourceStatus:{
      	inner:{name:"视频源总数",value:123,color:"rgb(44, 158, 255)"},
      	outer:{name:"人像总数",value:122,color:"rgb(116, 64, 237)"}
      },
      //抓拍及档案
      snapshotArchives:{
      	inner:{name:"活跃档案数",value:1233,color:"rgb(44, 158, 255)"},
      	outer:{name:"抓拍总数",value:10325,color:"rgb(194, 105, 71)"}
      },
    }
  },
  methods: {
    handleSetLineChartData(type) {
      console.log('dd:', type)
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard_index{
    height: 100%;
    padding: 20px;
    .chart-wrapper {
      padding: 8px 8px;
      margin-bottom: 10px;
      border-radius: 6px;
      background-color: rgba(14, 34, 69, 0.8);
      position: relative;
      &::after{
        content: "";
        display: inline-block;
        width: 70px;
        height: 70px;
        position: absolute;
        top: calc(50% - 35px);
        left: calc(50% - 35px);
        border-radius: 100% 100%;
        z-index: 1;
      }
      .chart-title{
        color: rgb(128,152,190);
        background: url(../../../assets/icon/title_icon.png) no-repeat left center;
        background-size: 29px 16px;
        padding-left: 34px;
        font-weight: 700;
        position: absolute;
        top: 10px;
        left: 10px;
      }
    }
    .chart-wrapper-hasbg1{
      &::after{
        background: url(../../../assets/icon/chart_bg1.png) no-repeat center center;
        background-color: rgb(35,63,111);
        background-size: 35px 35px;
      }
    }
    .chart-wrapper-hasbg2{
      &::after{
        background: url(../../../assets/icon/chart_bg2.png) no-repeat center center;
        background-color: rgb(35,63,111);
        background-size: 35px 35px;
      }
    }
    .chart-wrapper-hasbg3{
      &::after{
        background: url(../../../assets/icon/chart_bg3.png) no-repeat center center;
        background-color: rgb(35,63,111);
        background-size: 35px 35px;
      }
    }
}
</style>
