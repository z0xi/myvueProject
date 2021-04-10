<template>
  <div class="didlist-container">
    <div class="didlist_title">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>DID身份管理</el-breadcrumb-item>
        <el-breadcrumb-item><span style="color:#8198BE;">已入网摄像头</span></el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="filter-container">
      <el-input v-model="listQuery.title" placeholder="DID" class="filter-item filter_iput" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item filter_button" style="margin-left:12px" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button v-waves :loading="downloadLoading" style="margin-left:12px" class="filter-item filter_button" type="primary" icon="el-icon-download" @click="handleDownload">
        导出
      </el-button>
    </div>
    <div class="dev_table">
      <el-scrollbar ref="elscrollbar">
        <el-table
          v-loading="listLoading"
          :data="list"
          stripe
          fit
        >
          <el-table-column align="center" label="序号" width="95">
            <template slot-scope="scope">
              {{ scope.$index }}
            </template>
          </el-table-column>
          <el-table-column label="DID" align="center">
            <template slot-scope="scope">
              <el-button type="text" class="DID_button" @click="credentialVisible = true">{{ scope.row.did }}</el-button>
            </template>
          </el-table-column>
          <el-table-column label="摄像头区域" align="center">
            <template slot-scope="scope">
              <span>{{ scope.row.devicedistrict }}</span>
            </template>
          </el-table-column>
          <el-table-column label="摄像头位置" align="center">
            <template slot-scope="scope">
              {{ scope.row.deviceposition }}
            </template>
          </el-table-column>
          <el-table-column class-name="status-col" label="状态" align="center">
            <template slot-scope="scope">
              <div class="div_status">
                <div class="status1" :class="scope.row.statusClass" />
                <span>{{ scope.row.status }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" prop="created_at" label="DID 创建时间">
            <template slot-scope="scope">
              <i class="el-icon-time" />
              <span>{{ scope.row.display_time }}</span>
            </template>
          </el-table-column>
          <!-- <el-table-column label="操作" align="center" width="280" class-name="small-padding fixed-width">
            <template slot-scope="{row,$index}">
              <el-button v-if="row.status!='created'" size="mini" type="success" @click="handleapply(row,$index)">
                申请
              </el-button>
              <el-button type="primary" size="mini" @click="handleUpdate(row)">
                更新
              </el-button>
              <el-button v-if="row.status!='freshing'" size="mini" type="danger" @click="handleDelete(row,$index)">
                删除
              </el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </el-scrollbar>
      <el-pagination
        class="sa-page"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="pageSize"
        layout="prev, pager, next, sizes, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <!-- </el-pagination> -->
    </div>
    <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="fetchData"
    /> -->

    <el-dialog
      title="修改该摄像头信息"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="dataForm"
        :model="temp"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="DID：" prop="DID">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="摄像头位置：" prop="cameralocation">
          <el-input v-model="temp.author" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="updateData()">
          确定
        </el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="DID详细信息"
      :visible.sync="credentialVisible"
    >
      <span>{{ credentialcontent }}}</span>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="credentialVisible = false">取 消</el-button>
        <el-button type="primary" @click="credentialVisible = false">确 定</el-button>
      </span> -->
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/did'
import waves from '@/directive/waves' // waves directive
// import Pagination from '@/components/Pagination'
// import picture from '@/assets/bg.png' // secondary package based on el-pagination
export default {
  // components: { Pagination },
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
      list: [
        {
          did: 'Vprmmuv',
          devicedistrict: 'bgbd',
          deviceposition: 'fwe',
          status: '在线',
          display_time: '2021-03-31 17:58:00',
          statusClass: 'status_on'
        },
        {
          did: 'fv sds',
          devicedistrict: 'grge',
          deviceposition: 'ger',
          status: '离线',
          display_time: '2021-03-31 17:58:00',
          statusClass: 'status_down'
        },
        {
          did: '23423',
          devicedistrict: '4353',
          deviceposition: '566',
          status: '1',
          display_time: '2021-03-31 17:58:00',
          statusClass: 'status_on'
        }
      ],
      listLoading: false,
      total: 23,
      currentPage: 1, // 现在页
      pageSize: 10, // 每页条数
      listQuery: {
        page: 1,
        limit: 10
      },
      temp: {
        title: ''
      },
      dialogFormVisible: false,
      dialogStatus: '',
      credentialVisible: false,
      credentialcontent: '{{json内容}}',
      downloadLoading: false
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    // 改变分页大小
    handleSizeChange(val) {
      this.pageSize = val
      this.scrollTop(0)
      // this.devlist(this.param);
    },
    // 改变页数
    handleCurrentChange(val) {
      this.currentPage = val
      // this.devlist(this.param, val);
    },
    // 改变滚动条的高度
    scrollTop: function(height) {
      var div = this.$refs['elscrollbar'].$refs['wrap']
      this.$nextTick(() => {
        div.scrollTop = height
      })
    },
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleFilter() { /* 这里可以加个waves效果，接口需要有个get方法query接口，使用listQuery作为参数质询 */
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
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }
      }))
    },
    updateData() {
      this.dialogFormVisible = false
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          // const tempData = Object.assign({}, this.temp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          // updateList(tempData).then(() => { /* 这里要注意，还未设置updateList的api，无法confirm */
          //   const index = this.list.findIndex(v => v.id === this.temp.id)
          //   this.list.splice(index, 1, this.temp)
          //   this.dialogFormVisible = false
          //   this.$notify({
          //     title: 'Success',
          //     message: 'Update Successfully',
          //     type: 'success',
          //     duration: 2000
          //   })
          // })
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
<style>
.didlist-container .el-table td, .el-table th.is-leaf {
    border-bottom: 1px solid #0b1a35;
}
.didlist-container .el-pagination {
    white-space: nowrap;
    padding: 2px 5px;
    color: #8198be;
    font-weight: 700;
}
.didlist-container .el-pagination button:disabled {
    color: #C0C4CC;
    background: none;
}
.didlist-container .el-pager li.active {
    color: #2B9EFF;
}
.didlist-container .el-pager li {
    background: none;
}
.didlist-container .el-pagination .btn-next, .el-pagination .btn-prev {
    background: none;
    color: #526c98;
}
.didlist-container .el-input__inner {
  height: 32px !important;
  border: 1px solid #17325F !important;
  border-radius: 4px !important;
  background: #0B1A37 !important;
}
.didlist-container .el-dialog {
  width: 600px;
  height: 320px;
  background: url(../../assets/icon/Popup_bj.png) 100% 100% no-repeat;
  border-radius: 10px;
}
.didlist-container .el-dialog__header {
    border-bottom: 1px solid #1B3869;
}
.didlist-container .el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  font-weight: bold;
  color: #2D61A8;
}
.didlist-container .el-dialog__headerbtn .el-dialog__close {
  color: #526c98;
  font-weight: 900;
}
</style>
<style scoped>
.dev_table  /deep/ .el-table:before {
    background: none;
}
.dev_table  /deep/ .el-table, .el-table__expanded-cell {
    background: none;
}
.dev_table  /deep/ .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #0B1A35;
}
.dev_table  /deep/ .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: #1B3565;
}

.dev_table /deep/ .el-table th{
  font-weight: bold;
  background: #172B51;
  color: #2D61A8;
  font-size: 16px;
}
.dev_table /deep/ .el-table tr{
  font-weight: 400;
  background: rgba(14, 34, 69, 0.7);
  color: #8198BE;
  font-size: 16px;
}
.pagination-container {
  background-color: transparent;
}
.didlist_title /deep/ .el-breadcrumb {
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
}
.didlist_title /deep/ .el-breadcrumb__inner {
  color: #526C98;
}
.didlist_title /deep/ .el-breadcrumb__separator {
  color: #526C98;
}
.filter-container /deep/ .filter_iput{
  width: 360px;
  height: 36px;
}
.filter-container /deep/ .filter_iput .el-input__inner{
  border: 1px solid #17325F;
  border-radius: 4px;
  height: 36px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #C8D9F6;
  border: none;
  background: #0B1A37;
}
.filter-container /deep/ .filter_button{
  margin-left: 12px;
  padding: 10px 14px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #C8D9F6;
  border: none;
  background: #0F7DDA;
}
</style>
<style lang="scss" scoped>
.didlist-container{
  height: 100%;
  padding: 15px 20px;
  .didlist_title{
    height: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 25px;
    background: url(../../assets/icon/coordinate_icon.png) no-repeat center left;
  }
  .filter-container{
    margin: 10px 0;
  }
  .dev_table{
    height: calc(100% - 76px);
    .DID_button{
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #2B9EFF;
    }
    .div_status{
      width: 75px;
      height: 30px;
      background: #2A477C;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      span{
        margin-left: 5px;
        color: #C8D9F6;
      }
      .status1{
        width: 8px;
        height: 8px;
        border-radius: 4px;
      }
      .status_on{
        background: #32AB76;
      }
      .status_down{
        background: #C26A48;
      }
    }
  }
  .sa-page{
    text-align: center;
    background: rgba(14, 34, 69, 0.7);
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
