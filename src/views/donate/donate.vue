<template>
  <div class="app-container">

    <template>
      <div>
        <span v-html="msg" />
        <p class="greeting">{{ greeting }}</p>
        <button @click="checkConnection">確認連線</button>
        <button @click="readAccount">顯示目前帳號</button>
        <button @click="deployContract">部屬合約</button>
        <button @click="readContract">讀取合約</button>
      </div>
    </template>

    <div class="filter-container">
      <el-select v-model="listQuery.groupLocation" placeholder="機關或團體類型" clearable style="width: 200px">
        <el-option v-for="item in list" :key="item.groupCode" :label="item.groupCode + ' ' + item.groupName" :value="item.groupCode" />
      </el-select>
      <el-input v-model="listQuery.groupName" placeholder="捐贈金額" style="width: 200px; margin-left: 10px;" />
      <el-button style="margin-left: 10px;" type="primary" icon="el-icon-coin" @click="handleCreate">
        Donate
      </el-button>
    </div>
    <hr>

    <h4 style="color:#606266">捐贈紀錄</h4>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="捐贈碼" align="center">
        <template slot-scope="{row}">
          <span>{{ row.groupCode }}</span>
        </template>
      </el-table-column>
      <el-table-column label="機關或團體類型" align="center">
        <template slot-scope="{row}">
          <span>{{ row.groupType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="機關或團體名稱" align="center">
        <template slot-scope="{row}">
          <span>{{ row.groupName }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

  </div>
</template>

<script>
import Web3 from 'web3'
import Contract from 'web3-eth-contract'
import MSHKABIContractABI from '../../../static/ABI/MSHK.json' // 引入 Truffle 编译后的合约文件
import { fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
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
        limit: 20,
        groupCode: undefined,
        sort: '+id'
      },
      locationOptions: ['弱勢兒童少年類', '疾病與健康關懷', '生活就業經濟類', '生態環保與動物類'],
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
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
      ContractABI: MSHKABIContractABI, // 調用智能合約JSON的接口
      msg: '',
      greeting: 'Hello World! Welcome to mshk.top',
      GanacheUrl: 'localhost:8545',
      CurrentAccount: null,
      NewContract: null
    }
  },
  created() {
    this.getList()
  },
  mounted() {
    if (typeof this.web3 !== 'undefined') {
      // web3.currentProvider當前提供者
      this.web3 = new Web3(this.web3.currentProvider)
    } else {
      // set the provider you want from Web3.providers
      this.web3 = new Web3('ws://' + this.GanacheUrl)
    }
    // 合約本地Ganache的RPC接口
    Contract.setProvider('ws://' + this.GanacheUrl)
  },
  methods: {
    checkConnection() {
      if (this.web3) {
        const isListening = this.web3.eth.net.isListening()
        console.log(isListening)
      }
    },
    readAccount() {
      var obj = this
      // 读取帐号列表
      this.web3.eth.getAccounts().then(function(accounts) {
        obj.CurrentAccount = accounts[0]
        obj.msg = '目前讀取到的帳號為：' + obj.CurrentAccount // 取得 Ganache 建立的第一個帳號
      })
    },
    readContract() { // 读取合约
      var obj = this
      // 使用 JSON 接口、合约地址，创建一个新的合约实例，其所有方法和事件都在其json 接口对象中定义。
      var contract = new Contract(this.ContractABI.abi, obj.NewContract.options.address)
      // 调用合约中的 hello 方法，并赋值到 this.msg 中，输出到页面
      contract.methods.hello().call().then(s => {
        this.msg = s
      })
    },
    deployContract() { // 部署合约
      var obj = this
      if (obj.CurrentAccount == null) {
        obj.msg = '请先读取帐号'
        return
      }
      var outMsg = []
      var contract = new Contract(this.ContractABI.abi, this.ContractAddr)
      contract.options.data = this.ContractABI.deployedBytecode
      contract.deploy({
        data: obj.ContractABI.bytecode // 合约的字节码
      })
        .send({
          from: obj.CurrentAccount, // 交易的发送地址
          gas: 1500000, // 交易提供的最大 Gas
          gasPrice: '30000000000000' // 用于此交易的以 wei 为单位的 gas 价格
        })
        .on('error', function(error) { // 如果在发送过程中发生错误，则触发。
          obj.msg = 'error:' + error
        })
        .on('transactionHash', function(transactionHash) { // 当交易哈希可用时触发。
          console.log(transactionHash)
        })
        .on('receipt', function(receipt) { // 当交易收据可用时触发。来自合约的收据将没有属性，而是具有事件名称作为键和事件作为属性的属性。
          outMsg.push('Transaction:' + receipt.transactionHash) // 交易哈希
          outMsg.push('Contract created:' + receipt.contractAddress) // 合约创建的地址
          outMsg.push('Gas usage:' + receipt.gasUsed) // 使用的Gas
          outMsg.push('Block number:' + receipt.blockNumber) // 区块
          obj.msg = outMsg.join('<br/ >')
        }).then(function(newContractInstance) {
          obj.NewContract = newContractInstance // instance with the new contract address
        })
    },
    getList() {
      this.listLoading = true
      this.list = this.groupData
      this.total = Object.keys(this.groupData).length
      this.listLoading = false
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
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
    handleDelete(row, index) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
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
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>
