<template>
  <div class="sidebar">
    <AboutCv></AboutCv>
    <ExperienceCv></ExperienceCv>
  </div>
</template>

<script>
import AboutCv from '../../moleculs/AboutCv'
import ExperienceCv from '../ExperienceCv/ExperienceCv.vue';


export default {
  name: 'SidebarCv',
  components: {AboutCv, ExperienceCv}
}
</script>

<style>
.sidebar {
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  column-gap: calc(var(--padding-double) * 2);
}
.sidebar .about h3 {
  margin-block-start: 0;
}
</style>
