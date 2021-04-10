<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-10 22:12:56
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
    <div class="cardContainer">
      <template v-for="card in cardData">
        <div class="card">
          <a-card hoverable>
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
  </div>
</template>
<script>
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
  }
]

const cityScenic = [
  {
    name: 'chengdu',
    scenic: [
      {
        scenicSpot: '锦里',
        img: 'chengduJinLi'
      },
      {
        scenicSpot: '宽窄巷子',
        img: 'chengduKuanZhai'
      },
      {
        scenicSpot: '西岭雪山',
        img: 'chengduXiLing'
      }
    ]
  },
  {
    name: 'mianyang',
    scenic: [
      {
        scenicSpot: '仙海',
        img: 'mianyangXianHai'
      }
    ]
  },
  {
    name: 'nanjing',
    scenic: [
      {
        scenicSpot: '中山陵',
        img: 'nanjingZhongShanLing'
      }
    ]
  },
  {
    name: 'xuzhou',
    scenic: [
      {
        scenicSpot: '云龙山',
        img: 'xuzhouYunLongShan'
      }
    ]
  }
]

export default {
  data() {
    return {
      cityName: '请选择城市',
      options,
      cityScenic,
      cardData: []
    }
  },
  methods: {
    changeCity(value, selectedOptions) {
      let lastValue = value.pop();
      this.cityName = selectedOptions.map(o => o.label).join(', ');
      this.cityScenic.forEach(item => {
        item.name === lastValue ? this.cardData = item.scenic : this.cardData;
      });
      console.log('this.cardData', this.cardData);
    }
  }
}
</script>
<style lang="scss">
.Home {
  width: 100%;
  height: 100%;
  // background-image: url("../assets/images/homeImage.jpg");
  // background-size: cover;
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
