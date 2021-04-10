<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-04-09 18:04:02
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-10 18:15:06
 * @FilePath     : \travel-agency-management-website\src\components\Avatar.vue
-->
<template>
  <div class="avatar">
    <a-dropdown>
      <a-avatar :src="require('../assets/images/header.jpg')"></a-avatar>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <span @click="logout()">退出</span>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      // 跳转到login
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
<style lang="scss">
.avatar {
  width: 5%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>