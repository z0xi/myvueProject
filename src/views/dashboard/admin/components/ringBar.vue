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
    },
    inner:{
    	type: Object,
    },
    outer:{
    	type: Object,
    },
  },
  data() {
    return {
      chart: null,
      innerData:this.inner,
      outData:this.outer,
      myheight:this.height
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
      let _this = this, 
      		total = this.innerData.value + this.outData.value, 
      		innerData = this.innerData.value, 
      		outData = this.outData.value,
      		labelData = [this.outData.name, this.innerData.name];
      this.chart.setOption({
      	yAxis: {
	        type: 'category',
	        data: labelData,
	        splitLine:{show:false},
          axisLine:{show:false},
          axisTick:{show:false},
          splitArea:{show:false},
	        axisLabel:{
	            inside:true,
	            margin:18,
	            textStyle:{
	            	color:'rgb(179, 195, 224)'
	            },
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
	        },
	        z:2
		    },
		    xAxis: {
	        type: 'value',
	        splitLine:{show:false},
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:false},
          splitArea:{show:false},
		    },
		    grid:[
		    	{
		    		left:'50%',
		    		bottom:'65%',
		    		top:'19%'
		    	}
		    ],
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
          boundaryGap:10,
          splitLine:{show:false},
          axisLine:{show:false},
          axisTick:{show:false},
          axisLabel:{show:false},
          splitArea:{show:false},
        },
        polar: {
          radius: [45, 95],
        },
        series: [{
          type: 'bar',
          data: [
            { value: innerData, itemStyle:{color:_this.innerData.color} },
            { value: outData,itemStyle:{color:_this.outData.color} },
          ],
          roundCap: true, // 在环形柱条两侧，使用圆弧效果
          barWidth:15,
          coordinateSystem: 'polar'
        },{
			    type: 'bar',
			    data: []
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
