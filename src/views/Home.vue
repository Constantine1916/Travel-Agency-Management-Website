<template>
  <a-layout id="outermostContainer">
    <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="logo">
        <a-icon
          type="camera"
          :style="{ fontSize: '32px' }"
          theme="twoTone"
          two-tone-color="#1890FF"
        />
        <!-- <span>旅行社管理网站</span> -->
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="video-camera" />
          <span class="nav-text">nav 1</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"
            ><a-icon type="mail" /><span>Navigation One</span></span
          >
          <a-menu-item key="2">
            <a-icon type="user" />
            <span class="nav-text">nav2 </span>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'initial' }">
        <router-view />
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style lang="scss">
#outermostContainer {
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
  // layout-sider样式
  .ant-layout-sider {
    background: #0a2656;
    // 第一层菜单样式左对齐
    .ant-menu-root > li {
      text-align: left;
    }
    // 设置第一个item样式
    .ant-menu-root > li:first-child {
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
}
</style>