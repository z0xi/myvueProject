<template>
  <div class="DID_didcreate">
    <div class="didlist_title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>DID身份管理</el-breadcrumb-item>
        <el-breadcrumb-item><span style="color:#8198BE;">摄像头DID注册</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="cpt">
      <div class="cpt_title">
        <div v-for="item in cptTitleData" :key="item.id" :style="item.style" :class="item.active" class="cpt_title_div" @click="tabClick(item.id)">{{ item.name }}</div>
      </div>
      <div class="cpt_main">
        <!-- <didcreateCpt /> -->
        <component v-bind:is="didcreateCpts"></component>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import didcreateCpt1 from './didcreate/didcreateCpt1'
import didcreateCpt2 from './didcreate/didcreateCpt2'
import didcreateCpt3 from './didcreate/didcreateCpt3'
export default {
  components: {
    didcreateCpt1,
    didcreateCpt2,
    didcreateCpt3
  },
  data() {
    return {
      didcreateCpts: 'didcreateCpt2',
      cptTitleData: [
        {
          id: 1,
          name: 'CPT模板1',
          style: { position: 'relative', left: '0px' },
          active: ''
        },
        {
          id: 2,
          name: 'CPT模板2',
          style: { position: 'relative', left: '-10px' },
          active: 'active'
        },
        {
          id: 3,
          name: 'CPT模板3',
          style: { position: 'relative', left: '-20px' },
          active: ''
        }
      ]
    }
  },
  methods: {
    tabClick(e) {
      if(e === 1){
        this.didcreateCpts = 'didcreateCpt1'
      } else if(e === 2){
        this.didcreateCpts = 'didcreateCpt2'
      } else {
        this.didcreateCpts = 'didcreateCpt3'
      }
      this.cptTitleData.map((v, i) => {
        if (v.id === e) {
          v.active = 'active'
        } else {
          v.active = ''
        }
      })
    }
  }
}
</script>

<style lang="scss"  scoped>
.DID_didcreate{
  height: 100%;
  padding:15px 20px;
  .tab_pane_div{
    height: 100%;
  }
  .cpt{
    height: calc(100% - 35px);
    margin-top: 15px;
    .cpt_title{
      height: 40px;
      display: flex;
      .cpt_title_div{
        width: 167px;
        height: 40px;
        color: #8098BE;
        font-size: 18px;
        line-height: 40px;
        padding-left: 15px;
        border-radius: 6px 0px 0px 0px;
        cursor:pointer;
        background: url(../../assets/icon/tab_bj.png) 100% 100% no-repeat;
        // border: 1px solid #152E58;
      }
      .active{
        color: #C8D9F6;
        font-weight: bold;
        z-index: 2;
        background: url(../../assets/icon/tab_active.png) 100% 100% no-repeat;
      }
    }
    .cpt_main{
      height: calc(100% - 40px);
      margin-top: -1px;
    }
  }
}
</style>