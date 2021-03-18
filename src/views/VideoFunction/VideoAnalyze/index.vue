<template>
  <div class="bgColor">
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick" >
    <el-tab-pane label="上传视频文件" name="first">
      上传视频文件
      <el-container>
        <el-header>
          <el-tag>第一步：上传视频文件</el-tag>
        </el-header>
        <el-main>
          <!--            <input type="file" name="file" class="fileBtn"></input>-->
          <el-button type="submit" name="submit" value="上传视频" class="submitBtn" @click="submitVideo">上传视频<i class="el-icon-upload el-icon--right"></i></el-button>
          <!--            <input type="submit" name="submit" value="上传视频" class="submitBtn" @click="submitVideo"></input>-->
          <input type="file" name="file" id="fileBtn" @change="handleFileChange(this)"></input>
        </el-main>
      </el-container>
    </el-tab-pane>
    <el-tab-pane label="勾选分析选项" name="second">
      勾选分析选项
      <el-container>
        <el-header>
          <el-tag>第二步：勾选分析选项</el-tag>
        </el-header>
                  <el-header>第二步：勾选分析选项</el-header>
        <el-main>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="单位名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>

            <!--            身份证号-->
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" align="left">
              <el-form-item
                label="身份证号"
                prop="idNumber"
                :rules="[
                  { required: true, message: '身份证号不能为空'},
                  { type: 'number', message: '身份证号必须为数字值'}
                ]"
              >
                <el-input type="idNumber" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm" align="left">
              <el-form-item
                label="年龄"
                prop="age"
                :rules="[
                  { required: true, message: '年龄不能为空'},
                  { type: 'number', message: '年龄必须为数字值'}
                ]"
              >
                <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <el-form-item label="活动区域" align="left">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始时间">
              <el-col :span="5">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="5">
                <el-time-picker placeholder="选择时间" v-model="form.date1" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="截至时间">
              <el-col :span="5">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="5">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="性别" align="left">
              <el-radio-group v-model="form.resource">
                <el-radio label="男性"></el-radio>
                <el-radio label="女性"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="外貌特征" align="left">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="衣服颜色" name="type"></el-checkbox>
                <el-checkbox label="饰品" name="type"></el-checkbox>
                <el-checkbox label="身高" name="type"></el-checkbox>
                <el-checkbox label="发型" name="type">
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <!--              <el-form-item label="活动形式">-->
            <!--                <el-input type="textarea" v-model="form.desc"></el-input>-->
            <!--              </el-form-item>-->
            <!--              <el-form-item align="left">-->
            <!--                <el-button type="primary" @click="onSubmit">查询</el-button>-->
            <!--                <el-button>重置</el-button>-->
            <!--              </el-form-item>-->

            <el-form-item align="left">
              <el-button type="primary" @click="submitForm('form')">提交</el-button>

              <el-button @click="resetForm('form')">重置</el-button>

<!--              显示隐藏表格-->
              <el-button type="primary">查询</el-button>
            </el-form-item>

          </el-form>
          <el-container>
            <el-header>查询结果如下...</el-header>
          </el-container>

          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>

        </el-main>
      </el-container>
    </el-tab-pane>
    <el-tab-pane label="分析进度" name="third">
      分析进度
      <el-container>
        <el-header>
          <el-tag>第三步：分析进度</el-tag>
        </el-header>
        <!--          <el-header>第三步：分析进度</el-header>-->
        <el-main>
          <!--            <el-button type="success" icon="el-icon-check" circle></el-button>-->
          <el-button type="primary">开始分析</el-button>

          <el-steps :active="1" align-center>
            <el-step title="步骤1" description="分析1"></el-step>
            <el-step title="步骤2" description="分析2"></el-step>
            <el-step title="步骤3" description="分析3"></el-step>
            <el-step title="步骤4" description="分析4"></el-step>
          </el-steps>

          <h3>视频分析即将完成......</h3>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        </el-main>
      </el-container>

    </el-tab-pane>
    <el-tab-pane label="分析报告生成" name="fourth">
      分析报告生成
      <el-container>
        <el-header>
          <el-tag>第四步：分析报告</el-tag>
        </el-header>
        <!--          <el-header>第四步：分析报告</el-header>-->
        <el-main>

          <el-link>查看分析报告</el-link>
        </el-main>
      </el-container>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      // 标签页
      activeName: 'first',
      // 身份证号
      numberValidateForm: {
        age: '',
        idNumber: '',
      },

      // 表格表单
      form: {
        name: '',
        idNumber: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // 表格
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
  }
  },
  // 表格表单
  methods: {
    // 点击按钮显示查询结果
    addBut() {
      document.getElementById("tableDivOne").style.display="block";
    },
//标签页
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 身份证号
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 勾选分析选项
    onSubmit() {
      console.log('submit!');
    },
//上传视频/图片
    submitVideo() {
      var formData = new FormData();
      //append方法的第一个参数必须和后端接收的字段完全一致！！
      formData.append('files', document.querySelector('input[type=file]').files[0]);
      var options = {
        url: 'api/video/upVideo',
        data: formData,
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data'
        } }
      axios(options).then(this.upVideoSucc).catch(this.upVideoFail)
    },
    upVideoSucc(res) {
      this.getVideo();
    },
    upVideoFail() {
      alert('上传视频失败')
    },
    handleFileChange(obj) {
      var imgSrc = this.getObjectURL(document.querySelector('input[type=file]').files[0]);
      if (imgSrc) {
        this.img = imgSrc;
      }
    },
    getObjectURL(file) {
      var url = null;
      if (window.createObjectURL != undefined) {
        url = window.createObjectURL(file);
      } else if (window.URL != undefined) {
        url = window.URL.createObjectURL(file);
      } else if (window.webkitURL != undefined) {
        url = window.webkitURL.createObjectURL(file);
      }
      return url;} } }
</script>
<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: left;
  line-height: 60px;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 50px;
}
body > .el-container {
  margin-bottom: 40px;
}
/*上传视频图片文件*/
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.bgColor {
  background-color: black;
}
</style>


