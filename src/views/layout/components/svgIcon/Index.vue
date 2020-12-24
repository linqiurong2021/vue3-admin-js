<template>
 <span>
    <svg class="svg" :class="className"> 
      <use :href="`#icon-${iconName}`" />
    </svg>
 </span>
</template>

<script>

export default {
  name: "SvgIcon",
  props: {
    className: {
      type: String,
      default: ""
    },
    iconName: {
      type: String,
      default: ""
    },
  },
  setup() {
    // 获取当前svg目录所有为.svg结尾的文件
    const req = require.context('../../../../assets/svg', false, /\.svg$/); // 解析获取的.svg文件的文件名称，并返回
    const requireAll = (requireContext) => {
      return requireContext.keys().map(requireContext); 
    };
    requireAll(req)
  }
}
</script>