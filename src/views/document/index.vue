<template>
  <el-container>
    <el-aside style="padding:20px">
        <div style="height:820px"  class="grid-content bg-purple">
          <div class="card-style" style="padding: 20px;">行为信息</div>
          <div class="card-style">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 6px;">
                <span>0</span>
              </div>
              <div style=" padding: 6px;">
                <span>档案总数</span>
              </div>
            </el-card>
          </div>
          <div class="card-style">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 6px;">
                <span>0</span>
              </div>
              <div style="padding: 6px;">
                <span>活档案总数</span>
              </div>
            </el-card>
          </div>
          <div class="card-style">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 6px;">
                <span>0</span>
              </div>
              <div style="padding: 6px;">
                <span>已实名档案数</span>
              </div>
            </el-card>
          </div>
          <div class="card-style">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 6px;">
                <span>0</span>
              </div>
              <div style="padding: 6px;">
                <span>未实名档案数</span>
              </div>
            </el-card>
          </div>
          <div class="card-style">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 6px;">
                <span>0</span>
              </div>
              <div style="padding: 6px;">
                <span>归档图片</span>
              </div>
            </el-card>
          </div>
        </div>
    </el-aside>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-card>
              <div>近七日档案更新趋势</div>
            </el-card>
            <line-chart :chart-data="linechartdata"/>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple" >
            <el-card>
              <div>近七日档案更新占比</div>
            </el-card>
            <div class="pie-class">
            <pie-chart :chart-data="piechartdata2"/>
            <pie-chart :chart-data="piechartdata3"/>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card>
              <div>昨日更新档案统计</div>
            </el-card>
            <pie-chart :chart-data="piechartdata1"/>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
      <el-card>
        <div>昨日重点人员归档数</div>
      </el-card>
            <bar-chart :chart-data="barchartdata" />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card>
              <div>昨日静态标签地域归档数</div>
            </el-card>
            <bar-chart :chart-data="barchartdata1" />
          </div>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<script>
import PieChart from './detail/components/PieChart'
import LineChart from './detail/components/LineChart'
import BarChart from './detail/components/BarChart'

export default {
  name: 'documentindex',
  components: {
    PieChart,
    BarChart,
    LineChart
  },
  data(){
    return {
      linechartdata: {
        actualData: [180, 160, 151, 106, 145, 150, 130]
      },
      barchartdata: {
        actualData: [180, 160],
        actualName:['涉毒人员身份库', '全国在逃身份库']
      },
      barchartdata1: {
        actualData: [110, 10],
        actualName:['图片流', '全结构化相机']
      },
      piechartdata1: {
        actualData: [{ value: 320, name: '更新档案总数' },
          { value: 240, name: '更新已实名档案' },
          { value: 149, name: '更新未实名档案' }],
        actualName:['更新档案总数', '更新已实名档案','更新未实名档案']
      },
      piechartdata2: {
        actualData: [{ value: 320, name: '更新档案' },
          { value: 240, name: '未更新档案' }],
        actualName:['更新档案', '未更新档案']
      },
      piechartdata3: {
        actualData: [{ value: 320, name: '新增抓拍' },
          { value: 240, name: '新增视频流' }],
        actualName:['新增抓拍', '新增视频流']
      }

    }
  }
}
</script>

<style lang="scss" scoped>

.pie-class{
  display: flex;
  justify-content: flex-start;
}
.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background-color: transparent;
  color:white;
}

.grid-content {
  border-radius: 4px;
  height:400px;
  min-height: 36px;
}

.card-style {
  width: 100%;
  margin-bottom: 80px;
  background-color: transparent;
  color:white;
}

.el-card{
  background-color: transparent;
  color:white;
}

</style>
