<script>
import choices from './choices';

function chooseIcon (name) {
  return choices[name] || null;
}

export default {
  props: {
    name: { type: String, default: '' },
  },
  computed: {
    selectedIcon () {
      return chooseIcon(this.name);
    },
  },
};
</script>

<template>
  <component :is="selectedIcon" v-bind="$attrs" />
</template>
