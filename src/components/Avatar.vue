<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-04-09 18:04:02
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 13:45:55
 * @FilePath     : \travel-agency-management-website\src\components\Avatar.vue
-->
<template>
  <div class="avatar">
    <a-dropdown>
      <a-avatar :src="require('../assets/images/header.jpg')"></a-avatar>
      <a-menu slot="overlay">
        <a-menu-item key="0">
          <span @click="accoutManage()">我的信息</span>
        </a-menu-item>
        <a-menu-item key="1">
          <span @click="logout()">安全退出</span>
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
    accoutManage() {
      console.log('accoutManage')
      this.$router.push({ path: `/home/myInfos` }).catch(err => {
        this.$message.warn('您已在当前页面！')
      })
    },
    logout() {
      window.sessionStorage.clear() // 清除session
      this.$router.push({ path: '/login' }) // 跳转到login
    }
  }
}
</script>
<style lang="scss">
.avatar {
  width: 4%;
  height: 100%;
  display: flex;
  align-items: center;
}
</style>