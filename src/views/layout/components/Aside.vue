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
            <!--只有一个字集-->
            <a-menu-item v-if="hasOnlyChildren(item)" :key="item.path" >
              <div>
                <svg-icon class="anticon" className="aside-svg" :iconName="item.children[0].meta && item.children[0].meta.icon"/> 
                <span><router-link :to="item.children[0].path">{{item.children[0].meta && item.children[0].meta.title }}</router-link></span>  
              </div>
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
export default {
  name: "Aside",
  components: { Menu },
  setup() {
    const { options } = useRouter()
    const router = options.routes
    //
    let selectedKeys = localStorage.getItem("selectMenu") ? [ localStorage.getItem("selectMenu") ] : []
    let storeOpenKeys = localStorage.getItem("menuOpenKeys")  ?  localStorage.getItem("menuOpenKeys") : []
    let openKeys = Array.isArray(storeOpenKeys) ? storeOpenKeys : [localStorage.getItem("menuOpenKeys")]

    const data = reactive({
      selectedKeys: selectedKeys,
      openKeys: openKeys,
      inlineIndent: 8
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
    // 只有一个子节点
    const hasOnlyChildren = (item) => {
      // 无子集
      if (!item.children) {
        return false
      }
      // 过滤隐藏的子级路由
      const routers = item.children.filter(item => item.hidden ? false : true);
      // 判断最终结果 
      if(routers.length === 1) { return true; }
      return false;
    }

    const functions = {
      select,
      openChange,
      hasOnlyChildren
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
.ant-menu-item .anticon, .ant-menu-submenu-title .anticon{
  margin-right: 5px;
}
</style>