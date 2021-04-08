<template>
  <div class="dashboard_index">
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="height: 431px;margin-top:15px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div class="chart-title">任务数</div>
          <devicePie />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div class="chart-title">资源情况</div>
          <taskBar />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <div class="chart-title">抓拍及档案</div>
          <taskBar />
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
import taskBar from './components/taskBar'
export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    devicePie,
    taskBar
  },
  data() {
    return {
      lineChartData: lineChartData.messages
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
      padding: 8px 8px 0;
      margin-bottom: 8px;
      border-radius: 6px;
      background: url(../../../assets/icon/chart_bg1.png) no-repeat center center;
      background-color: rgba(14, 34, 69, 0.8);
      position: relative;
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
}
</style>
