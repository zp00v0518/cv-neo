<template>
  <section>
    <LanguageCv v-for="(item, index) in list" :key="index"></LanguageCv>
  </section>
</template>

<script>
import LanguageCv from '../../atoms/LanguageCv'

export default {
  name: 'LanguageList',
  components: {LanguageCv},
  data() {
    return {
      list: [{}]
    }
  }
}
</script>

<style></style>
