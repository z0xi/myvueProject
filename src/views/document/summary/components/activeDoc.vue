<template>
<div class="counting">
  <p>
    共1007个档案
  </p>
  <el-row v-for="item in 2" :key="item">
    <el-col :span="3" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 1 : 0">
      <el-card shadow=“hover” :body-style="{ padding: '10px'}">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 8px;">
          <span>姓名</span>
          <p>身份证号</p>
          <div class="bottom">
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  date(){
  return{

  }

  },
  name:'activeDoc'
}
</script>

<style scoped>
.counting{
  color:white;
}
.bottom {
  margin-top: 13px;
  line-height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
.el-row {
  margin-top: 20px;
  margin-bottom: 4px;

}

</style>
