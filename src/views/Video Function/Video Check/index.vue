<template>
  <div class="app-container">
    <div class="filter-container">
      <!--      <el-input v-model="listQuery.title" placeholder="选择相应特征..." style="width: 200px;" class="filter-item"-->
      <!--                @keyup.enter.native="handleFilter"-->
      <!--      />-->
      <!--      <el-select v-model="listQuery.importance" placeholder="Imp" clearable style="width: 90px" class="filter-item">-->
      <!--        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />-->
      <!--      </el-select>-->


      <!--      级联菜单-->
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"></el-cascader>

      <!--      选择日期-->
      <!--        <span class="demonstration">Date</span>-->
      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions">
      </el-date-picker>

      <!--      时间-->
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
      start: '00:00',
      step: '00:15',
      end: '23:45'
    }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
      start: '00:00',
      step: '00:15',
      end: '23:45',
      minTime: startTime
    }">
      </el-time-select>




      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
      <!--      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download"-->
      <!--                 @click="handleDownload"-->
      <!--      >-->
      <!--        导出-->
      <!--      </el-button>-->
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
        <template slot-scope="scope" >
          <el-button type="text" @click="credentialVisible = true">{{ scope.row.did }}</el-button>
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
      <!--      <el-table-column class-name="status-col" label="状态" width="110" align="center">-->
      <!--        <template slot-scope="scope">-->
      <!--          <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>-->
      <!--        </template>-->
      <!--      </el-table-column>-->
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
          <!--          <el-button v-if="row.status!='created'" size="mini" type="success" @click="handleapply(row,$index)">-->
          <!--            申请-->
          <!--          </el-button>-->
          <!--          <el-button type="primary" size="mini" @click="handleUpdate(row)">-->
          <!--            更新-->
          <!--          </el-button>-->
          <!--          <el-button v-if="row.status!='freshing'" size="mini" type="danger" @click="handleDelete(row,$index)">-->
          <!--            删除-->
          <!--          </el-button>-->
          <el-button type="primary" size="mini" @click="videoPlay()">
            点击查看视频
          </el-button>

        </template>
      </el-table-column>
    </el-table>
    <!--这里暂时采用了后端分页，所以暂时没用-->
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
                @pagination="fetchData"
    />

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
      // 日期
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',


      // 时间
      startTime: '',
      endTime: '',


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
      credentialVisible:false,
      credentialcontent:"{{json内容}}",


      value: [],
      options: [{
        value: 'xingren',
        label: '行人',
        children: [{
          value: 'nanxing',
          label: '男性',
          children: [{
            value: 'xingwei',
            label: '行为'
          }, {
            value: 'yizhuo',
            label: '衣着'
          }, {
            value: 'nianling',
            label: '年龄'
          }, {
            value: 'shengao',
            label: '身高'
          }, {
            value: 'faxing',
            label: '发型'
          }, {
            value: 'titai',
            label: '体态'
          }]
        }, {
          value: 'nvxing',
          label: '女性',
          children: [{
            value: 'xingwei',
            label: '行为'
          }, {
            value: 'yizhuo',
            label: '衣着'
          }, {
            value: 'nianling',
            label: '年龄'
          }, {
            value: 'shengao',
            label: '身高'
          }, {
            value: 'faxing',
            label: '发型'
          }, {
            value: 'titai',
            label: '体态'
          }]
        }]
      }, {
        value: 'cheliang',
        label: '车辆',
        children: [{
          value: 'jidongche',
          label: '机动车',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        }, {
          value: 'feijidongche',
          label: '非机动车',
          children: [{
            value: 'radio',
            label: 'Radio 单选框'
          }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
          }, {
            value: 'input',
            label: 'Input 输入框'
          }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
          }, {
            value: 'select',
            label: 'Select 选择器'
          }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
          }, {
            value: 'switch',
            label: 'Switch 开关'
          }, {
            value: 'slider',
            label: 'Slider 滑块'
          }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
          }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
          }, {
            value: 'upload',
            label: 'Upload 上传'
          }, {
            value: 'rate',
            label: 'Rate 评分'
          }, {
            value: 'form',
            label: 'Form 表单'
          }]
        }, {
          value: 'data',
          label: 'Data',
          children: [{
            value: 'table',
            label: 'Table 表格'
          }, {
            value: 'tag',
            label: 'Tag 标签'
          }, {
            value: 'progress',
            label: 'Progress 进度条'
          }, {
            value: 'tree',
            label: 'Tree 树形控件'
          }, {
            value: 'pagination',
            label: 'Pagination 分页'
          }, {
            value: 'badge',
            label: 'Badge 标记'
          }]
        }, {
          value: 'notice',
          label: 'Notice',
          children: [{
            value: 'alert',
            label: 'Alert 警告'
          }, {
            value: 'loading',
            label: 'Loading 加载'
          }, {
            value: 'message',
            label: 'Message 消息提示'
          }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
          }, {
            value: 'notification',
            label: 'Notification 通知'
          }]
        }, {
          value: 'navigation',
          label: 'Navigation',
          children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
          }, {
            value: 'tabs',
            label: 'Tabs 标签页'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
          }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
          }, {
            value: 'steps',
            label: 'Steps 步骤条'
          }]
        }, {
          value: 'others',
          label: 'Others',
          children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
          }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
          }, {
            value: 'popover',
            label: 'Popover 弹出框'
          }, {
            value: 'card',
            label: 'Card 卡片'
          }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
          }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
          }]
        }]
      }]
    };
  },

  created() {
    this.fetchData()
  },
  methods: {

    videoPlay() {
      this.$router.push('/videoplayer/index')
    },

    handleChange(value) {
      console.log(value);
    },

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
