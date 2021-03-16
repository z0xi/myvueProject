<template>
  <div class="app-container">
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="1"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="big" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">批量上传摄像头信息</div>
    </el-upload>
    <el-form  ref="form" :model="form" label-width="160px">
      <el-form-item label="摄像头设备名称:">
        <el-input v-model="form.deviceName" />
      </el-form-item>
      <el-form-item label="摄像头设备信息:">
        <el-input v-model="form.deviceInfo" />
      </el-form-item>
      <el-form-item label="摄像头类别:">
        <el-input v-model="form.deviceCategory" />
      </el-form-item>
      <el-form-item label="摄像头区域:">
        <el-input v-model="form.deviceDistrict" />
      </el-form-item>
      <el-form-item label="摄像头位置:">
        <el-input v-model="form.devicePosition" />
      </el-form-item>
      <el-form-item label="所属单位:">
        <el-input v-model="form.deviceOrganization" />
      </el-form-item>
      <el-form-item>
        <el-tooltip class="item" effect="dark" content="点击为摄像头创建DID’" placement="right-end">
          <el-button type="primary" @click="onSubmit">创建</el-button>
        </el-tooltip>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
  name: 'didcreate',

  data() {
    return {
      form: {
        deviceCategory:'A类',
        location:'广东省广州市XXX',
        deviceDistrict:"广东省广州市番禺区XX路",
        devicePosition:'XX路XX号房',
        deviceOrganization:'居委会',
        deviceName:'小米XX型号',
        deviceInfo:'小米摄像头'
      },
      fileList: [{name: '', url: ''}]
    }
  },
  methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`只能上传一个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>

</style>
