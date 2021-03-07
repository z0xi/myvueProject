<template>
  <div class="user-activity">
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg'+avatarPrefix">
        <span class="username text-muted">管理员admin</span>
        <span class="description">公告 - 7:30 PM 今日</span>
      </div>
      <p>
       设备编号xxx的视频统一加快分析进度！加急！
      </p>
      <ul class="list-inline">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-remove" />
            删除
          </span>
        </li>

      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg'+avatarPrefix">
        <span class="username text-muted">用户1</span>
        <span class="description">给你发了个消息 - 8:30 PM 昨天</span>
      </div>
      <p>
       xxx号视频分析中的嫌疑人已被抓捕。
      </p>
      <ul class="list-inline">
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-remove" />
            删除
          </span>
        </li>
        <li>
          <span class="link-black text-sm">
            <i class="el-icon-message" />
            回复
          </span>
        </li>
      </ul>
    </div>
    <div class="post">
      <div class="user-block">
        <img class="img-circle" :src="'https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg'+avatarPrefix">
        <span class="username">用户2</span>
        <span class="description">公告 - 两天前</span>
      </div>
      <p>
        视频分析功能将于2021年2月3日关闭维修，至2月4日8am开放。
      </p>
      <ul class="list-inline">
        <li><span class="link-black text-sm"><i class="el-icon-remove" /> 删除</span></li>

      </ul>
    </div>
  </div>
</template>

<script>
const avatarPrefix = '?imageView2/1/w/80/h/80'


export default {
  data() {
    return {

      avatarPrefix

    }
  }
}
</script>

<style lang="scss" scoped>
.user-activity {
  .user-block {

    .username,
    .description {
      display: block;
      margin-left: 50px;
      padding: 2px 0;
    }

    .username{
      font-size: 16px;
      color: #40c9c6;
      font-weight: bolder;
    }

    :after {
      clear: both;
    }

    .img-circle {
      border-radius: 50%;
      width: 40px;
      height: 40px;
      float: left;
    }

    span {
      font-weight: 500;
      font-size: 12px;
    }
  }

  .post {
    font-size: 14px;
    border-bottom: 1px solid #d2d6de;
    margin-bottom: 15px;
    padding-bottom: 15px;
    color: white;

    .image {
      width: 100%;
      height: 100%;

    }

    .user-images {
      padding-top: 20px;
    }
  }

  .list-inline {
    padding-left: 0;
    margin-left: -5px;
    list-style: none;

    li {
      display: inline-block;
      padding-right: 5px;
      padding-left: 5px;
      font-size: 13px;
    }

    .link-black {

      &:hover,
      &:focus {
        color: #999;
      }
    }
  }

}

.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}
</style>
