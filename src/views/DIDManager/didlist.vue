<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="DID" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"
      />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"
                 @click="handleDownload"
      >
        导出
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit

    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="DID" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.did }}
        </template>
      </el-table-column>
      <
      <el-table-column label="摄像头区域" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.devicedistrict }}</span>
        </template>
      </el-table-column>
      <el-table-column label="摄像头位置" width="110" align="center">
        <template slot-scope="scope">
          {{ scope.row.deviceposition }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="状态" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="DID
      创建时间" width="200"
      >
        <template slot-scope="scope">
          <i class="el-icon-time"/>
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="280" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button v-if="row.status!='created'" size="mini" type="success" @click="handleapply(row,$index)">
            申请
          </el-button>
          <el-button v-if="row.status!='waiting'" size="mini" type="info" @click="handleverify(row,$index)">
            验证
          </el-button>
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            更新
          </el-button>
          <el-button v-if="row.status!='freshing'" size="mini" type="danger" @click="handleDelete(row,$index)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--这里暂时采用了后端分页，所以暂时没用-->
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="fetchData"
    />

    <el-dialog title="修改该摄像头信息" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" :model="temp" label-position="left" label-width="100px"
               style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="DID：" prop="DID">
          <el-input v-model="temp.title"/>
        </el-form-item>
        <el-form-item label="摄像头位置：" prop="cameralocation">
          <el-input v-model="temp.author"/>
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
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination'
import picture from '@/assets/bg.png' // secondary package based on el-pagination

export default {
  name: 'didlist',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 0,
      listQuery: {
        page: 1,
        limit: 10
      },
      temp: {
        title: ''
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
    handleFilter() {/*这里可以加个waves效果，接口需要有个get方法query接口，使用listQuery作为参数质询*/
      this.listQuery.page = 1
      // getList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })这里调用接口
    },
    handleDownload() {
      this.downloadLoading = true
      console.log(this.list)
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['id', 'did', 'district', 'position', 'display_time']
        const filterVal = ['id', 'title', 'devicedistrict', 'deviceposition', 'display_time']
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
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)// change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateList(tempData).then(() => {/*这里要注意，还未设置updateList的api，无法confirm*/
            const index = this.list.findIndex(v => v.id === this.temp.id)
            this.list.splice(index, 1, this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'freshing'
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
