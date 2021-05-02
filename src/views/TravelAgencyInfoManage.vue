<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 00:47:04
 * @FilePath     : \travel-agency-management-website\src\views\TravelAgencyInfoManage.vue
-->
<template>
  <div class="travelAgencyInfoManage">
    <div class="searchContainer">
      <SearchComponent @search="handleSearch"></SearchComponent>
    </div>
    <div class="table">
      <a-button class="create" title="新增" @click="handleCreate()">
        <span class="icon iconfont icon-xinzeng"></span>
      </a-button>
      <a-table :columns="tableColumns" :data-source="tableData">
        <div slot="operation" slot-scope="text, record">
          <a-button
            class="tableButton modify"
            title="修改"
            @click="handleModify(record)"
          >
            <span class="icon iconfont icon-xiugai"></span>
          </a-button>
          <a-button
            class="tableButton delete"
            title="删除"
            @click="handleDelete(record.id)"
          >
            <span class="icon iconfont icon-shanchu"></span>
          </a-button>
        </div>
      </a-table>
    </div>
    <TravelAgency
      :usage="usage"
      :record="record"
      :visible="visibleTravelAgency"
      @cancel="handleCancel"
      @refreshTable="getTravelAgencyInfos"
    ></TravelAgency>
  </div>
</template>
<script>
import SearchComponent from '../components/SearchComponent'
import TravelAgency from '../components/TravelAgency'

const tableColumns = [
  {
    title: '旅行社名称',
    dataIndex: 'travelAgencyName',
    key: 'travelAgencyName',
    ellipsis: true,
    width: 330
  },
  {
    title: '法定代表人',
    dataIndex: 'ownerName',
    key: 'ownerName',
    ellipsis: true,
    width: 230
  },
  {
    title: '旅行社所属地区',
    dataIndex: 'cityName',
    key: 'cityName',
    ellipsis: true,
    width: 270
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    width: 270,
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  components: {
    SearchComponent,
    TravelAgency
  },
  data() {
    return {
      tableColumns,
      tableData: [],
      visibleTravelAgency: false,
      record: null,
      usage: ''
    }
  },
  mounted() {
    this.getTravelAgencyInfos()
  },
  methods: {
    // 获取列表数据
    async getTravelAgencyInfos() {
      await this.$http
        .get('/home/travelAgencyInfoManage')
        .then(res => {
          if (res.data.flag === 200) {
            this.tableData = res.data.infos.map(item => {
              return {
                ...item,
                key: item.id
              }
            })
          } else {
            this.$message.error('获取数据失败，请重试！')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 查询
    handleSearch(val) {
      console.log('val', val)
    },
    // 新增
    handleCreate() {
      this.visibleTravelAgency = true
      this.usage = '新增旅行社信息'
    },
    // 修改
    handleModify(record) {
      this.visibleTravelAgency = true
      this.record = record
      this.usage = '修改旅行社信息'
    },
    // 删除
    handleDelete(id) {
      this.$http
        .delete('/deleteTravelAgencyInfo?id=' + id)
        .then(res => {
          // 调接口删除数据
          if (res.data === 'success') {
            this.$message.success('删除数据成功！')
            this.getTravelAgencyInfos() // 调接口重新刷新表格数据
          } else {
            this.$message.error('删除数据失败，请重试！')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 处理模态框关闭事件
    handleCancel() {
      this.visibleTravelAgency = false
    }
  }
}
</script>
<style lang="scss">
.travelAgencyInfoManage {
  height: 100%;
  .searchContainer {
    height: 52px;
    padding: 10px;
  }
  .table {
    height: calc(100% - 52px);
    min-height: 200px;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .create {
      height: 32px;
      width: 46px;
      margin-bottom: 10px;
      background: #007aff;
      color: white;
    }
    .ant-table-wrapper {
      width: 100%;
      height: calc(100% - 42px);
    }
    .tableButton {
      height: 32px;
      width: 46px;
      margin-right: 8px;
      padding: 0;
    }
    .modify {
      background: #f2a73b;
    }
    .delete {
      background: rgb(247, 64, 64);
    }
  }
}
</style>