<template>
<a-layout id="layout-main">
    <a-layout-sider :collapsed="collapsed" :trigger="null" collapsible>
      <Aside :collapsed="collapsed"/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header :collapsed="collapsed" @collapsed="handleCollapsed"/>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Aside from './components/Aside'
import Main from './components/Main'
import Header from './components/Header'
import { reactive, toRefs } from 'vue';
 export default {
  name:"Layout",
  components: {
    Aside, Main, Header
  },
  setup() {
    const data = reactive({
      selectedKeys: ['1'],
      collapsed: JSON.parse(localStorage.getItem("collapsed")) ,
    })
    // 切换菜单收缩与展开
    const handleCollapsed = () => {
      let collapsed = !data.collapsed
      data.collapsed = collapsed
      localStorage.setItem("collapsed", JSON.stringify(collapsed))
    }
    return {
      ...toRefs(data),
      handleCollapsed
    }
  }
 }
</script>

<style scoped>
#layout-main {
  height: 100vh;
}
</style>