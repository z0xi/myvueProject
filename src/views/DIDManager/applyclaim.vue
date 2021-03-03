<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="申请方DID" style="width: 200px;" class="filter-item"
                @keyup.enter.native="handleFilter"
      />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
    </div>

    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="申请内容"  align="center" >
        <template slot-scope="scope" >
          <el-button type="text" @click="credentialVisible = true">{{ scope.row.deviceposition }}</el-button>
        </template>
      </el-table-column>

      <el-table-column label="申请者DID" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.did }}
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
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            通过
          </el-button>
          <el-button v-if="row.status!='freshing'" size="mini" type="danger" @click="handleDelete(row,$index)">
            拒绝
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="credential内容"
      :visible.sync="credentialVisible"
      width="30%">
      <span>{{credentialcontent}}}</span>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="credentialVisible = false">确 定</el-button>
  </span>

    </el-dialog>
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
          取消
        </el-button>
        <el-button type="primary" @click="updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import waves from '@/directive/waves' // waves directive
import { getList } from '@/api/table'

export default {
  name: 'applyclaim',
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
      temp:{
      },
      dialogFormVisible: false,
      credentialVisible:false,
      downloadLoading: false,
      credentialcontent:"{{json内容}}",
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {

    fetchData(){
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.dialogStatus = 'freshing'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    }, handleFilter() {/*这里可以加个waves效果，接口需要有个get方法query接口，使用listQuery作为参数质询*/
      this.listQuery.page = 1
      // getList(this.listQuery).then(response => {
      //   this.list = response.data.items
      //   this.listLoading = false
      // })这里调用接口
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
