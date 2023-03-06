

<template>
  <a :href="href" :title="title" class="badge-btn">
    <div class="badge-btn__icon">
      <slot name="icon"></slot>
    </div>
    <span>{{ title }}</span>
  </a>
</template>
 
<script>
import { ref, toRefs } from 'vue'

export default {
  props: {
    title: { type: String, default: 'asdfasdfasdfdas' },
    href: { type: String, default: '#' }
  },

  setup (props) {
    const count = ref(0)
    const { title, } = toRefs(props)

    return {
      count,
      title: title.value,
      href: props.href
    }
  },
}

</script>
 
<style>
.badge-btn {
  display: flex;
  column-gap: var(--padding);
  width: max-content;
  padding: var(--padding) var(--padding-double);
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.44 );
  /* background-blend-mode: overlay; */
  /* backdrop-filter: blur(31.5115px); */
  border-radius: var(--border-radius);
  border: 1px solid;
}
</style>
 