<template>
  <a :href="href" :title="title" class="badge-btn">
    <div class="badge-btn--wrap">
      <div class="badge-btn__icon">
        <slot name="icon"></slot>
      </div>
      <span>{{ title }}</span>
    </div>
  </a>
</template>

<script>
import {ref, toRefs} from 'vue'

export default {
  props: {
    title: {type: String, default: 'asdfasdfasdfdas'},
    href: {type: String, default: '#'}
  },

  setup(props) {
    const count = ref(0)
    const {title} = toRefs(props)

    return {
      count,
      title: title.value,
      href: props.href
    }
  }
}
</script>

<style>
.badge-btn {
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  background: green;
  padding-top: 2px;
  background: white;
  border-radius: var(--border-radius);
  background-blend-mode: overlay;
}

.badge-btn--wrap {
  display: flex;
  column-gap: var(--padding);
  width: max-content;
  padding: var(--padding) var(--padding-double);
  background-color: rgba(233, 234, 240, 0.5);
  border-radius: var(--border-radius);
}

.badge-btn__icon {
  width: 20px;
  height: 20px;
}
</style>
