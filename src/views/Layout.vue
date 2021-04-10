<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-04-09 18:15:31
 * @FilePath     : \travel-agency-management-website\src\views\Layout.vue
-->
<template>
  <a-layout id="outermostContainer">
    <a-layout-sider class="sider">
      <div class="logo">
        <a-icon
          type="camera"
          :style="{ fontSize: '32px' }"
          theme="twoTone"
          two-tone-color="#1890FF"
        />
        <span>旅行社管理网站</span>
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="home" @click="goTo($event)">
          <a-icon type="home" />
          <span class="nav-text home">首页</span>
        </a-menu-item>
        <a-menu-item key="accountManage" @click="goTo($event)">
          <a-icon type="user" />
          <span class="nav-text accountManage">账号管理</span>
        </a-menu-item>
        <a-sub-menu key="travelAgencyManage">
          <span slot="title">
            <a-icon type="car" />
            <span>旅行社管理</span>
          </span>
          <a-menu-item key="travelAgencyInfoManage" @click="goTo($event)">
            <span class="nav-text travelAgencyInfoManage">旅行社信息管理</span>
          </a-menu-item>
          <a-menu-item key="financialStatements" @click="goTo($event)">
            <span class="nav-text financialStatements">旅行社财务报表</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="scenicSpotManage">
          <span slot="title">
            <a-icon type="yuque" />
            <span>景区管理</span>
          </span>
          <a-menu-item key="scenicSpotTicket" @click="goTo($event)">
            <span class="nav-text scenicSpotTicket">景区门票设置</span>
          </a-menu-item>
          <a-menu-item key="scenicSpotNumber" @click="goTo($event)">
            <span class="nav-text scenicSpotNumber">查看景区人数</span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="header">
        <Breadcrumb></Breadcrumb>
        <Avatar></Avatar>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        @电子科技大学成都学院
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import Avatar from "../components/Avatar"
import Breadcrumb from "../components/Breadcrumb"

export default {
  components: {
    Avatar,
    Breadcrumb
  },
  data() {
    return {
    }
  },
  methods: {
    // 左侧栏跳转事件
    goTo(e) {
      if (e.key === 'home') {
        this.$router.push({ path: '/home' }).catch(err => {
          this.$message.warn('您已在当前页面！')
        })
      } else {
        this.$router.push({ path: `/home/${e.key}` }).catch(err => {
          this.$message.warn('您已在当前页面！')
        })
      }
    }
  }
}
</script>
<style lang="scss">
#outermostContainer {
  height: 100%;
  overflow-x: hidden;
  // layout-sider样式
  .sider {
    overflow: auto;
    height: 100%;
    position: fixed;
    left: 0;
    background: #0a2656;
    // logo样式设置
    .logo {
      height: 64px;
      padding: 16px 24px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      span {
        height: 16px;
        padding-left: 10px;
        color: #ffffff;
      }
    }
    // 第一层菜单样式左对齐
    .ant-menu-root > li {
      text-align: left;
    }
    // 设置第一个item样式
    .ant-menu-root > .ant-menu-item {
      margin: 0;
      background: #0a2656;
    }
    // submenu样式
    .ant-menu-submenu {
      background: #0a2656;
      box-shadow: none;
      .ant-menu-submenu-title {
        margin: 0;
      }
      // submenu内menu-item的样式
      .ant-menu-item {
        margin: 0;
        background: #091e44;
      }
    }
  }
  // layout
  .ant-layout {
    margin-left: 200px;
    min-width: 500px;
    height: 100%;
    .header {
      height: 56px;
      padding: 0;
      background: #FFF;
      box-shadow: 0px 1px 4px 0px rgba(0,21,41,0.22);
      border-bottom: 1px solid #F0F2F5;
      display: flex;
      flex-wrap: wrap;
    }
    .content {
      padding: 10px;
      overflow: auto;
      width: 100%;
      height: calc(100% - 56px - 43px);
      background: #FFF;
    }
    .footer {
      height: 43px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F9FAFA;
    }
  }
}
</style>