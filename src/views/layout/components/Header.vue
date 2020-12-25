<template>
 <div class="header-wrap">
    <div class="menu-left">
      <svg-icon :iconName="iconName" className="collapsed" @click="changeCollapsed"/>
    </div>
    <div class="menu-right">
      <a-dropdown>
        <div class="avatar">
          <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <img src="../../../assets/images/avatar.png" />
          </a>
        </div>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <div class="menu-item"> <svg-icon iconName="user" className="svg" /> 17605048999</div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
            <div class="menu-item">
              <svg-icon iconName="language" className="svg" /> 
              <span class="language-item" :class="{'current-language': item.code == currentLanguage}" v-for="item in languageMenu" :key="item.code" @click="changeLanguage(item.code)">{{item.label}}</span>
            </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              <svg-icon iconName="logout" className="svg" /> 
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

import { reactive, toRefs, computed } from 'vue'

export default {
  name: "Header",
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
      // 需要导入
      const { locale } = useI18n({ useScope: 'global' })
      //
      const data = reactive({
        languageMenu: [{label:"中文",code: "cn"}, {label:"EN", code: "en"}],
        currentLanguage: 'cn',
      })

      function changeLanguage(code) {
        data.currentLanguage = code
        locale.value = code
      }

      const iconName = computed(()=>{
        return props.collapsed ? "menu_on" : "menu_off"
      })
      //
      function changeCollapsed() {
        context.emit("collapsed")
      }

      return {
        ...toRefs(data),
        iconName,
        changeLanguage,
        changeCollapsed
      }
  }
}
</script>

<style lang="scss" scoped>
.menu-left {
  float: left;
  span {
    margin-left: 16px;
    cursor: pointer;
    .collapsed{
      width: 21px;
      height: 21px;
    }
  }
}
.menu-right {
  float:right
}
.avatar {
  right: 16px;
  position: absolute;
  margin-top: 10px;
  img{
    width:34px;
    height:34px
  }
}
.menu-item{
  color: #333333;
}

.svg {
  width: 16px;
  height: 16px;
  margin-top: 8px;
}

.language-item{
  color: #eeeeee;
  margin-right: 10px;
}
.language-item.current-language{
  color: #333333;
}
</style>