<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-05 14:31:46
 * @FilePath     : \travel-agency-management-website\src\views\ScenicSpotTicket.vue
-->
<template>
  <div class="ScenicSpotTicket">
    <template v-for="item in ScenicSpotTicketData">
      <div class="item">
        <div class="scenicSpot itemRow" :title="item.scenicSpot">{{ item.scenicSpot }}</div>
        <div class="beforeTicket itemRow" :title="`之前票价： ${item.beforeTicket} RMB`" :ref="`beforeTicket${item.id}`">
          之前票价： {{ item.beforeTicket }} RMB
        </div>
        <div class="presentTicket itemRow" :title="`目前票价： ${item.presentTicket } RMB`" :ref="`presentTicket${item.id}`">
          目前票价： {{ item.presentTicket }} RMB
        </div>
        <div class="inpout itemRow">
          <div title="设置景区门票价格：">设置景区门票价格： </div>
          <a-input-number :min="0" :default-value="item.presentTicket" @change="onChange($event,item.id)" />
        </div>
        <div class="quota itemRow">
          <a-card v-if="item.type === 'up'">
            <a-statistic
              title="上升"
              :value="item.percentage"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <a-icon type="arrow-up" />
              </template>
            </a-statistic>
          </a-card>
          <a-card v-else>
            <a-statistic
              title="下降"
              :value="item.percentage"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <a-icon type="arrow-down" />
              </template>
            </a-statistic>
          </a-card>
        </div>
        <div class="button itemRow">
          <a-button @click="submit(item.id, item.presentTicket)"><a-icon type="check" /></a-button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
const ScenicSpotTicketData = [
  {
    id: 1,
    scenicSpot: '锦里',
    beforeTicket: 30,
    presentTicket: 35,
  },
  {
    id: 2,
    scenicSpot: '宽窄巷子',
    beforeTicket: 20,
    presentTicket: 30
  },
  {
    id: 3,
    scenicSpot: '西岭雪山',
    beforeTicket: 100,
    presentTicket: 90
  },
  {
    id: 4,
    scenicSpot: '仙海',
    beforeTicket: 80,
    presentTicket: 70
  }
]

export default {
  data() {
    return {
      ScenicSpotTicketData // 景区门票数据信息
    }
  },
  created() {
    this.ScenicSpotTicketData = this.ScenicSpotTicketData.map(item => {
      return {
        ...item,
        type: item.beforeTicket < item.presentTicket ? 'up' : 'down',
        percentage: item.beforeTicket < item.presentTicket ? (item.presentTicket - item.beforeTicket) * 100 / item.beforeTicket : (item.beforeTicket - item.presentTicket) * 100 / item.beforeTicket
      }
    })
  },
  methods: {
    onChange(value, id) {
    },
    submit(id, present) {
      let number = document.getElementsByClassName('ant-input-number-input')[id - 1].value;
      
      this.$refs['beforeTicket' + id][0].innerHTML = `之前票价： ${present} RMB`
      this.$refs['presentTicket' + id][0].innerHTML = `目前票价： ${number} RMB`
      
      console.log(this.$refs['beforeTicket' + id]);
      console.log(this.$refs['presentTicket' + id]);

      console.log('id', id);
      console.log('number', number);
    }
  }
}
</script>
<style lang="scss">
.ScenicSpotTicket {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .item {
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.2);
    height: 280px;
    min-height: 280px;
    width: calc(25% - 20px);
    min-width: 240px;
    box-sizing: border-box;
    margin: 10px;
    .itemRow {
      width: 100%;
      padding-bottom: 10px;
      &:first-child {
        padding-top: 10px;
        font-weight: 600;
      }
    }
    .inpout {
      display: flex;
      align-items: center;
      > div {
        padding-left: 15px;
        padding-right: 5px;
      }
      .ant-input-number {
        flex: 1;
        margin-right: 15px;
      }
    }
    .quota {
      .ant-card {
        border-style: dashed;
        .ant-card-body {
          padding: 10px;
        }
      }
    }
  }
}
</style>