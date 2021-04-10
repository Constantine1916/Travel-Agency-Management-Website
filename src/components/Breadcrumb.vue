<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-04-09 10:06:14
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-10 17:54:26
 * @FilePath     : \travel-agency-management-website\src\components\Breadcrumb.vue
-->
<template>
  <div class="breadcrumbContainer">
    <a-breadcrumb>
      <template v-for="(item, index) in routes">
        <a-breadcrumb-item :key="'bread_' + index">
          <span>{{ item.name }}</span>
        </a-breadcrumb-item>
      </template>
    </a-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: []
    }
  },
  mounted() {
    this.getBreadInfo();
  },
  methods: {
    getBreadInfo() {
      let breadcrumbArr = this.$route.path.split('/');
      breadcrumbArr.shift();
      breadcrumbArr = breadcrumbArr.map(item => {
        return {
          path: item,
          name: ''
        }
      })
      breadcrumbArr.forEach(element => {
        this.$router.options.routes[2].children.forEach(childElement => {
          childElement.path === element.path ? element.name = childElement.name : element.name;
          childElement.path === '' ? element.name = '首页' : element.name;
        });
      });
      this.routes = breadcrumbArr;
    }
  },
  watch: {
    // 监听路由变化
    "$route.path": {
      immediate: true,
      handler: function () {
        this.getBreadInfo();
      }
    }
  }
}
</script>
<style lang="scss">
  .breadcrumbContainer {
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .ant-breadcrumb {
      padding-left: 20px;
    }
  }
</style>