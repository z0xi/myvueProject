<template>
  <div class="bgColor">
    <el-container style="background-color: transparent">
      <el-header style="text-align: left; font-size: 12px; border: 1px solid #eeee; margin-bottom: 10px">
        <p style="color: #36a3f7"><strong>通用技战法</strong></p>
        <p>包含这个系统所有的技战法，用户可以依据自己的需求来自定义使用</p>
      </el-header>
      <template>
        <el-row :gutter="30" >
          <el-col :span="12" v-for="value in bgPhoto" :key="o" class="el-col">
            <el-card shadow=“hover” :body-style="{ padding: '10px'}" class="card">
              <div class="grid-content bg-purple">
              <el-row>
                <el-col :span="7">
                  <div class="block1">
                    <div class="grid-content bg-purple">
                    <el-image class="image"
                      style="width: 150px; height: 150px"
                      v-bind:src="value.photoSrc">
                    </el-image>
                    </div>
                  </div>
                </el-col>
                <el-col :span="17" class="el-col">
                  <div class="grid-content bg-purple" style="padding: 2px;">
                    <p class="bg-primary">
                    <el-link v-on:@click="go" type="primary">{{value.name1}}</el-link>
                    </p>
                    <span>{{value.name2}}</span>
                  </div>
                </el-col>
              </el-row>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </template>
    </el-container>
  </div>

</template>
<script>
import universalTechnique_index from '@/views/TechnicalMethods/universalTechnique_detail/universalTechnique_index'
import pinfanGuoren from '@/views/TechnicalMethods/universalTechnique_detail/components/pinfanGuoren'
import shikongdanganGuolv from '@/views/TechnicalMethods/universalTechnique_detail/components/shikongdanganGuolv'

export default {
  name: 'actualPopulation',
  data() {
    return {
      bgPhoto: [
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1:'频繁过人',
          name2: '此技战法可以通过设置时空条件以及频次，用户可以快速找到在某个区域的某个时间段中，出现频次最高的人，来辅助排查分析目标。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1: '时空档案过滤',
          name2: '此技战法在没有嫌疑人的人脸图片信息时，在指定时间、区域范围内排查作案嫌疑人；又如某个时间段内找出所有出现在吸毒窝点的人。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1:'昼伏夜出',
          name2: '此技战法可以在没有嫌疑人的人脸图片信息时，在指定时间、区域范围内排查昼伏夜出的作案嫌疑人。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1: '时空碰撞',
          name2: '此技战法根据目击者或者其他信息得知犯罪嫌疑人在某些地点于某些时间段出现过，通过时空碰撞来寻找这些时空范围内共同出现的人。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1:'首次出现',
          name2: '此技战法可以用于人口办的实有人口管控场景，如“人在户不在”。如找到指定时间点前一段时间没有出现过，且指定时间点后出现的人。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1: '连续出现',
          name2: '此技战法可用于人口办的实有人口管控场景，用于排查在某一小区规律居住的陌生人（连续出现三天的非该地点常住人口的人）。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1:'感知离开',
          name2: '用此技战法可以找出在全部区域或某个具体区域内，在指定时间段内曾经出现过但在指定时间段内没有来过的人。'
        },
        {
          photoSrc: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          name1: '精准同行分析',
          name2: '此技战法针对与目标同行的重点人员，关注人员进行重点同行分析，可以通过设置选择库排除库的人员，来筛选出应该被重点关注的目标同行人。'
        }
      ]
    }
  },
  methods: {
    go() {
      // this.$router.push('/TechnicalMethods/universalTechnique_detail/index')
      this.$router.push('VideoFunction/VideoPlay/index')
    }
  }
}
</script>
<style scoped>
.bgColor{
  color:white;
}
.bg-purple {
  background: #1f2d3d;
  color: #bfcbd9;
}
.grid-content {
  border-radius: 2px;
  min-height: 140px;

}

.image {
  display: block;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
}
.el-col {
  margin-bottom: 30px;

}
.card{
  background-color: transparent;
  color:white;
}
</style>
