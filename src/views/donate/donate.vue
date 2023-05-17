<template>
  <div class="app-container">

    <!-- <template>
      <div>
        <span v-html="msg" />
        <p class="greeting">{{ greeting }}</p>
        <button @click="checkConnection">確認連線</button>
        <button @click="readAccount">顯示目前帳號</button>
        <button @click="deployContract">部屬合約</button>
        <button @click="readContract">讀取合約</button>
      </div>
    </template>
    -->

    <div class="filter-container">
      <span style="margin-left: 10px;">帳號：</span>
      <!-- <el-input v-model="CurrentAccount" style="width: 400px; margin-left: 10px;" readonly/> -->
      <el-select v-model="accountID" placeholder="選擇User" clearable style="width: 200px; margin-left: 10px;" @change="changeUser()">
        <el-option v-for="item in userData" :key="item.userID" :label="item.userName" :value="item.userID" />
      </el-select>
      <span style="margin-left: 10px;">餘額：</span>
      <el-input v-model="CurrentAccountBalance" style="width: 400px; margin-left: 10px;" readonly />&nbsp;
      <br><br>
      <span style="margin-left: 10px;">捐款：</span>
      <el-select v-model="listQuery.groupLocation" placeholder="選擇機關或團體類型" clearable style="width: 200px; margin-left: 10px;">
        <el-option v-for="item in list" :key="item.groupCode" :label="item.groupCode + ' ' + item.groupName" :value="item.groupCode" />
      </el-select>
      <el-input v-model="DonateCoin" placeholder="捐贈金額" style="width: 200px; margin-left: 10px;" />
      <el-button style="margin-left: 10px;" type="primary" icon="el-icon-coin" @click="sendTransaction()">
        Donate
      </el-button>
      <el-button style="margin-left: 10px;" type="primary" icon="el-icon-coin" @click="checkConnection()">
        checkConnection
      </el-button>
    </div>
    <hr>

    <h4 style="color:#606266">捐贈明細</h4>
    <ul>
      <li
        v-for="(value, key) in transactionReceipt"
        :key="key"
      >
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import Web3 from 'web3'
import Contract from 'web3-eth-contract'
import MSHKABIContractABI from '../../../static/ABI/MSHK.json' // 導入Truffle編譯後的合約文件
import { fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import userData from '@/data/user.json'
import groupData from '@/data/group.json'

export default {
  name: 'ComplexTable',
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
      userList: null,
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
      userData: userData,
      groupData: groupData,
      ContractABI: MSHKABIContractABI, // 調用智能合約JSON的接口
      msg: '',
      greeting: 'Hello World! Welcome to mshk.top',
      GanacheUrl: '172.16.58.58:8545',
      CurrentAccount: null,
      CurrentAccountBalance: null,
      NewContract: null,
      transactionReceipt: null,
      transactionHash: null,
      DonateCoin: 0,
      accountID: 0
    }
  },
  created() {
    this.getList()
    this.getUserList()
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
    this.readAccount()
  },
  methods: {
    checkConnection() {
      var obj = this
      if (this.web3) {
        this.web3.eth.net.isListening()
          .then((result) => {
            if (result) {
              obj.$message({
                message: '連線正常',
                type: 'success',
                duration: 1000
              })
            }
          })
      }
    },
    changeUser() {
      this.readAccount()
    },
    readAccount() {
      var obj = this
      // 讀取帳號列表
      this.web3.eth.getAccounts().then(function(accounts) {
        obj.CurrentAccount = accounts[obj.accountID]
        // obj.msg = '目前讀取到的帳號為：' + obj.CurrentAccount // 取得 Ganache 建立的第一個帳號
        obj.getBalance()
      })
    },
    sendTransaction() {
      var toAddress = 1
      this.web3.eth.getAccounts().then((accounts) => {
        try {
          const transactionObject = {
            from: this.CurrentAccount,
            to: accounts[toAddress],
            value: this.web3.utils.toWei(this.DonateCoin.toString(), 'ether')
          }

          this.web3.eth.sendTransaction(transactionObject)
            .then((result) => {
              this.$message({
                message: '捐款成功',
                type: 'success',
                duration: 1000
              })
              this.transactionReceipt = result
              this.getBalance()
              console.log('Transaction receipt:', this.transactionReceipt)
            })
            .catch((error) => {
              console.error('Error sending transaction:', error)
            })
        } catch (error) {
          console.error('Error sending transaction:', error)
        }
      })
    },
    getTransaction(transactionHash) {
      try {
        this.web3.eth.getTransaction(transactionHash)
          .then((result) => {
            this.transactionReceipt = result
            console.log('Transaction details:', this.transactionReceipt)
          })
      } catch (error) {
        console.error('Error getting transaction:', error)
      }
    },
    getBalance() {
      var obj = this
      try {
        this.web3.eth.getBalance(this.CurrentAccount, function(error, wei) {
          if (!error) {
            obj.CurrentAccountBalance = obj.web3.utils.fromWei(wei, 'ether') + ' ETH'
          }
        })
      } catch (error) {
        console.error('Error getting balance:', error)
      }
    },
    // readContract() { // 讀取合約
    //   var obj = this
    //   // 使用 JSON 接口、合約地址，建立一个新的合約實例，其所有方法和事件都在其json接口對象中定義。
    //   var contract = new Contract(this.ContractABI.abi, obj.NewContract.options.address)
    //   // var contract = new Contract(this.ContractABI.abi, this.ContractAddr)
    //   // 使用合約中的 hello 方法，並傳值到 this.msg 中，輸出到頁面
    //   contract.methods.signContract().call().then(s => {
    //     contract.methods.readSignedContract().call().then(s => {
    //       this.msg = s
    //       console.log(s)
    //     })
    //   })
    // },
    // deployContract() { // 部署合約
    //   var obj = this
    //   if (obj.CurrentAccount == null) {
    //     // obj.msg = '請先讀取帳號'
    //     // ElMessage.error('請先讀取帳號.')
    //     return
    //   }
    //   var outMsg = []
    //   var contract = new Contract(this.ContractABI.abi, this.ContractAddr)
    //   contract.options.data = this.ContractABI.deployedBytecode
    //   contract.deploy({
    //     data: obj.ContractABI.bytecode // 合約的bytecode
    //   })
    //     .send({
    //       from: obj.CurrentAccount, // 交易的發送地址
    //       gas: 1500000, // 交易提供的最大 Gas
    //       gasPrice: '30000000000000' // 用於此交易的 gas 價格
    //     })
    //     .on('error', function(error) { // 如果在發送過程中發生錯誤，則觸發。
    //       // obj.msg = 'error:' + error
    //       // ElMessage.error('系統發生錯誤.'+'error:' + error)
    //     })
    //     .on('transactionHash', function(transactionHash) { // 當交易hash可用時觸發。
    //       console.log(transactionHash)
    //       // ElMessage({
    //       //   message: '捐款成功',
    //       //   type: 'success',
    //       // })
    //     })
    //     .on('receipt', function(receipt) { // 当交易收據可用時觸發。来自合約的收據將沒有屬性，而是具有事件名稱作為key和事件作為屬性的屬性。
    //       outMsg.push('Transaction:' + receipt.transactionHash) // 交易hash
    //       outMsg.push('Contract created:' + receipt.contractAddress) // 合約創建的地址
    //       outMsg.push('Gas usage:' + receipt.gasUsed) // 使用的Gas
    //       outMsg.push('Block number:' + receipt.blockNumber) // block
    //       obj.msg = outMsg.join('<br/ >')
    //       console.log(outMsg.join('<br/ >'))
    //     }).then(function(newContractInstance) {
    //       obj.NewContract = newContractInstance // instance with the new contract address
    //     })
    // },
    getUserList() {
      this.listLoading = true
      this.userList = this.userData
      this.listLoading = false
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
        message: '操作成功',
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
          tempData.timestamp = +new Date(tempData.timestamp)
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
