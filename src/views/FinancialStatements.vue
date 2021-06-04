<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-04 01:05:27
 * @FilePath     : \travel-agency-management-website\src\views\FinancialStatements.vue
-->
<template>
  <div class="financialStatements">
    <div class="left">
      <a-menu mode="vertical" @click="handleClick">
        <template v-for="(item, index) in financialData">
          <a-menu-item :key="index">
            <a-icon type="mail" />
            {{ item.name }}
          </a-menu-item>
        </template>
      </a-menu>
    </div>
    <div class="right">
      <div v-if="selectedFinancialData" id="echartsDiv"></div>
      <a-empty v-if="!selectedFinancialData" :image="simpleImage" />
    </div>
  </div>
</template>
<script>
import { Empty } from 'ant-design-vue';

const financialData = [
  {
    name: '欢天喜地旅行社',
    springAmount: 357600,
    summerAmount: 430990,
    autumnAmount: 590010,
    winterAmount: 988100
  },
  {
    name: '走南闯北旅行社',
    springAmount: 457600,
    summerAmount: 893990,
    autumnAmount: 311010,
    winterAmount: 99100
  },
  {
    name: '世界美景旅行社',
    springAmount: 654100,
    summerAmount: 786900,
    autumnAmount: 1303000,
    winterAmount: 199100
  },
  {
    name: '开开心心旅行社',
    springAmount: 133100,
    summerAmount: 413100,
    autumnAmount: 658600,
    winterAmount: 1198103
  },
  {
    name: '飘向北方旅行社',
    springAmount: 70100,
    summerAmount: 313100,
    autumnAmount: 132600,
    winterAmount: 198103
  }
]

export default {
  data() {
    return {
      financialData,
      selectedFinancialData: null, // 选择的旅行社财务报表
      simpleImage: null
    }
  },
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
  methods: {
    // 初始化echarts图形
    initEcharts() {
      let echartsDiv = this.$echarts.init(document.getElementById('echartsDiv'))
      echartsDiv.setOption({
        title: {
          text: '旅行社财务报表',
          subtext: '纯属虚构',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.selectedFinancialData.springAmount, name: '春季' },
              { value: this.selectedFinancialData.summerAmount, name: '夏季' },
              { value: this.selectedFinancialData.autumnAmount, name: '秋季' },
              { value: this.selectedFinancialData.winterAmount, name: '冬季' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    // 处理左侧menu的点击事件
    handleClick(e) {
      this.selectedFinancialData = this.financialData[e.key]
      this.$nextTick(function(){
        this.initEcharts()
      });
    }
  }
}
</script>
<style lang="scss">
.financialStatements {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  .left {
    width: 35%;
    height: 100%;
    .ant-menu {
      height: 100%;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    height: 100%;
    #echartsDiv {
      width: 100%;
      height: 100%;
    }
  }
}
</style>