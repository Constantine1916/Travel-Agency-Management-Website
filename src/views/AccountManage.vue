<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-03-12 12:33:22
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 12:46:26
 * @FilePath     : \travel-agency-management-website\src\views\AccountManage.vue
-->
<template>
  <div class="accoutForm">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item v-bind="formItemLayout" label="邮箱">
        <a-input
          v-decorator="[
            'email',
            {
              rules: [
                {
                  type: 'email',
                  message: '输入的是无效邮箱!',
                },
                {
                  required: true,
                  message: '请输入邮箱!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="修改密码" has-feedback>
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入密码!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            },
          ]"
          type="password"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="确认密码" has-feedback>
        <a-input
          v-decorator="[
            'confirm',
            {
              rules: [
                {
                  required: true,
                  message: '请再次输入密码!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            },
          ]"
          type="password"
          @blur="handleConfirmBlur"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout">
        <span slot="label">
          用户名&nbsp;
          <a-tooltip title="您想要别人怎么称呼您?">
            <a-icon type="question-circle-o" />
          </a-tooltip>
        </span>
        <a-input
          v-decorator="[
            'nickname',
            {
              rules: [
                { required: true, message: '请输入昵称!', whitespace: true },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="居住地">
        <a-cascader
          v-decorator="[
            'home',
            {
              initialValue: ['zhejiang', 'hangzhou', 'xihu'],
              rules: [
                { type: 'array', required: true, message: '请选择您的居住地!' },
              ],
            },
          ]"
          :options="residences"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="手机号码">
        <a-input
          v-decorator="[
            'phoneNumber',
            {
              rules: [{ required: true, message: '请输入手机号!' }],
            },
          ]"
          style="width: 100%"
        >
          <a-select
            slot="addonBefore"
            v-decorator="['prefix', { initialValue: '86' }]"
            style="width: 70px"
          >
            <a-select-option value="86"> +86 </a-select-option>
            <a-select-option value="87"> +87 </a-select-option>
          </a-select>
        </a-input>
      </a-form-item>
      <a-form-item v-bind="tailFormItemLayout">
        <a-button type="primary" html-type="submit"> 修改 </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
const residences = [
  {
    value: '四川',
    label: '四川',
    children: [
      {
        value: '成都',
        label: '成都'
      },
      {
        value: '绵阳',
        label: '绵阳'
      },
      {
        value: '德阳',
        label: '德阳'
      },
      {
        value: '攀枝花',
        label: '攀枝花'
      },
      {
        value: '广元',
        label: '广元'
      },
      {
        value: '巴中',
        label: '巴中'
      },
      {
        value: '南充',
        label: '南充'
      },
      {
        value: '广安',
        label: '广安'
      }
    ]
  },
  {
    value: '浙江',
    label: '浙江',
    children: [
      {
        value: '杭州',
        label: '杭州'
      },
      {
        value: '宁波',
        label: '宁波'
      }
    ]
  },
  {
    value: '江苏',
    label: '江苏',
    children: [
      {
        value: '南京',
        label: '南京'
      },
      {
        value: '徐州',
        label: '徐州'
      }
    ]
  },
  {
    value: '山东',
    label: '山东',
    children: [
      {
        value: '济南',
        label: '济南'
      },
      {
        value: '聊城',
        label: '聊城'
      }
    ]
  },
  {
    value: '广东',
    label: '广东',
    children: [
      {
        value: '深圳',
        label: '深圳'
      },
      {
        value: '广州',
        label: '广州'
      }
    ]
  }
]

export default {
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          values.home = values.home[1] // 获取城市名称即可
          values.id = this.$store.state.id; // 传入当前用户id 用作后端修改数据时的标识
          // 调接口修改用户信息
          this.$http
            .post('/editUser', values)
            .then(res => {
              if (res.data === 'success') {
                this.$message.success('修改账号信息成功！')
              } else {
                this.$message.error('修改账号信息失败，请重试！')
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        callback('两次输入的密码不一致!')
      } else {
        callback()
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      callback()
    }
  }
}
</script>
<style lang="scss">
.accoutForm {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .ant-form {
    width: 50%;
    .ant-form-item {
      &:last-child {
        > div {
          margin-left: 0px;
        }
      }
    }
    .ant-row {
      display: flex;
      .ant-form-item-label {
        width: 100px;
      }
      .ant-form-item-control-wrapper {
        flex: 1;
      }
    }
  }
}
</style>