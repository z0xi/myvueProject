<template>
  <div class="table-container">
    <el-row :gutter="12">
      <el-col :span="6" >
        <el-card shadow="hover" :body-style="{ padding: '30px' }">
          <div class="leftbox">进行中任务</div>
          <div class="rightbox">
            {{ runningTaskNum }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '30px' }">
          <div class="leftbox">已完成任务</div>
          <div class="rightbox">
            {{ solvedTaskNum }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" :body-style="{ padding: '30px' }">
          <div class="leftbox">已取消任务</div>
          <div class="rightbox">
            {{ canceledTaskNum }}
          </div>
        </el-card>
      </el-col>
      <div class="buttonclass">
        <router-link to='/TechnicalMethods/TechnicalMethods'>
          <el-button type="primary">创建任务</el-button>
        </router-link>
      </div>
    </el-row>

    <el-table :data="list" class="eltable"  style="width: 100%;padding-top: 15px;">
      <el-table-column label="任务" min-width="200">
        <template slot-scope="scope">
          {{ scope.row.order_no | orderNoFilter }}
        </template>
      </el-table-column>
      <el-table-column label="任务时空范围" min-width="200">
        <template slot-scope="scope">
          {{ scope.row.order_no | orderNoFilter }}
        </template>
      </el-table-column>
      <el-table-column label="库范围 " min-width="200">
        <template slot-scope="scope">
          {{ scope.row.order_no | orderNoFilter }}
        </template>
      </el-table-column>
      <el-table-column label="创建者" width="195" align="center">
        <template slot-scope="scope">
          {{ scope.row.price }}
        </template>
      </el-table-column>
      <el-table-column label="进行情况" width="150" align="center">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="280" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button v-if="row.status!='working'" size="mini" type="success" @click="handleFinish(row,$index)">
            完成
          </el-button>
          <el-button type="primary" size="mini" @click="handleFinish(row,$index)">
            终止
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
  name:'taskmanager',
  filters: {
    statusFilter(status) {
      const statusMap = {
        已完成: 'success',
        进行中: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null,
      runningTaskNum:123,
      solvedTaskNum:312,
      canceledTaskNum:222,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      transactionList().then(response => {
        this.list = response.data.items.slice(0, 8)
      })
    },
  }
}
</script>
<style scoped>
/*最外层透明*/
/deep/ .el-table, /deep/ .el-table__expanded-cell {
  background-color: transparent;
  color: white;
}

/* 表格内背景颜色 */
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent;
  color: white;
}

/*table item鼠标悬停颜色*/
/deep/ .el-table tbody tr:hover > td {
  background-color: #C0C4CC;
}
</style>
<style lang="scss" scoped>
.leftbox{
  float: left;
}

.rightbox{
  float: right;
}
.buttonclass{
  float: right;
  padding:10px;
}
</style>
