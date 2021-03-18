<template>
<!--      标签-->
      <div class="app-container">
        <el-row :gutter="20">
          <el-tabs v-model="activeTab">
            <el-tab-pane label="通用技战法" name="universalTechnique">
              通用技战法
<!--              <span slot="label" name="universalTechnique"><i class="el-icon-date"></i> 通用技战法</span>-->
<!--              通用技战法-->
              <universalTechnique />
            </el-tab-pane>
            <el-tab-pane label="实有人口" name="actualPopulation">
              实有人口
            <actual-population />
            </el-tab-pane>
            <el-tab-pane label="入室盗窃" name="burGlary">
              入室盗窃
              <bur-glary />
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </div>
</template>
<script>
import universalTechnique from '@/views/TechnicalMethods/components/universalTechnique';
import actualPopulation from '@/views/TechnicalMethods/components/actualPopulation';
import burGlary from '@/views/TechnicalMethods/components/burGlary';
export default {
  name: 'TechnicalMethods',
  components:{
    universalTechnique,//通用技战法页面
    actualPopulation,//实有人口
    burGlary,//入室盗窃
  },
  data(){
    return{
      activeTab:'universalTechnique'//默认第一个页面
    }
  }
}
</script>
<style scoped>

/*.app-container {*/
/*  background-color: transparent;*/
/*}*/

</style>
