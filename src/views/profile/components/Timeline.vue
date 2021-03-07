<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '2021/3/5',
          title: '视频一分析',
          content: '提交分析 2021/3/4 20:46   分析完成 2021/3/5 18:00'
        },
        {
          timestamp: '2021/2/21',
          title: 'Update Github template',
          content: 'PanJiaChen committed 2019/4/21 20:46'
        },
        {
          timestamp: '2021/2/12',
          title: 'Build Template',
          content: 'PanJiaChen committed 2019/4/22 20:46'
        },
        {
          timestamp: '2021/1/23',
          title: 'Release New Version',
          content: 'PanJiaChen committed 2019/4/23 20:46'
        }
      ]
    }
  }
}
</script>
