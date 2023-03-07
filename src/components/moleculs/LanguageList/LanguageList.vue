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
