<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

import Web3 from 'web3'
// import waves from '@/directive/waves' // waves directive
// import { parseTime } from '@/utils'
import userData from '@/data/user.json'
import groupData from '@/data/group.json'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      GanacheUrl: '172.16.58.168:8545',
      groupList: [],
      userData: userData,
      groupData: groupData,
      groupBalance: null
    }
  },
  mounted() {
    this.$nextTick(async() => {
      try {
        await this.fetchGroupBalance(this)
        this.initChart()
      } catch (error) {
        console.error(error)
      }
    })

    if (typeof this.web3 !== 'undefined') {
      // web3.currentProvider當前提供者
      this.web3 = new Web3(this.web3.currentProvider)
    } else {
      // set the provider you want from Web3.providers
      this.web3 = new Web3('ws://' + this.GanacheUrl)
    }
    this.readAccount()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.getTransactionList()
      this.getGroupList()
      // console.log(this.groupBalance)
      // console.log(JSON.stringify(this.groupBalance))
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: this.groupList
        },
        series: [
          {
            name: '捐款單位',
            type: 'pie',
            roseType: 'radius',
            radius: [15, 95],
            center: ['50%', '38%'],
            data: this.groupBalance,
            animationEasing: 'cubicInOut',
            animationDuration: 2600
          }
        ]
      })
    },
    getGroupList() {
      this.groupList = []
      // console.log(this.groupData)
      for (let i = 0; i < this.groupData.length; i++) {
        const groupName = this.groupData[i].groupName
        this.groupList.push(groupName)
      }
      // console.log(this.groupList)
    },
    getTransactionList() {
      const obj = this
      this.transactionList = []
      this.web3.eth.getTransactionFromBlock('latest')
        .then(result => {
          const count = result.blockNumber
          // Retrieve transactions
          for (let i = count; i >= 0; i--) {
            // console.log(i);
            obj.web3.eth.getBlock(i)
              .then(blockData => {
                const blockHash = blockData.transactions[0]
                if (blockHash) {
                  obj.web3.eth.getTransaction(blockHash)
                    .then(tx => {
                    // if (tx && tx.from === obj.CurrentAccount) {
                      // tx.transact_datatime = obj.timeConverter(blockData.timestamp)
                      // tx.group = obj.getGroupName(tx['to'])
                      tx.eth = obj.web3.utils.fromWei(tx.value.toString(), 'ether')
                      if (!obj.transactionList[tx.from]) {
                        obj.transactionList[tx.from] = []
                      }
                      obj.transactionList[tx.from].push(tx)
                      // console.log(obj.transactionList)
                    // }
                    })
                    .catch(error => {
                      console.error(`Error retrieving transaction ${i}:`, error)
                    })
                }
              })
          }
        })
        .catch(error => {
          console.error('Error retrieving transaction count:', error)
        })
    },
    readAccount() {
      var obj = this
      // 讀取帳號列表
      this.web3.eth.getAccounts().then(function(accounts) {
        obj.accountList = accounts
      })
    },
    async fetchGroupBalance() {
      const accounts = await this.web3.eth.getAccounts()
      const groupBalance = []

      for (let i = 5; i < accounts.length; i++) {
        const accountHash = accounts[i]
        try {
          const wei = await this.web3.eth.getBalance(accountHash)
          groupBalance.push({
            value: parseInt(this.web3.utils.fromWei(wei, 'ether')),
            name: this.getGroupName(accountHash)
          })
        } catch (error) {
          console.error(error)
        }
      }

      // console.log(groupBalance);
      this.groupBalance = groupBalance
      // return "OK";
    },
    getGroupName(groupHash) {
      const groupID = this.accountList.indexOf(groupHash)
      for (let i = 0; i < this.groupData.length; i++) {
        const obj = this.groupData[i]
        // console.log(obj.groupID);
        if (obj.groupID === groupID) {
          const groupName = obj.groupName
          // console.log(groupName)
          return groupName
        }
      }
    }
  }
}
</script>
