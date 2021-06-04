<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-05-02 21:36:25
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 23:26:12
 * @FilePath     : \travel-agency-management-website\src\components\CardPage.vue
-->
<template>
  <div>
    <a-modal
      centered
      destroyOnClose
      dialogClass="cardPage"
      title="景区合作旅行社"
      :width="360"
      :visible="visible"
      :footer="null"
      @cancel="handleCancel"
    >
      <a-list bordered :data-source="cooperationData">
      <a-list-item slot="renderItem" slot-scope="item, index">
        {{ item }}
      </a-list-item>
      <div slot="header" style="font-weight: 600;">
        {{scenicSpot}}合作旅行社：
      </div>
    </a-list>
    </a-modal>
  </div>
</template>

<script>

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

export default {
  name: 'CardPage',
  props: {
    scenicSpot: {
      type: String
    },
    visible: {
      type: Boolean,
      default: false
    },
    cooperationData: {
      type: Array
    }
  },
  data() {
    return {
      data
    }
  },
  methods: {
    handleCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss">
.cardPage {
 .ant-modal-body {
   max-height: 360px;
   overflow: auto;
 }
}
</style>
