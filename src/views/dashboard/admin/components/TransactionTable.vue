<template>
  <div class="app-container">
  <el-table :data="list" class="eltable"  style="width: 100%;padding-top: 15px;">
    <el-table-column label="任务" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="任务下达者" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.price }}
      </template>
    </el-table-column>
    <el-table-column label="任务进行情况" width="150" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
    </div>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
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
      list: null
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
    }
  }
}
</script>

<style lang="scss" scoped>
.el-table{
  background-color: transparent;
  color: #20a0ff;
}
</style>
