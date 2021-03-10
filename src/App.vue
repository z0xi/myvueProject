<template>
  <div id="app" class="img">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style scoped>
.img {
  width: 100%;
  height: 100%;
  background-image: url("../src/assets/bg.png");
  background-size: cover; /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
  position:absolute; /* 不可缺少 */
}
</style>
