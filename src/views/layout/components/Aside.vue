<template>
   <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in router" >
          <template v-if="!item.hidden">
            <a-menu-item v-if="!item.children" :key="item.path">
              <span>{{item.meta && item.meta.title }}</span>
            </a-menu-item>
            <a-sub-menu v-else :key="item.path">
              <template #title>
                <span>{{item.meta && item.meta.title}}</span>
              </template>
              <a-menu-item v-for="child in item.children" :key="child.path">{{child.meta && child.meta.title}}</a-menu-item>
            </a-sub-menu>
          </template>
      </template>
    </a-menu>
</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: "Aside",
  setup() {
    const { options } = useRouter()
    const router = options.routes
    const data = reactive({
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    })
    return {
      data,
      router
    }
  }
}
</script>

<style scoped>

</style>