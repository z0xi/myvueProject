<template>
  <div class="didcreateCpt">
    cpt1
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
      &::after{
        content:'';
        clear: both;
        display: block;
      }
    }
  }
}
</style>