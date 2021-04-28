<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-16 17:53:21
 * @FilePath     : \travel-agency-management-website\src\views\TravelAgencyInfoManage.vue
-->
<template>
  <div class="travelAgencyInfoManage">
    <div class="searchContainer">
      <SearchComponent @search="handleSearch"></SearchComponent>
    </div>
    <div class="table">
      <a-table :columns="tableColumns" :data-source="tableData">
      </a-table>
    </div>
  </div>
</template>
<script>
import SearchComponent from "../components/SearchComponent"

const tableColumns = [
  {
    title: '旅行社名称',
    dataIndex: 'travelAgencyName',
    key: 'travelAgencyName',
    ellipsis: true,
    width: 500
  },
  {
    title: '法定代表人',
    dataIndex: 'ownerName',
    key: 'ownerName',
    ellipsis: true,
    width: 300
  },
  {
    title: '旅行社所属地区',
    dataIndex: 'cityName',
    key: 'cityName',
    ellipsis: true,
    width: 300
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
  }
];

const tableData = [
  {
    key: '1',
    travelAgencyName: 'John Brown',
    age: 32,
    ownerName: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    travelAgencyName: 'Jim Green',
    age: 42,
    ownerName: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    travelAgencyName: 'Joe Black',
    age: 32,
    ownerName: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  components: {
    SearchComponent
  },
  data() {
    return {
      tableColumns,
      tableData,
    }
  },
  methods: {
    handleSearch(val) {
      console.log('val', val);
    }
  }
}
</script>
<style lang="scss">
.travelAgencyInfoManage {
  .searchContainer {
    padding: 10px;
  }
  .table {
    width: 100%;
    padding: 10px;
  }
}
</style>