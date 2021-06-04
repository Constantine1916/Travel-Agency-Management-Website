<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-04 23:58:58
 * @FilePath     : \travel-agency-management-website\src\views\ScenicSpotNumber.vue
-->
<template>
  <div class="scenicSpotNumber">
    <div id="histogramDiv"></div>
  </div>
</template>
<script>
const barData = {
  xData: [
    '锦里',
    '宽窄巷子',
    '西岭雪山',
    '仙海',
    '香草园',
    '中山陵',
    '云龙山',
    '大理',
    '丽江',
    '洱海',
    '云南野生动物园'
  ],
  yData: [1983, 1311, 773, 503, 588, 393, 134, 590, 808, 1313, 85]
}

export default {
  data() {
    return {
      barData
    }
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      let echartsDiv = this.$echarts.init(
        document.getElementById('histogramDiv')
      )

      echartsDiv.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: [
          {
            top: 100,
            bottom: 101
          },
          {
            height: 60,
            bottom: 40
          }
        ],
        xAxis: [
          {
            type: 'category',
            data: this.barData.xData,
            gridIndex: 0,
            axisLabel: {
              color: '#333'
            },
            axisLine: {
              lineStyle: {
                color: '#e7e7e7'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#e7e7e7'
              }
            },
            zlevel: 2
          },
          {
            type: 'category',
            gridIndex: 1,
            axisLine: {
              show: false
            },
            zlevel: 1
          }
        ],
        yAxis: [
          {
            type: 'value',
            gridIndex: 0,
            axisLabel: {
              color: '#333'
            },
            splitLine: {
              lineStyle: {
                type: 'dashed'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisTick: {
              lineStyle: {
                color: '#ccc'
              }
            }
          },
          {
            type: 'value',
            gridIndex: 1,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            data: this.barData.yData,
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#555'
              }
            },
            itemStyle: {
              normal: {
                color: params => {
                  let colors = [
                    '#4150d8',
                    '#28bf7e',
                    '#ed7c2f',
                    '#f2a93b',
                    '#f9cf36',
                    '#4a5bdc',
                    '#4cd698',
                    '#f4914e',
                    '#fcb75b',
                    '#ffe180',
                    '#b6c2ff',
                    '#96edc1'
                  ]
                  return colors[params.dataIndex]
                }
              }
            },
            xAxisIndex: 0,
            yAxisIndex: 0
          },
          {
            data: [
              {
                name: '成都市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '27.2727%',
            itemStyle: {
              normal: {
                color: 'rgba(134,176,237, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '绵阳市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '18.1818%',
            itemStyle: {
              normal: {
                color: 'rgba(40,191,126, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '南京市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '9.0909%',
            itemStyle: {
              normal: {
                color: 'rgba(237,124,47, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '徐州市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barGap: 0,
            barWidth: '9.0909%',
            itemStyle: {
              normal: {
                color: 'rgba(242,169,59, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          },
          {
            data: [
              {
                name: '昆明市',
                value: 1
              }
            ],
            label: {
              show: true,
              position: 'inside',
              formatter: '{b}',
              offset: [0, 10],
              textStyle: {
                color: '#777'
              }
            },
            type: 'bar',
            barCategoryGap: 0,
            barGap: 0,
            barWidth: '36.3636%',
            itemStyle: {
              normal: {
                color: 'rgba(249,207,54, .5)'
              }
            },
            xAxisIndex: 1,
            yAxisIndex: 1
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss">
.scenicSpotNumber {
  height: 100%;
  width: 100%;
  #histogramDiv {
    height: 100%;
    width: 100%;
  }
}
</style>