<template>
 <span >
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
  }
}
</script>