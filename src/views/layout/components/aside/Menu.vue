<template>
  <a-sub-menu :key="menu.path">
    <template #title style="padding-left:0px">
      <div>
        <svg-icon class="anticon" className="aside-svg mr-5 mb--5" :iconName="menu.meta && menu.meta.icon"/> <span>{{menu.meta && menu.meta.title}}</span>
      </div>
    </template>
    <template v-if="menu.children.length">
      <template v-for="child in menu.children" >
        <a-menu-item v-if="!child.children" :key="child.path">
          <div> <svg-icon  class="anticon" className="aside-svg mr-5 mb--5" :iconName="child.meta && child.meta.icon"/>
          <span><router-link :to="child.path">{{child.meta && child.meta.title }}</router-link></span></div>
        </a-menu-item>
         <!--有子集-->
        <Menu v-else :menu="child" :key="child.path"/>
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.icon {
  opacity: .6;
}
.ant-menu-item-selected {
  .icon{
    opacity: 1;
  }
}
</style>