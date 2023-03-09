<template>
  <a :href="href" :title="title" class="badge-btn" target="_blank">
    <div class="badge-btn--wrap">
      <div class="badge-btn__icon" v-if="$slots.icon">
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
    title: {type: String, default: ''},
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
  display: inline-block;
  width: fit-content;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  padding-top: 2px;
  background: var(--bg-badge-btn);
  border-radius: var(--border-radius);
}

.badge-btn--wrap {
  display: flex;
  column-gap: var(--padding);
  padding: var(--padding) var(--padding-double);
  background: var(--bg-badge-btn--wrap);
  border-radius: var(--border-radius);
}

.badge-btn__icon {
  width: 20px;
  height: 20px;
}
</style>
