<template>
  <!--      标签-->
  <div class="app-container">
    <el-row :gutter="20">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="频繁过人" name="pinfanGuoren">
          频繁过人
          <!--              <span slot="label" name="universalTechnique"><i class="el-icon-date"></i> 通用技战法</span>-->
          <!--              通用技战法-->
          <pinfan-guoren />
        </el-tab-pane>
        <el-tab-pane label="时空档案过滤" name="shikongdanganGuolv">
          时空档案过滤
          <shikongdangan-guolv />
        </el-tab-pane>
        <el-tab-pane label="昼伏夜出" name="zhoufuYechu">
          昼伏夜出
          <zhoufu-yechu />
        </el-tab-pane>
        <el-tab-pane label="时空碰撞" name="shikongPengzhuang">
          时空碰撞
          <shikong-pengzhuang />
        </el-tab-pane>
        <el-tab-pane label="首次出现" name="shouciChuxian">
          首次出现
          <shouci-chuxian />
        </el-tab-pane>
        <el-tab-pane label="连续出现" name="lianxuChuxian">
          连续出现
          <lianxu-chuxian />
        </el-tab-pane>
        <el-tab-pane label="感知离开" name="ganzhiLikai">
          感知离开
          <ganzhi-likai />
        </el-tab-pane>
        <el-tab-pane label="精准同行分析" name="jingzhuntongxingFenxi">
          精准同行分析
          <jingzhuntongxing-fenxi />
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import PinfanGuoren from '@/views/TechnicalMethods/universalTechnique_detail/components/pinfanGuoren';
import ShikongdanganGuolv from '@/views/TechnicalMethods/universalTechnique_detail/components/shikongdanganGuolv';
import ZhoufuYechu from '@/views/TechnicalMethods/universalTechnique_detail/components/zhoufuYechu';
import ShikongPengzhuang from '@/views/TechnicalMethods/universalTechnique_detail/components/shikongPengzhuang';
import ShouciChuxian from '@/views/TechnicalMethods/universalTechnique_detail/components/shouciChuxian';
import LianxuChuxian from '@/views/TechnicalMethods/universalTechnique_detail/components/lianxuChuxian';
import GanzhiLikai from '@/views/TechnicalMethods/universalTechnique_detail/components/ganzhiLikai';
import JingzhuntongxingFenxi from '@/views/TechnicalMethods/universalTechnique_detail/components/jingzhuntongxingFenxi';
export default {
  name: 'universalTechnique_index',
  components:{
    JingzhuntongxingFenxi,//精准同行分析
    GanzhiLikai,//感知离开
    LianxuChuxian,//连续出现
    ShouciChuxian,//首次出现
    ShikongPengzhuang,//时空碰撞
    ZhoufuYechu,//昼伏夜出
    ShikongdanganGuolv,//时空档案过滤
    PinfanGuoren,//频繁过人
  },
  data(){
    return{
      activeTab:'pinfanGuoren'//默认第一个页面
    }
  }
}
</script>
<style scoped>

</style>
