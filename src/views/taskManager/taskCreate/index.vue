<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="案件名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="地点">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间范围">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="选择库">
      <el-select v-model="form.region" placeholder="请选择搜索库">
        <el-option label="库1" value="shanghai"></el-option>
        <el-option label="库2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="排除库">
      <el-select v-model="form.region" placeholder="请选择排除库">
        <el-option label="库1" value="shanghai"></el-option>
        <el-option label="库2" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="案件编号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="备注">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'taskCreate',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message({
        message: '任务创建成功',
        type: 'success',
        duration: 5 * 1000
      })
    }

  }

}
</script>

<style scoped>

</style>
