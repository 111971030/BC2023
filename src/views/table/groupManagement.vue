<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.groupCode" placeholder="捐贈碼" style="margin-left: 5px; width: 90px;" class="filter-item" @keyup.enter.native="getList" />
      <el-select v-model="listQuery.groupType" placeholder="機關或團體類型" clearable style="margin-left: 5px; width: 200px" class="filter-item">
        <el-option v-for="item in locationOptions" :key="item" :label="item" :value="item" />
      </el-select>
      <el-input v-model="listQuery.groupName" placeholder="機關或團體名稱" style="margin-left: 5px; width: 200px;" class="filter-item" @keyup.enter.native="getList" />
      <el-button v-waves class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-search" @click="getList">
        Search
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="createData">
        Add
      </el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column align="center">
        <template slot="header">
          <span @click="sortBy('groupCode')">捐贈碼</span>
        </template>
        <template slot-scope="{row}">
          <span>{{ row.groupCode }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template slot="header">
          <span @click="sortBy('groupType')">機關或團體類型</span>
        </template>
        <template slot-scope="{row}">
          <span>{{ row.groupType }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center">
        <template slot="header">
          <span @click="sortBy('groupName')">機關或團體名稱</span>
        </template>
        <template slot-scope="{row}">
          <span>{{ row.groupName }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
// import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
// import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import groupData from '@/data/group.json'

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      locationOptions: ['弱勢兒童少年類', '疾病與健康關懷', '生活就業經濟類', '生態環保與動物類'],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false,
      groupData: groupData,
      sortedData: groupData,
      sortedbyASC: true,
      filteredData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      this.list = this.groupData
      if (this.listQuery.groupCode) {
        this.list = this.list.filter(post => {
          return post.groupCode.toString().toLowerCase().includes(this.listQuery.groupCode.toString().toLowerCase())
        })
      }
      if (this.listQuery.groupType) {
        this.list = this.list.filter(post => {
          return post.groupType.toString().toLowerCase().includes(this.listQuery.groupType.toString().toLowerCase())
        })
      }
      if (this.listQuery.groupName) {
        this.list = this.list.filter(post => {
          return post.groupName.toString().toLowerCase().includes(this.listQuery.groupName.toString().toLowerCase())
        })
      }
      this.total = Object.keys(this.list).length
      this.listLoading = false
    },
    sortBy(sortBy) {
      console.log(sortBy)
      if (this.sortedbyASC) {
        this.sortedData.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1))
        this.sortedbyASC = false
      } else {
        this.sortedData.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1))
        this.sortedbyASC = true
      }
    },
    resetTemp() {
      this.listQuery.groupCode = undefined
      this.listQuery.groupType = undefined
      this.listQuery.groupName = undefined
    },
    handleCreate() {
      // this.resetTemp()
      // this.dialogStatus = 'create'
      // this.dialogFormVisible = true
      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
      // })
    },
    createData() {

    },
    handleUpdate(row) {
      // this.temp = Object.assign({}, row) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      // this.dialogStatus = 'update'
      // this.dialogFormVisible = true
      // this.$nextTick(() => {
      //   this.$refs['dataForm'].clearValidate()
      // })
    },
    updateData() {
      // this.$refs['dataForm'].validate((valid) => {
      //   if (valid) {
      //     const tempData = Object.assign({}, this.temp)
      //     tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
      //     updateArticle(tempData).then(() => {
      //       const index = this.list.findIndex(v => v.id === this.temp.id)
      //       this.list.splice(index, 1, this.temp)
      //       this.dialogFormVisible = false
      //       this.$notify({
      //         title: 'Success',
      //         message: 'Update Successfully',
      //         type: 'success',
      //         duration: 2000
      //       })
      //     })
      //   }
      // })
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
