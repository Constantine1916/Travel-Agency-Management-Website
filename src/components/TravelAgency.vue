<!--
 * @Description  : 
 * @Author       : sunjr
 * @Date         : 2021-05-02 21:36:25
 * @LastEditors  : sunjr
 * @LastEditTime : 2021-05-03 00:44:00
 * @FilePath     : \travel-agency-management-website\src\components\TravelAgency.vue
-->
<template>
  <div>
    <a-modal
      centered
      destroyOnClose
      dialogClass="handleTravelAgencyInfos"
      :width="560"
      :title="usage"
      :maskClosable="false"
      :visible="visible"
      :footer="null"
      @cancel="handleCancel"
    >
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="旅行社名称">
          <a-input
            v-decorator="[
              'travelAgencyName',
              {
                initialValue:
                  usage === '修改旅行社信息' ? record.travelAgencyName : '',
                rules: [{ required: true, message: '请输入旅行社名称！' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="法定代表人">
          <a-input
            v-decorator="[
              'ownerName',
              {
                initialValue:
                  usage === '修改旅行社信息' ? record.ownerName : '',
                rules: [
                  { required: true, message: '请输入旅行社的法定代表人！' },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="旅行社所属地区">
          <a-input
            v-decorator="[
              'cityName',
              {
                initialValue: usage === '修改旅行社信息' ? record.cityName : '',
                rules: [{ required: true, message: '请输入旅行社所属地区！' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit"> 提交 </a-button>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'travelAgency',
  props: {
    usage: {
      type: String
    },
    record: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        // 如果有错就return
        if (err) return

        console.log('Received values of form: ', values)
        // 没错就判断usage，依据usage执行相应的新增修改逻辑
        if (this.usage === '新增旅行社信息') {
          this.$http
            .post('/addTravelAgencyInfo', values)
            .then(res => {
              // 调接口新增数据
              if (res.data === 'success') {
                this.$message.success('新增数据成功！')
                this.$emit('refreshTable') // 新增成功后 刷新列表
                this.$emit('cancel') // 关闭模态框
              } else {
                this.$message.error('新增数据失败，请重试！')
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          // 给values添加上id然后调接口
          values = {
            ...values,
            id: this.record.id
          }
          // 调接口修改数据
          this.$http
            .post('/editTravelAgencyInfo', values)
            .then(res => {
              if (res.data === 'success') {
                this.$message.success('修改数据成功！')
                this.$emit('refreshTable') // 修改成功后 刷新列表
                this.$emit('cancel') // 关闭模态框
              } else {
                this.$message.error('修改数据失败，请重试！')
              }
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    },
    handleCancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style lang="scss">
.handleTravelAgencyInfos {
  .ant-form {
    height: 100%;
    width: 100%;
    .ant-form-item {
      &:last-child {
        margin-bottom: 0;
        > div {
          margin-left: 0px;
          .ant-form-item-control {
            text-align: center;
          }
        }
      }
    }
    .ant-row {
      display: flex;
      .ant-form-item-label {
        width: 123px;
      }
      .ant-form-item-control-wrapper {
        flex: 1;
      }
    }
  }
}
</style>
