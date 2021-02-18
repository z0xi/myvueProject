<template>
  <div id="app" :style="style">
    <router-view />
  </div>
</template>

<script>

import picture from '@/assets/bg.png'
export default {
  name: 'App',
  data(){
    return {
     style:{
       backgroundImage:`url(${picture})`,
       backgroundSize: "100% 100%",
       width: '100%',
       height: '100%',
       position: 'absolute',
       //backgroundRepeat:'no-repeat'
     }
    }
  }
}
</script>
