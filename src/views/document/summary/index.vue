<template>
  <div class="app-container">
    <el-row :gutter="20">
  <el-tabs v-model="activeTab">
    <el-tab-pane label="活跃档案" name="activeDoc">
      <activeDoc />
    </el-tab-pane>
    <el-tab-pane label="已实名档案" name="realnameDoc">
      <realnameDoc />
    </el-tab-pane>
    <el-tab-pane label="未实名档案" name="unrealnameDoc">
      <unrealnameDoc/>
    </el-tab-pane>
  </el-tabs>
    </el-row>
  </div>
</template>

<script>
import activeDoc from './components/activeDoc'
import realnameDoc from './components/realnameDoc'
import unrealnameDoc from './components/unrealnameDoc'

export default {
name: 'Document',
  components:{
    activeDoc,
    realnameDoc,
    unrealnameDoc
},
data(){
return{
activeTab:'activity'
  }
  }
}
</script>

<style scoped>

</style>
