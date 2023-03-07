<template>
  <div class="sidebar">
    <AboutCv></AboutCv>
    <LanguageList></LanguageList>
  </div>
</template>

<script>
import AboutCv from '../../moleculs/AboutCv'
import LanguageList from '../../moleculs/LanguageList'

export default {
  name: 'SidebarCv',
  components: {AboutCv, LanguageList}
}
</script>

<style>
.sidebar .about h3 {
  margin-block-start: 0;
}
</style>
