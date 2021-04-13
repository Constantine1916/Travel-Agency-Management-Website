<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-12 15:35:16
 * @FilePath     : \travel-agency-management-website\src\views\TravelAgencyInfoManage.vue
-->
<template>
  <div class="travelAgencyInfoManage">
    <div class="searchContainer">
      <SearchComponent></SearchComponent>
    </div>
    <div class="table">

    </div>
  </div>
</template>
<script>
import SearchComponent from "../components/SearchComponent"
export default {
  components: {
    SearchComponent
  },
  data() {
    return {
      
    }
  }
}
</script>
<style lang="scss">
.travelAgencyInfoManage {
  .searchContainer {
    padding: 10px;
  }
}
</style>