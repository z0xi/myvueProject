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
      innerData:{name:"视频源总数",value:10356,color:"rgb(116,64,237)"},
      outData:{name:"人像总数",value:1233,color:"rgb(44,158,255)"}
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
      let _this = this, total = this.innerData.value + this.outData.value, innerData = this.innerData.value, outData = this.outData.value;
      this.chart.setOption({
        angleAxis: {
          max:total,
          clockwise:false,
          splitLine:{show:false},
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:false},
          splitArea:{show:false},
        },
        radiusAxis: {
          type: 'category',
          data: [_this.outData.name, _this.innerData.name],
          splitLine:{show:false},
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{
            show:true,
            inside:true,
            formatter:function(value, index){
              let ret = '';
              switch (index){
                case 0:
                  ret = _this.innerData.name + '：' + _this.innerData.value;
                  break;
                case 1:
                  ret = _this.outData.name + '：' + _this.outData.value;
                  break;
              }
              return ret;
            },
            textStyle:{
            	color:'rgb(179, 195, 224)'
            },
          },
          splitArea:{show:false},
          z:2
        },
        polar: {
          radius: [45, 95],
          tooltip:{
            show:true,
            formatter: '{b0}: {c0}<br />{b1}: {c1}'
          }
        },
        series: [{
          type: 'bar',
          data: [
            { value: outData, name: _this.outData.name,itemStyle:{color:_this.outData.color} },
            { value: innerData, name: _this.innerData.name,itemStyle:{color:_this.innerData.color} },
          ],
          roundCap: true, // 在环形柱条两侧，使用圆弧效果
          barWidth:15,
          coordinateSystem: 'polar'
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
