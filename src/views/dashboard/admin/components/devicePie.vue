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
      chart: null
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

      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          right: '2',
          top: '2',
          itemHeight:'4',
          borderRadius:4,
          data: ['已完成', '进行中'],
          textStyle:{
          	color:'rgb(128,152,190)'
          }
        },
        series: [
          {
            name: '任务数',
            type: 'pie',
            radius: [65, 95],
            center: ['50%', '50%'],
            itemStyle: {
	            borderColor: 'rgba(14, 34, 69, 0.8)',
	            borderWidth: 2
            },
            label: {
	            formatter: '{b} : {c}',
	            textStyle:{
	            	color:'rgb(179, 195, 224)'
	            }
            },
            data: [
              { value: 4, name: '已完成',itemStyle:{color:"rgb(50, 171, 118)"} },
              { value: 1, name: '进行中',itemStyle:{color:"rgb(44, 158, 255)"} },
            ],
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
