<template>
  <div class="didcreateCpt">
    <div class="register_button">
      <div v-for="item in register" :key="item.id" class="register_button_div" :class="item.active" @click="registerActive(item.id)">
        {{ item.name }}
      </div>
    </div>
    <div class="register_main">
      <el-form ref="form" :model="form" label-width="130px" class="register_form">
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
    registerActive(e) {
      this.register.map((v, i) => {
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
  }
}
</style>