<template>
 <div class="header-wrap">
    <div class="menu-right">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <div class="avatar"><img src="../../../assets/images/avatar.png" /></div>
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu-item">17605048999</div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
            <div class="menu-item">
              <span class="language-item" :class="{'current-language': item.code == currentLanguage}" v-for="item in languageMenu" :key="item.code" @click="changeLanguage(item.code)">{{item.label}}</span>
            </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              {{ $t("header.headerMenu.logout") }}
            
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
 </div>
</template>

<script>
import { useI18n } from 'vue-i18n'

import { reactive, toRefs } from 'vue'

export default {
  name: "Header",
  setup() {
      // 需要导入
      const { locale } = useI18n({ useScope: 'global' })
      //
      const data = reactive({
        languageMenu: [{label:"中文",code: "cn"}, {label:"EN", code: "en"}],
        currentLanguage: 'cn'
      })

      function changeLanguage(code) {
        data.currentLanguage = code
        locale.value = code
      }

      return {
        ...toRefs(data),
        changeLanguage
      }
  }
}
</script>

<style lang="scss" scoped>
.menu-right {
  float:right
}
.avatar {
  right: 10px;
  img{
    width:34px;
    height:34px
  }
}
.menu-item{
  color: #333333;
}

.language-item{
  color: #eeeeee;
  margin-right: 10px;
}
.language-item.current-language{
  color: #333333;
}
</style>