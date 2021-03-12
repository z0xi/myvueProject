<template>
  <div class="counting">
    <p>
      共1007个档案
    </p>
    <el-row v-for="item in 2" :key="item">
      <el-col :span="3" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 1 : 0">
        <el-card shadow=“hover” :body-style="{ padding: '10px'}">
          <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="image">
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
  name:'realnameDoc'
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
  width: 95%;
  display: block;
}
.el-row {
  margin-top: 40px;
  margin-bottom: 4px;

}

</style>
