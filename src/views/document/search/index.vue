<template>
  <div class="homeWrap">
    <!--    巨幕-->
    <div style="text-align: center;">
      <!--      <table style="border: 5px solid #34bfa3; height: 50%; width: 50%; align-content: center">-->
      <div class="jumbotron">
        <div class="container">
          <div class="div_1">
            <form action="../../img">
              <table border="1" style="border: #B3C0D1 7px solid; width: 1200px; height: 500px">
                <el-divider  content-position="left"><i class="el-icon-picture">图片检索</i></el-divider>
                <!--                上传图片-->
                <div>
                  <tr style="align-content: center">
                    <td style="color: #B3C0D1; width: 20px; "><i class="el-icon-d-arrow-left" ></i></td>
                    <td style="width: 620px">
                      <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                        :auto-upload="false"
                        :limit="3"
                        :on-exceed="handleExceed">
                        <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                      <el-divider content-position="center" class="el-upload__tip" slot="tip" style="color: #B3C0D1; font-size: x-large; font-weight: bold">图片上传区域</el-divider>

                    </td>
                    <td style="color: #B3C0D1; width: 20px;"><i class="el-icon-d-arrow-right"></i></td>
                    <td style="background-color: transparent; width: 500px">
                      <div class="jumbotron" style=" margin-left: 50px">
                        <h1 style="color: #B3C0D1; text-align: left">
                          <i class="el-icon-message-solid">&nbsp;&nbsp;&nbsp;</i>
                          <i class="el-icon-message-solid">&nbsp;&nbsp;&nbsp;</i>
                          <i class="el-icon-message-solid">&nbsp;&nbsp;&nbsp;</i></h1>
                        <h1 style="color: #B3C0D1; margin-right: 50px">您现在位于<strong style="color: steelblue; font-size: xxx-large; font-weight: bold; ">
                          <em>档案查询</em></strong>&nbsp;</h1><h1 style="color: #B3C0D1; margin-left: 250px">页面!</h1>
                      </div>
                    </td>
                  </tr>
                </div>
                <el-divider content-position="left"><i class="el-icon-edit">条件检索</i></el-divider>
                <div class="div_2">
                  <tr style="color: #B3C0D1">
                    <th style="width: 300px"><i class="el-icon-s-platform">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;检索条件</i></th>
                    <td><h3 style="color: #B3C0D1; width: 300px">身份ID/姓名/档案ID</h3></td>
                    <td><h3 style="color: #B3C0D1; width: 300px">档案</h3></td>
                    <td><h3 style="color: #B3C0D1; width: 300px">阈值</h3></td>
                  </tr>
                  <tr style="color: #B3C0D1">
                    <th style="width: 300px"><i class="el-icon-s-opportunity">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选择条件</i></th>
                    <td style="width: 500px">
                      <div style="margin-top: 15px;">
                        <el-input placeholder="请输入内容" v-model="input3" class="input-with-select" style=" width: 300px">
                          <el-select v-model="select" slot="prepend" placeholder="请选择用户状态" style="width: 150px">
                            <el-option label="姓名" value="1"></el-option>
                            <el-option label="身份ID" value="2"></el-option>
                            <el-option label="档案ID" value="3"></el-option>
                          </el-select>
                        </el-input>
                      </div>
                    </td>
                    <td style="color: #B3C0D1; width: 200px">
                      <div style="margin-top: 15px;">
                        <el-select v-model="select" slot="prepend" placeholder="请选择档案状态" style="width: 80%">
                          <el-option label="活跃档案" value="1"></el-option>
                          <el-option label="不活跃档案" value="2"></el-option>
                          <el-option label="其他档案" value="3"></el-option>
                        </el-select>
                      </div>
                    </td>
                    <td style="color: #B3C0D1; width: 300px">
                      <!--                        <el-progress :percentage="percentage" :color="customColor"></el-progress>-->
                      <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
                      <div>
                        <el-button-group>
                          <el-button icon="el-icon-minus" @click="decrease"></el-button>
                          <el-button icon="el-icon-plus" @click="increase"></el-button>
                        </el-button-group>
                      </div>
                    </td>
                  </tr>
                </div>
                <div style="text-align: right">
                  <el-button>重置</el-button>
                  <el-button type="primary">提交</el-button>
                </div>

              </table>
            </form>
          </div>
          <!--抽屉-->
          <el-button @click="drawer = true" type="primary" style=" align-content: center;">
            <i class="el-icon-magic-stick" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查看结果</i>
          </el-button>

          <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; color: #B3C0D1">
              <span class="sr-only">60% Complete</span>
            </div>
          </div>
          <el-drawer
            title="查询匹配度如下："
            :visible.sync="drawer"
            :before-close="handleClose"
            size="70%">
            <div class="homeWrap">
              <!--            抽屉内容-->
              <el-container style="height: 100%; border: 1px solid #eee">
                <el-container>
                  <el-header height="60px">
                    <!--                                          <h2 style="font-weight: bold; font-family: Arial, Helvetica, sans-serif;-->
                    <!--                                 font-size: xx-large; color: #34bfa3; font-style: normal; text-align: left"><strong>查询匹配度如下：</strong></h2>-->
                    <h4 style="text-align: left; font-weight: bold; font-style: normal; font-size: 20px; color: #9EADC4">“点击页面外部任意位置退出查看”</h4>

                  </el-header>
                  <el-main>
                    <template>
                      <el-row :gutter="20">
                        <el-col :span="6" style="text-align: left" v-for="value in manphoto" :key="o" >
                          <el-card shadow=“hover” :body-style="{ padding: '10px'}" class="card">
                          <el-row>
                            <table class="table_1">
                              <img  v-bind:src="value.photoSrc" class="image">
<!--                              <img src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png" width="200px" height="200px">-->
                              <div class="caption">
                                <span>姓名：{{value.name}}</span>
                                <p>身份ID: {{value.number}}</p>
                                <p>匹配度: {{value.percent}}</p>
                                <p style="text-align: center">
                                  <el-button type="primary" style="text-align: left"><a href="#">删除</a></el-button>
                                </p>
                              </div>
                            </table>
                          </el-row>
                          </el-card>
                        </el-col>
                      </el-row>
                    </template>
                  </el-main>
                </el-container>
              </el-container>
            </div>
          </el-drawer>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

  name: 'search',
  data() {
    return {
      manphoto: [
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },
        {
          photoSrc: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
          name: '无姓名信息',
          number: '440102199900004444',
          percent:'98.9%'
        },

       ],



      // 抽屉
      drawer: false,
      innerDrawer: false,
      dialogImageUrl: '',
      dialogVisible: false,
// 输入框
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: '',

      // 阈值进度条
      percentage: 0,
      // customColor: '#409eff',
      // customColors: [
      //   {color: '#f56c6c', percentage: 20},
      //   {color: '#e6a23c', percentage: 40},
      //   {color: '#5cb87a', percentage: 60},
      //   {color: '#1989fa', percentage: 80},
      //   {color: '#6f7ad3', percentage: 100}
      // ],
    }
  },
  methods: {
    //抽屉
    handleClose(done) {
      this.$confirm('确定要关闭查询结果吗？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },

    //上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },

    //阈值进度条
    customColorMethod(percentage) {
      if (percentage < 10) {
        return '#1989fa';
      } else if (percentage < 30) {
        return '#20b2aa';
      } else if (percentage < 50) {
        return '#6f7ad3';
      } else if (percentage < 70) {
        return '#67c23a';
      } else if (percentage < 90) {
        return '#e6a23c';
      } else {
        return '#f56c6c';
      }
    },
    increase() {
      this.percentage += 1;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 1;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    }
  },


}
</script>


<style scoped>


/*输入框*/
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.progress{background-color: #B3C0D1;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.div_1{
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
}

.div_2{
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
  line-height: 50px;
}
/*.td_1{*/
/*  margin-left: auto;*/
/*  margin-right: auto;*/
/*  width: 20px;*/
/*}*/

#h3_1{color: #B3C0D1; font-style: normal; font-size: large; font-weight: bold; text-align: center}
.table_1{border: #B3C0D1 7px solid;}
#p1{color: #9EADC4; font-weight: bold; font-size: small; font-style: normal; text-align: center}


/*借用技战法css*/
.el-header {
  background-color: transparent;
  color: #bfcbd9;
  line-height: 10px;
}
.el-aside {
  color: #bfcbd9;
  height:100%;
}
.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: url("../../img/2.png");*/
  background-image: url("../../../assets/bg.png");
}
#logo{
  background: url("../../img/1.png");
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
.row{
  border:1px solid #2b2f3a;
  height: 140px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 140px;
}
.col{
  border: 1px solid #2b2f3a;
  background-color: transparent;
}
.el-row {
  margin-bottom: 20px;

&:last-child {
   margin-bottom: 0;
   /*color: #bfcbd9;*/
 }
}
.el-col {
  border-radius: 2px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #1f2d3d;
  color: #bfcbd9;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 2px;
  min-height: 140px;

}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.card{
  background-color: transparent;
  color:white;
  align-content: center;
}
.image {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
.bgColor{
  color:white;
}
</style>

