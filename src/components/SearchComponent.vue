<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-15 17:37:39
 * @FilePath     : \travel-agency-management-website\src\components\SearchComponent.vue
-->
<template>
  <div class="searchComponent">
    <div class="nameSearch">
      <a-input placeholder="请输入旅行社名称查询"  v-model="searchData.travelAgencyName" />
    </div>
    <div class="ownerSearch">
      <a-input placeholder="请输入旅行社法定代表人名称查询" v-model="searchData.ownerName" />
    </div>
    <div class="citySearch">
      <div class="title">请选择城市:</div>
      <a-select v-model="searchData.cityName" @change="cityChange">
        <template v-for="city in cityData">
          <a-select-option :value="city.value">{{city.name}}</a-select-option>
        </template>
      </a-select>
    </div>
    <div class="buttonContainer">
      <a-button class="search" @click="search()" >查询</a-button>
      <a-button class="clear" @click="clear()">重置</a-button>
    </div>
  </div>
</template>
<script>
const cityData = [
  {
    name: '北京',
    value: 'beijing'
  },
  {
    name: '成都',
    value: 'chengdu'
  },
  {
    name: '杭州',
    value: 'hangzhou'
  },
  {
    name: '深圳',
    value: 'shenzhen'
  },
  {
    name: '广东',
    value: 'guangdong'
  },
  {
    name: '绵阳',
    value: 'mianyang'
  },
  {
    name: '武汉',
    value: 'wuhan'
  },
  {
    name: '南京',
    value: 'nanjing'
  }
]

export default {
  data() {
    return {
      cityData, // 城市的数据
      searchData: { // emit出去的用户录入数据
        travelAgencyName: '', // input v-model
        ownerName: '', // input v-model
        cityName: '' // 城市下拉
      }
    }
  },
  methods: {
    // 清除数据
    clear() {
      this.searchData = {
        travelAgencyName: '',
        ownerName: '',
        cityName: ''
      }
      console.log('searchData', this.searchData);
    },
    // emit 出去 searchData
    search() {
      console.log('searchData', this.searchData);
      this.$emit('search', this.searchData)
    },
    // 城市下拉change
    cityChange(value) {
      this.searchData.cityName = value;
    }
  }
}
</script>
<style lang="scss">
.searchComponent {
  width: 100%;
  min-width: 660px;
  display: flex;
  .nameSearch {
    width: 165px;
    margin-right: 15px;
  }
  .ownerSearch {
    width: 235px;
    margin-right: 15px;
  }
  .citySearch {
    display: flex;
    width: 240px;
    margin-right: 15px;
    .title {
      display: flex;
      align-items: center;
      padding-right: 5px;
    }
    .ant-select {
      flex: 1;
    }
  }
  .buttonContainer {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    .search {
      margin-right: 10px;
      background: #007AFF;
      color: white;
    }
  }
}
</style>