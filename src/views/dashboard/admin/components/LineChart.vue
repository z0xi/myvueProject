<template>
  <div :class="className" class="LineChart" :style="{height:height,width:width}" />
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
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
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
      this.setOptions(this.chartData)
    },
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          boundaryGap: false,
          axisTick: {
            show: true,
            lineStyle:{
              color:'rgb(81,108,153)'
            }
          },
          splitLine: {show: false},
          axisLabel:{
            color:'rgb(128,152,190)'
          },
          axisLine: {
            lineStyle: {
              color:'rgb(32,51,84)' , //左边线的颜色
            }
          },
        },
        legend: {
          right: '15',
          top: '5',
          data: ['在线', '离线'],
          textStyle: {
            fontSize: 12,
            color: 'rgb(128,152,190)'
          },
          itemHeight:8, //圆点大小
          itemWidth:20, // 线的长度
        },
        grid: {
          left: 10,
          right: 30,
          bottom: 10,
          top: 40,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10],
          backgroundColor:'rgba(0,0,0,0.7)'
        },
        yAxis: {
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#203255'],
              width: 1,
              type: 'solid'
            }
          },
          splitArea: {
            show: false
          },
          axisLabel:{
            color:'rgb(128,152,190)'
          },
          axisLine: {
            show:false
          },
        },
        series: [{
          name: '在线',
          symbol:'circle',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(61,149,255, .1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(61,149,255, 0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            normal: {
              color: '#2B9EFF',
              lineStyle: {
                color: '#2B9EFF',
                width: 3
              }
            }
          },
          smooth: 'none',
          type: 'line',
          data: expectedData,
          animationDuration: 2800,
          animationEasing: 'cubicInOut'
        },
        {
          name: '离线',
          symbol:'circle',
          smooth: 'none',
          type: 'line',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(226,119,67, .1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(226,119,67, 0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          itemStyle: {
            normal: {
              color: '#C26A48',
              lineStyle: {
                color: '#C26A48',
                width: 3
              }
            }
          },
          data: actualData,
          animationDuration: 2800,
          animationEasing: 'quadraticOut'
        }]
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
