<template>
  <div class="bgColor">
    <div class="app-container">
      <el-tabs type="card" style="background: transparent">
        <el-tab-pane label="视频DID查询" >
          <el-card shadow=“hover” :body-style="{ padding: '10px'}" class="card">
            <div style="padding: 8px;">
              <p style="color: white">视频DID:</p>
              <el-input v-model="input" placeholder="请输入内容" style="margin: 10px"></el-input>
              <div class="bottom">
                <el-button type="primary" class="button">查看</el-button>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="输入视频Hash值播放">
          <el-card shadow=“hover” :body-style="{ padding: '10px'}" class="card">
            <div style="padding: 8px;">
              <p style="color: white">视频Hash值:</p>
              <el-input v-model="input" placeholder="请输入内容" style="margin: 10px"></el-input>
              <div class="bottom">
                <el-button type="primary" class="button">查看</el-button>
              </div>
            </div>
          </el-card>
        </el-tab-pane>
        <div class="videoPlay_1">
          <el-card shadow=“hover” :body-style="{ padding: '10px'}" class="card">
            <div style="padding: 80px">
              <!--
              <video :src="videoSrc" :poster="videoImg" :autoplay="playStatus" height="421" width="700" :muted="muteStatus">
                your browser does not support the video tag
              </video>
              <button @click="playClick" :class="{hide: isPlay}">点击播放</button> -->
              <!--class="video-js vjs-default-skin vjs-big-play-centered" -->
              <video    :preload="preload"
                        :poster="videoImg" :height="height" :width="width" align="center" :controls="controls"  :autoplay="autoplay"
              class="videoPlay_2">
                <source :src="videoSrc" type="video/mp4">
              </video>
            </div>
          </el-card>
        </div>
      </el-tabs>
    </div>
  </div>

</template>

<script>

export default {
  name: 'VideoPlay',
  data() {
    return {
      input: '',
      videoSrc: '../../../../static/video1.mp4',
      videoImg: '../../../../static/full_res.jpg',
      playStatus: '',
      muteStatus: '',
      isMute: true,
      isPlay: false,
      width: '820', // 设置视频播放器的显示宽度（以像素为单位）
      height: '500', // 设置视频播放器的显示高度（以像素为单位）
      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
      autoplay: ''
    }
  }
}
</script>

<style scoped>
/*.card{*/
/*  background-color: transparent;*/
/*  color:white;*/
/*}*/
.bgColor{
  color: white;
}
.videoPlay_1{
  background-color: transparent;
}
.videoPlay_2{
  border: 1px solid #eeee;
}
.bottom{
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
  width: 20px;
}
.card{
  align-content: center;
  background-color: transparent;
}
</style>
