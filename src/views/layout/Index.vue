<template>
<a-layout id="layout-main">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <Aside />
      
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <Header />
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
      collapsed: false,
    })
    return {
      ...toRefs(data)
    }
  }
 }
</script>

<style scoped>
#layout-main {
  height: 100vh;
}
</style>