<template v-if="havedauth=='no'">
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="名字">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="所属单位">
        <el-input v-model="form.region" />
      </el-form-item>
      <el-form-item label="警员编号">
        <el-input v-model="form.num" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建DID</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>
<!--v-if未调试好-->
<!--<template v-if="havedauth=='yes'">-->
<!--  <div class="app-container">-->
<!--    <div class="tittletext">你的DID为：</div>-->
<!--    <el-input v-model="did" />-->
<!--  </div>-->
<!--</template>-->
<script>
export default {
  name:'personauth',
  data() {
    return {
      did:'',
      havedauth:'no',
      form: {
        name: '',
        region: '',
        num:''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('submit!')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
.tittletext {
  font-size: 26px;
  color: white;
}
</style>

