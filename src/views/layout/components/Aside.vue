<template>
   <a-menu
      :openKeys="data.openKeys"
      :selectedKeys="data.selectedKeys"
      mode="inline"
      theme="dark"
      :inlineIndent="data.inlineIndent"
      @select="select"
      @openChange="openChange"
    >
      <template v-for="item in router" >
          <!--非隐藏项-->
          <template v-if="!item.hidden">
            <!--无子集-->
            <a-menu-item v-if="!item.children" :key="item.path" >
              <span>
                <SvgIcon className="aside-svg" :iconName="item.meta && item.meta.icon"/> 
                <router-link :to="item.path">{{item.meta && item.meta.title }}</router-link>
              </span>
            </a-menu-item>
            <!--有子集-->
            <Menu v-else :menu="item" :key="item.path"/>
          </template>
      </template>
    </a-menu>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Menu from './aside/Menu'
import SvgIcon from './svgIcon/Index'
export default {
  name: "Aside",
  components: { Menu, SvgIcon },
  setup() {
    const { options } = useRouter()
    const router = options.routes
    //
    let selectedKeys = localStorage.getItem("selectMenu") ? [ localStorage.getItem("selectMenu") ] : []
    let storeOpenKeys = localStorage.getItem("menuOpenKeys")  ?  localStorage.getItem("menuOpenKeys") : []
    let openKeys = Array.isArray(storeOpenKeys) ? storeOpenKeys : [localStorage.getItem("menuOpenKeys")]

    console.log(selectedKeys, openKeys,'E')
    const data = reactive({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      inlineIndent: 0
    })

    // console.log(localStorage.getItem("selectMenu"),'data')
    const select = ({ key, selectedKeys })=> {
      data.selectedKeys = selectedKeys
      localStorage.setItem("selectMenu", key)
    }
    const openChange= (openKeys) => {
      data.openKeys = openKeys
      localStorage.setItem("menuOpenKeys", openKeys)
      data.selectedKeys = []
    }

    const functions = {
      select,
      openChange
    }
    return {
      data,
      router,
      ...functions
    }
  }
}
</script>
<style lang="scss" scoped>
.icon {
  opacity: .6;
  color:#fff;
}
.ant-menu-item-selected {
  .icon{
    opacity: 1;
  }
}
</style>