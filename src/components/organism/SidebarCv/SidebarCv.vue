<template>
  <div class="sidebar">
    <AboutCv></AboutCv>
    <LanguageList></LanguageList>
    <SkillsList></SkillsList>
  </div>
</template>

<script>
import AboutCv from '../../moleculs/AboutCv'
import LanguageList from '../../moleculs/LanguageList'
import SkillsList from '../../moleculs/SkillsList'

export default {
  name: 'SidebarCv',
  components: {AboutCv, LanguageList, SkillsList}
}
</script>

<style>
.sidebar .about h3 {
  margin-block-start: 0;
}

.sidebar .lang-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--padding-double);
  padding-block-start: calc(var(--padding-double) * 2);
  padding-block-end: calc(var(--padding-double) * 2);
}
</style>
