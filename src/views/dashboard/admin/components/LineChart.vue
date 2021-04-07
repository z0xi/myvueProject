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
            show: false
          }
        },
        legend: {
          right: '15',
          top: '5',
          data: ['在线', '离线'],
          textStyle: {
            fontSize: 12,
            color: '#8098BE'
          }
        },
        grid: {
          left: 10,
          right: 15,
          bottom: 10,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
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
          }
        },
        series: [{
          name: '在线',
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(43, 18, 255, .1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(43, 158, 255, 0)' // 100% 处的颜色
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
                offset: 0, color: 'rgba(194, 106, 72, .1)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(194, 106, 72, 0)' // 100% 处的颜色
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
.LineChart {
  margin-top: 10px;
  background: rgba(14, 34, 69, 0.8);
  border-radius: 6px;
  padding: 25px;
}
</style>

