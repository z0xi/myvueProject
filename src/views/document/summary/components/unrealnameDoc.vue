<template>
  <div class="counting">
    <p>
      共1007个档案
    </p>
    <el-row :gutter="30" >
      <el-col :span="4" v-for="value in manphoto" :key="o" >
        <el-card shadow=“hover” :body-style="{ padding: '10px'}" class="card">
          <img  v-bind:src="value.photoSrc" class="image">
          <div style="padding: 8px;">
            <span>姓名：{{value.name}}</span>
            <p>身份证号: {{value.number}}</p>
            <div class="bottom">
              <el-button type="text" class="button">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      manphoto: [
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '张国荣',
          number: '440102199900002222'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '刘德华',
          number: '440102199900001111'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '林青霞',
          number: '440102199900003333'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '周星驰',
          number: '44010219990005555'
        },{
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '王祖贤',
          number: '440102199900006666'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '周润发',
          number: '440102199900001111'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '张学友',
          number: '440102199900008888'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '张曼玉',
          number: '440102199900007777'
        },
        {
          photoSrc: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
          name: '成龙',
          number: '440102199900000000'
        }]
    }
  }
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
.el-col {

  margin-bottom: 30px;

}
.card{
  background-color: transparent;
  color:white;
}
</style>
