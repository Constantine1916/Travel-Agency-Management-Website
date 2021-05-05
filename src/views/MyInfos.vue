<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-04 22:55:15
 * @FilePath     : \travel-agency-management-website\src\views\MyInfos.vue
-->
<template>
  <div class="myInfos">
    <div class="username item">
      <div class="itemLeft">
        <span
          class="icon iconfont icon-username"
          style="margin: 0 5px 1px 0"
        ></span>
        用户名：
      </div>
      <div class="itemRight">{{infos.username}}</div>
    </div>
    <div class="password item">
      <div class="itemLeft">
        <span
          class="icon iconfont icon-password1"
          style="margin: 0 5px 1px 0"
        ></span>
        密码：
      </div>
      <div class="itemRight" @mouseover="enter()" @mouseout="leave()">{{passwordVal}}</div>
    </div>
    <div class="nickname item">
      <div class="itemLeft">
        <span
          class="icon iconfont icon-zhongguojie"
          style="margin: 0 5px 1px 0"
        ></span>
        昵称：
      </div>
      <div class="itemRight">{{infos.nickname}}</div>
    </div>
    <div class="email item">
      <div class="itemLeft">
        <span
          class="icon iconfont icon-email"
          style="margin: 0 5px 1px 0"
        ></span>
        邮箱：
      </div>
      <div class="itemRight">{{infos.email}}</div>
    </div>
    <div class="phoneNumber item">
      <div class="itemLeft">
        <span
          class="icon iconfont icon-shouji"
          style="margin: 0 5px 1px 0"
        ></span>
        手机号：
      </div>
      <div class="itemRight">{{infos.phoneNumber}}</div>
    </div>
    <div class="home item">
      <div class="itemLeft">
        <span
          class="icon iconfont icon-home1"
          style="margin: 0 5px 1px 0"
        ></span>
        居住地：
      </div>
      <div class="itemRight">{{infos.home}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infos: null,
      passwordVal: '******'
    }
  },
  mounted() {
    this.getUserInfos()
  },
  methods: {
    async getUserInfos() {
      await this.$http
        .get('/getUserInfos?id=' + this.$store.state.id)
        .then(res => {
          if (res.data) {
            this.infos = res.data;
            console.log('infos', this.infos);
          } else {
            this.$message.error('获取数据失败，请重试！')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    enter() {
      this.passwordVal = this.infos.password;
    },
    leave() {
      this.passwordVal = '******';
    }
  }
}
</script>
<style lang="scss">
.myInfos {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
    .itemLeft {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .itemRight {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
}
</style>