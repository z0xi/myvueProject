<template>
  <el-row :gutter="40" class="panel-group">
    <el-col v-for="item in panelGroupData" :key="item.handleSetLine" :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel" :class="item.cardPanel" @click="handleSetLineChartData(item)">
        <div class="card-panel-left">
          <img :src="item.cardPanelImg">
        </div>
        <div class="card-panel-right">
          <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            {{ item.title }}
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      panelGroupData: [
        {
          title: '视频数',
          cardPanelImg: require('../../../../assets/icon/Panel_vidio.png'),
          handleSetLine: 'messages',
          cardPanel: 'card_panel_bj_on'
        },
        {
          title: '设备数',
          cardPanelImg: require('../../../../assets/icon/Panel_camera.png'),
          handleSetLine: 'purchases',
          cardPanel: 'card_panel_bj'
        },
        {
          title: '查出嫌疑人数',
          cardPanelImg: require('../../../../assets/icon/Panel_suspect.png'),
          handleSetLine: 'shoppings',
          cardPanel: 'card_panel_bj'
        }
      ]
    }
  },
  methods: {
    handleSetLineChartData(e) {
      this.$emit('handleSetLineChartData', e.handleSetLine)
      this.panelGroupData.map((v, i) => {
        v.cardPanel = 'card_panel_bj'
      })
      e.cardPanel = 'card_panel_bj_on'
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  margin-top: 30px;
  .card-panel{
    width: 292px;
    height: 84px;
    margin: auto;
    display: flex;
    .card-panel-left, .card-panel-right{
      flex: 1;
      position: relative;
      img{
        width: 56px;
        height: 50px;
        position: absolute;
        right: 25px;
        top: 50%;
        margin-top: -25px;
      }
      .card-panel-text{
        height: 50%;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #8098BE;
      }
      .card-panel-num{
        font-size: 32px;
        font-family: Arial;
        font-weight: bold;
        color: #C8D9F6;
        display: block;
        margin-top: 7px;
      }
    }
  }
  .card_panel_bj{
    background: url(../../../../assets/icon/Focus_box.png) 100% 100% no-repeat;
  }
  .card_panel_bj_on{
    background: url(../../../../assets/icon/Focus_box_on.png) 100% 100% no-repeat;
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
