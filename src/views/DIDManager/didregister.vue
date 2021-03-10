<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button  type="primary" icon="el-icon-search" @click="handleregister(row)">
        注册DID
      </el-button>
      <el-button :loading="downloadLoading" style="margin-left:12px" class="filter-item" type="primary" icon="el-icon-download"
                 @click="handleDownload"
      >
        导出Authority Issuer列表
      </el-button>
    </div>
    <div class="tittletext">已注册Authority issuer列表</div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      style="margin-top:18px"
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="DID" width="300" align="center">
        <template slot-scope="scope">
          {{ scope.row.did }}
        </template>
      </el-table-column>
      <
      <el-table-column label="Authority属性" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.deviceposition }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="280" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button size="mini" type="danger" @click="handleDelete(row,$index)">
            撤销认证
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="准备注册成权威机构的DID" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="100px"
               style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="DID：">
          <el-input v-model="temp.title"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="updateData()">
          Confirm
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  name: 'didregister'
  ,
  data() {
    return {
      userdid: '',
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
        temp:{

        },
      dialogFormVisible: false,
      dialogStatus: '',
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      console.log(this.list)
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['id', 'did', 'district']
        const filterVal = ['id', 'title', 'devicedistrict']
        const data = this.formatJson(filterVal)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal) {
      return this.list.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    },
    handleregister(row){
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.tittletext {
  font-size: 26px;
  color: white;
}

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
  background-color: #C0C4CC
}

.pagination-container {
  background-color: transparent;
}
</style>
