<template>
  <div class="sidebar">
    <AboutCv></AboutCv>
    <LanguageList></LanguageList>
      <SkillsList></SkillsList>
      <SoftwareList></SoftwareList>
  </div>
</template>

<script>
import AboutCv from '../../moleculs/AboutCv'
import LanguageList from '../../moleculs/LanguageList'
import SkillsList from '../../moleculs/SkillsList'
import SoftwareList from '../../moleculs/SoftwareList'

export default {
  name: 'SidebarCv',
  components: {AboutCv, LanguageList, SkillsList, SoftwareList}
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

.sidebar .skills-list {
  margin-block-end: calc(var(--padding-double) * 4);
}

</style>
