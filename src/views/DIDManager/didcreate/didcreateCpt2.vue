<template>
  <div class="didcreateCpt">
    <div class="register_button">
      <div v-for="item in register" :key="item.id" class="register_button_div" :class="item.active" @click="registerActive(item.id)">
        {{ item.name }}
      </div>
    </div>
    <div class="register_main">
      <div class="register_upload" v-if="registerMain">
        <!-- <div class="div_upload"> :show-file-list="false"-->
          <el-upload
            class="div_upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="uploadSuccess"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            >
            <div class="el-upload__text">点击上传</div>
            <div slot="tip" class="el-upload__tip">批量上传摄像头信息</div>
          </el-upload>
        <!-- </div> -->
        <div class="div_upload_main"></div>
        <div class="uploadSubmit">
          <el-tooltip class="item" effect="dark" content="点击为摄像头创建DID’" placement="right-end">
            <el-button class="establish_button">创建</el-button>
          </el-tooltip>
        </div>
      </div>
      <el-form ref="form" :model="form" v-else label-width="130px" class="register_form">
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
        <div class="submit">
          <el-tooltip class="item" effect="dark" content="点击为摄像头创建DID’" placement="right-end">
            <el-button class="establish_button">创建</el-button>
          </el-tooltip>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      registerMain: true,
      fileList: [],
      register: [
        {
          id: 1,
          active: 'active',
          name: '批量注册'
        },
        {
          id: 2,
          active: '',
          name: '单个注册'
        }
      ],
      form: {
        deviceCategory: 'A类',
        location: '广东省广州市XXX',
        deviceDistrict: '广东省广州市番禺区XX路',
        devicePosition: 'XX路XX号房',
        deviceOrganization: '居委会',
        deviceName: '小米XX型号',
        deviceInfo: '小米摄像头'
      }
    }
  },
  methods: {
    uploadSuccess(response, file, fileList){
      console.log('rr:',response,'tt:', file, 'yy:',fileList);
      this.fileList = fileList;
    },
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
    },
    registerActive(e) {
      this.register.map((v, i) => {
        if (v.id === e) {
          v.active = 'active'
        } else {
          v.active = ''
        }
      })
      if(e === 1){
        this.registerMain = true
      } else {
        this.registerMain = false
      }
    }
  }
}
</script>
<style scoped>
.didcreateCpt /deep/ .el-form-item__label {
  color: #8098BE;
}
.didcreateCpt /deep/ .el-input__inner {
  height: 36px !important;
  color: #C8D9F6;
  border: 1px solid #17325F !important;
  border-radius: 4px !important;
  background: #0B1A37 !important;
}
.didcreateCpt /deep/ .establish_button{
  width: 90px;
  padding: 10px 14px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #C8D9F6;
  border: none;
  background: #0F7DDA;
}
.didcreateCpt /deep/ .el-upload-list {
  position: absolute;
  left: 285px;
  top: 0px;
}
.didcreateCpt /deep/ .el-upload-list .el-upload-list__item-name {
  color: #8098BE;
  font-size: 16px;
}
.didcreateCpt /deep/ .el-upload-list .el-upload-list__item:hover {
  background: none;
}
.didcreateCpt /deep/ .el-upload-list .el-upload-list__item.is-success .el-upload-list__item-name:hover {
  color: #C8D9F6;
}
.didcreateCpt /deep/ .el-upload-list .el-upload-list__item-name [class^=el-icon] {
  color: #8098BE;
}
.didcreateCpt /deep/ .el-upload-list .el-upload-list__item .el-icon-close {
  color: #C8D9F6;
}
.didcreateCpt /deep/ .el-upload-list .el-upload-list__item .el-icon-close:hover {
  color: #C8D9F6;
}
</style>
<style lang="scss" scoped>
.didcreateCpt{
  height: 550px;
  background: rgba(14, 34, 69, 0.7);
  border: 1px solid #152E58;
  .register_button{
      width: 260px;
      height: 36px;
      padding: 0 2px;
      border: 1px solid #2A4B87;
      border-radius: 18px;
      margin: 30px auto;
      display: flex;
      align-items: center;
      background: #0B1A37;
      .register_button_div{
          width: 128px;
          height: 30px;
          text-align: center;
          line-height: 30px;
          color: #8098BE;
          font-size: 18px;
          cursor: pointer;
      }
      .active{
        color: #2B9EFF;
        border-radius: 14px;
        background: #1B3565;
      }
  }
  .register_main{
    height: calc(100% - 96px);
    .register_form{
      width: 930px;
      margin: auto;
      .submit{
        text-align: center;
      }
    }
    .register_upload{
      width: 900px;
      margin: auto;
      .div_upload{
        width: 260px;
        height: 300px;
        border: 1px dashed #2A4B87;
        border-radius: 4px;
        float: left;
        position: relative;
        text-align: center;
        background: rgba(42, 71, 124, 0.3) url(../../../assets/icon/upload_icon.png) center 65px no-repeat;
        .el-upload__text{
          color: #2B9EFF;
          position: absolute;
          top: 208px;
          font-size: 16px;
          margin-left: -32px;
        }
        .el-upload__tip{
          color: #526C98;
          position: relative;
          top: 208px;
          font-size: 16px;
        }
      }
      .div_upload_main{
        width: 630px;
        height: 300px;
        background: #0B1A37;
        border: 1px solid #17325F;
        border-radius: 4px;
        float: right;
      }
      .uploadSubmit{
        clear: both;
        text-align: center;
        padding-top: 72px;
      }
      // &::after{
      //   content:'';
      //   clear: both;
      //   display: block;
      // }
    }
  }
}
</style>