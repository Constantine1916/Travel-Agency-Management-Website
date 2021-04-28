<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-28 23:46:57
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
    width: 360
  },
  {
    title: '法定代表人',
    dataIndex: 'ownerName',
    key: 'ownerName',
    ellipsis: true,
    width: 260
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
    // width: 300
  }
];

const tableData = [
  {
    key: '1',
    travelAgencyName: '欢天喜地旅行社',
    ownerName: 'Sean Park',
    cityName: '绵阳',
  },
  {
    key: '2',
    travelAgencyName: '走南闯北旅行社',
    ownerName: 'Jhon Constantine',
    cityName: '成都',
  },
  {
    key: '3',
    travelAgencyName: '世界美景旅行社',
    ownerName: 'Sean Garfield',
    cityName: '绵阳',
  },
  {
    key: '4',
    travelAgencyName: '风风光光旅行社',
    ownerName: 'Sofia',
    cityName: '上海',
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