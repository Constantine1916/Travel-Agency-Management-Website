<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-12 16:11:59
 * @FilePath     : \travel-agency-management-website\src\components\SearchComponent.vue
-->
<template>
  <div class="searchComponent">
    <div class="nameSearch">
      <a-input placeholder="请输入旅行社名称查询" />
    </div>
    <div class="ownerSearch">
      <a-input placeholder="请输入旅行社法定代表人名称查询" />
    </div>
    <div class="citySearch">
      <div class="title">请选择城市:</div>
      <a-select @change="cityChange">
        <template v-for="city in cityData">
          <a-select-option :value="city.value">{{city.name}}</a-select-option>
        </template>
      </a-select>
    </div>
    <div class="buttonContainer">
      <a-button class="search">查询</a-button>
      <a-button class="clear">重置</a-button>
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
      searchData: [] // emit出去的用户录入数据
    }
  },
  methods: {
    cityChange(value) {
      console.log('value', value);
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
    }
  }
}
</style>