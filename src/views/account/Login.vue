<template>
  <div class="account">
    <div class="form-wrap">
      <a-form :form="form">
        <a-form-item>
          <label class="color-white">用户名</label>
          <a-input type="text" autocomplete="off"/>
        </a-form-item>
        <a-form-item>
          <label class="color-white">密码</label>
          <a-input type="password" autocomplete="off"/>
        </a-form-item>
        <a-form-item>
          <Captcha />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" @click="doLogin">登录</a-button>
        </a-form-item>
      </a-form>
      <div class="text-center font-size-12">
        <router-link to="/forgot"  class="color-white">忘记密码</router-link> 
        | 
        <router-link to="/register" class="color-white">注册</router-link>

      </div>
    </div>
  </div>
</template>

<script>
import Captcha from '@/components/captcha/Index'
import { login } from '@/api/account'
export default {
  name: "Login",
  components: {
    Captcha
  },
  setup() {

    function doLogin () {
      login({id: "111",name:"2222"}).then((res)=>{
        console.log(res,'res')
      })
    }

    return {
      doLogin
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./style.scss";
</style>
