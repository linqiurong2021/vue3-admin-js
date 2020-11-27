<template>
  <div class="account">
    <div class="form-wrap">
      <a-form :model="form" @finish="register" :rules="rules">
        <a-form-item name="username">
          <label class="color-white">用户名</label>
          <a-input type="text" v-model:value="form.username" autocomplete="off"/>
        </a-form-item>
        <a-form-item name="password">
          <label class="color-white">密码</label>
          <a-input type="password" v-model:value="form.password" autocomplete="off"/>
        </a-form-item>
       <a-form-item name="confirm">
          <label class="color-white">确认密码</label>
          <a-input type="password" v-model:value="form.confirm" autocomplete="off"/>
        </a-form-item>
        <a-form-item name="code">
          <label class="color-white">校验码</label>
         <a-row :gutter="8">
          <a-col :span="14"><a-input  v-model:value="form.code" type="password" autocomplete="off"/></a-col>
          <a-col :span="10"><a-button type="primary" block @click="getCode">获取校验码</a-button></a-col>
        </a-row>
        </a-form-item>
        <a-form-item>
          <Captcha />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" :span="12" >注册</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center font-size-12">
        <a href="#" class="color-white">忘记密码</a> | <router-link to="/login">登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Captcha from '@/components/Captcha'
import { checkPhone } from '@/validators/register'
import { reactive, toRefs } from 'vue';
export default {
  name: "Login",
  components: {
    Captcha
  },
  setup() {
    const formConfig = reactive({
      // 表单字段
      form: {
        username: "",
        password: "",
        confirm: "",
        code: ""
      },
      // 表单校验规则
      rules: {
        username: [{ validator: checkPhone, trigger: 'change' }]
      }
    })
    const data = toRefs(formConfig)

    // 注册
    const register = () => {
      console.log('register')
    }
    // 获取校验码
    const getCode = () => {
      console.log('getCode')
    }
    return {
      ...data,
      register,
      getCode
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
