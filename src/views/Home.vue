<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-05 12:45:58
 * @FilePath     : \travel-agency-management-website\src\views\Home.vue
-->
<template>
  <div class="Home">
    <div class="selectCity">
      {{ cityName }} &nbsp;
      <a-cascader :options="options" @change="changeCity">
        <a href="#">Change city</a>
      </a-cascader>
    </div>
    <div class="cardContainer" style="position: relative;">
      <div v-if="!cardData.length" >
        <div class="words">
          欢迎使用旅行社管理网站！
        </div>
        <img  :src="require('../assets/images/welcome.jpg')" alt="欢迎" class="welcomeImg" />
      </div>
      <template v-for="card in cardData">
        <div class="card">
          <a-card hoverable @click="cardClick(card)">
            <img
              slot="cover"
              :src="require('../assets/images/' + card.img + '.jpg')"
            />
            <a-card-meta :title="card.scenicSpot">
              <template slot="description">
                <span>景区合作旅行社</span>
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </template>
    </div>
    <CardPage
      :visible="visibleCardPage"
      :scenicSpot="scenicSpot"
      :cooperationData="cooperationData"
      @cancel="handleCancel"
    ></CardPage>
  </div>
</template>
<script>
import CardPage from '../components/CardPage'

const options = [
  {
    value: 'sichuan',
    label: '四川',
    children: [
      {
        value: 'chengdu',
        label: '成都'
      },
      {
        value: 'mianyang',
        label: '绵阳'
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京'
      },
      {
        value: 'xuzhou',
        label: '徐州'
      }
    ]
  },
  {
    value: 'yunnan',
    label: '云南',
    children: [
      {
        value: 'kunming',
        label: '昆明'
      }
    ]
  }
]

const cityScenic = [
  {
    name: 'chengdu',
    scenic: [
      {
        index: 1,
        scenicSpot: '锦里',
        img: 'chengduJinLi'
      },
      {
        index: 2,
        scenicSpot: '宽窄巷子',
        img: 'chengduKuanZhai'
      },
      {
        index: 3,
        scenicSpot: '西岭雪山',
        img: 'chengduXiLing'
      }
    ]
  },
  {
    name: 'mianyang',
    scenic: [
      {
        index: 1,
        scenicSpot: '仙海',
        img: 'mianyangXianHai'
      },
      {
        index: 2,
        scenicSpot: '香草园',
        img: 'mianyangXiangCaoYuan'
      }
    ]
  },
  {
    name: 'nanjing',
    scenic: [
      {
        index: 1,
        scenicSpot: '中山陵',
        img: 'nanjingZhongShanLing'
      }
    ]
  },
  {
    name: 'xuzhou',
    scenic: [
      {
        index: 1,
        scenicSpot: '云龙山',
        img: 'xuzhouYunLongShan'
      }
    ]
  },
  {
    name: 'kunming',
    scenic: [
      {
        index: 1,
        scenicSpot: '大理',
        img: 'kunmingDaLi'
      },
      {
        index: 2,
        scenicSpot: '丽江',
        img: 'kunmingLiJiang'
      },
      {
        index: 3,
        scenicSpot: '洱海',
        img: 'kunmingErHai'
      },
      {
        index: 3,
        scenicSpot: '云南野生动物园',
        img: 'kunmingYunNanYeShengDongWuYuan'
      }
    ]
  }
]

export default {
  components: {
    CardPage
  },
  data() {
    return {
      cityName: '请选择城市',
      options,
      cityScenic,
      cardData: [],
      travelAgencyData: [],
      visibleCardPage: false,
      scenicSpot: null, // 存储要打开的景区名称
      cooperationData: [] // 存储景区合作旅行社数据
    }
  },
  mounted() {
    this.getTravelAgencyInfos()
  },
  methods: {
    async getTravelAgencyInfos() {
      await this.$http
        .get('/travelAgencyInfoManage')
        .then(res => {
          if (res.data.flag === 200) {
            // 获取tableData 表格中的数据
            this.travelAgencyData = res.data.infos.map(item => {
              return {
                ...item,
                key: item.id
              }
            })
            console.log('travelAgencyData', this.travelAgencyData)
          } else {
            this.$message.error('获取数据失败，请重试！')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    changeCity(value, selectedOptions) {
      let lastValue = value.pop()
      this.cityName = selectedOptions.map(o => o.label).join(', ')
      this.cityScenic.forEach(item => {
        item.name === lastValue ? (this.cardData = item.scenic) : this.cardData
      })
      console.log('this.cardData', this.cardData)
    },
    cardClick(val) {
      this.scenicSpot = val.scenicSpot
      this.handleShowData(val.index)
      this.visibleCardPage = true
    },
    handleShowData(index) {
      const num = Math.floor(
        this.travelAgencyData.length / this.cardData.length
      )
      this.travelAgencyData.forEach(item => {
        this.cooperationData.push(item.travelAgencyName)
      })
      this.cooperationData = this.cooperationData.slice(
        (index - 1) * num,
        index * num
      )
      console.log('this.cooperationData', this.cooperationData)
    },
    // 处理模态框关闭事件
    handleCancel() {
      this.visibleCardPage = false
      this.cooperationData = [] // 关闭模态框情况合作旅行社的数据
    }
  }
}
</script>
<style lang="scss">
.Home {
  width: 100%;
  height: 100%;
  .selectCity {
    height: 21px;
    width: 100%;
  }
  .cardContainer {
    height: calc(100% - 21px);
    min-height: 343px;
    width: 100%;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .words {
      width: 100%;
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%)
    }
    .welcomeImg {
      width: 100%;
      height: 100%;
    }
    .card {
      flex: 1;
      display: flex;
      justify-content: center;
      .ant-card {
        width: 240px;
        height: 333px;
        .ant-card-cover {
          img {
            height: 250px;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
