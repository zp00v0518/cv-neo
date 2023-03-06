

<template>
  <a href="" :title="title" class="badge-btn">
    <slot name="icon"></slot>
    <span>{{ title }}</span>
  </a>
</template>
 
<script>
import { ref, toRefs } from 'vue'

export default {
  props: {
    title: { type: String, default: 'adas' }
  },

  setup (props) {
    const count = ref(0)
    const { title } = toRefs(props)

    return {
      count,
      title: title.value
    }
  },
}

</script>
 
<style>
.badge-btn {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
 