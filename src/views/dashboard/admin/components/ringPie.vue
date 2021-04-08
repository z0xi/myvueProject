<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      innerData:{name:"视频源总数",value:10356},
      outData:{name:"人像总数",value:1233}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      let total = this.innerData.value + this.outData.value, innerData = this.innerData.value, outData = this.outData.value;
      this.chart.setOption({
        series: [
          {
            type: 'pie',
            radius: [45, 65],
            center: ['50%', '50%'],
            labelLine:{show:false},
            label: {
	            formatter: '{b} : {c}',
	            textStyle:{
	            	color:'rgb(179, 195, 224)'
	            }
            },
            labelLayout:{
            	x:0,
            	y:'70%',
            	moveOverlap:'shiftY'
            },
            data: [
              { value: (total - innerData), name: '进行中',itemStyle:{color:"rgba(14, 34, 69, 0)"},label:{show:false} },
              { value: innerData, name: '已完成',itemStyle:{color:"rgb(116,64,237)"} },
            ],
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          },
          {
            type: 'pie',
            radius: [75, 95],
            center: ['50%', '50%'],
            labelLine:{show:false},
            label: {
              formatter: '{b} : {c}',
              textStyle:{
              	color:'rgb(179, 195, 224)'
              },
              position:['0','0']
            },
            data: [
              { value: (total - outData), name: '已完成',itemStyle:{color:"rgba(14, 34, 69, 0)"},label:{show:false} },
              { value: outData, name: '进行中',itemStyle:{color:"rgb(44, 158, 255)"} },
            ],
            roundCap: true, // 在环形柱条两侧，使用圆弧效果
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
