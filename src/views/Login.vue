<template>
  <div class="login">
    <div class="header">
      <div class="carousel">
        <a-carousel autoplay dots-class="slick-dots slick-thumb">
          <a slot="customPaging" slot-scope="props">
            <img :src="getImgUrl(props.i)" />
          </a>
          <div v-for="item in 4">
            <img :src="require('../assets/images/login' + item + '.jpg')" />
          </div>
        </a-carousel>
      </div>
    </div>
    <div class="loginForm">
      <div class="title">欢迎使用旅行社管理网站</div>
      <a-form layout="inline" :form="form" @submit="handleSubmit">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: '请输入用户名!' }],
              },
            ]"
            placeholder="用户名"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码!' }],
              },
            ]"
            type="password"
            placeholder="密码"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'horizontal_login' })
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 在开始处禁用提交按钮
      this.form.validateFields()
    })
  },
  methods: {
    // 获取图片
    getImgUrl(i) {
      return require(`../assets/images/login${i + 1}.jpg`)
    },
    // 仅在触发字段后显示错误 username
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('username') && getFieldError('username')
    },
    // 仅在触发字段后显示错误 password
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    // 处理提交逻辑
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // 调接口处理登录逻辑
          this.$http
            .post('/login', values)
            .then(res => {
              if (res.data.flag === 'ok') {
                this.$message.success('登录成功！')
                window.sessionStorage.setItem('user', res.data.user) // 存储user
                this.$store.commit('updateId', res.data.id)
                console.log('id',this.$store.state.id);
                // 跳转到home
                this.$router.push({ path: '/home' })
              } else {
                this.$message.error('用户名或密码错误！')
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  min-height: 520px;
  display: flex;
  flex-wrap: wrap;
  background: #2b4b6b;
  .header {
    width: 100%;
    min-height: 433px;
    flex: 5;
    .carousel {
      height: 100%;
      .ant-carousel .slick-dots {
        height: auto;
      }
      .ant-carousel .slick-slide img {
        border: 5px solid #fff;
        display: block;
        margin: auto;
        max-width: 80%;
      }
      .ant-carousel .slick-thumb {
        bottom: -45px;
      }
      .ant-carousel .slick-thumb li {
        width: 60px;
        height: 45px;
      }
      .ant-carousel .slick-thumb li img {
        width: 100%;
        height: 100%;
        filter: grayscale(100%);
      }
      .ant-carousel .slick-thumb li.slick-active img {
        filter: grayscale(0%);
      }
    }
  }
  .loginForm {
    width: 100%;
    flex: 2;
    .title {
      color: #f5f5f5;
      padding-bottom: 15px;
      font-size: 18px;
    }
  }
}

// 媒体查询 处理.carousel的padding-top
@media screen and (max-height: 480px) {
  .carousel {
    padding-top: 30px;
  }
}
@media screen and (min-height: 481px) {
  .carousel {
    padding-top: 60px;
  }
}
</style>
