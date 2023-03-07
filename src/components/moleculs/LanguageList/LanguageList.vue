<template>
  <section class="lang-list">
    <LanguageCv
      v-for="(item, index) in list"
      :key="index"
      :name="item.name"
    ></LanguageCv>
  </section>
</template>

<script>
import LanguageCv from '../../atoms/LanguageCv'

export default {
  name: 'LanguageList',
  components: {LanguageCv},
  data() {
    return {
      list: [{name: 'english'}, {name: 'ukranian'}]
    }
  }
}
</script>

<style>
.lang-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 115px);
    column-gap: var(--padding);
}
</style>
