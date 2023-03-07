<template>
  <div class="skills-list">
    <h3 class="skills-list__title">Stack</h3>
    <div>
      <SkillCv
        v-for="(skill, index) in list"
        :key="index"
        :name="skill.name"
        :lvl="skill.lvl"
        type="primary"
      ></SkillCv>
    </div>
  </div>
</template>

<script>
import SkillCv from '../../atoms/SkillCv'

export default {
  name: 'SkillsList',
  components: {SkillCv},
  data() {
    return {
      list: [
        {name: 'Javascript', lvl: 5},
        {name: 'Vue', lvl: 5},
        {name: 'Vuex', lvl: 5},
        {name: 'HTML', lvl: 5},
        {name: 'CSS', lvl: 5},
        {name: 'Puppeteer', lvl: 5},
        {name: 'Pinia', lvl: 4},
        {name: 'Nuxt', lvl: 4},
        {name: 'SCSS', lvl: 4},
        {name: 'NodeJs', lvl: 4},
        {name: 'WebSoket', lvl: 4},
        {name: 'MongoDB', lvl: 4},
        {name: 'Less', lvl: 3},
        {name: 'Canvas', lvl: 3},
        {name: 'MySQL', lvl: 3},
        {name: 'Git', lvl: 3},
        {name: 'Nginx', lvl: 3},
        {name: 'Dart', lvl: 2},
        {name: 'Flutter', lvl: 1},
      ]
    }
  }
}
</script>

<style>
.skills-list__title {
  color: inherit;
  text-transform: uppercase;
  height: 1.2rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #11A8FD 24.17%, #005696 74.59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}
.skills-list .skill-cv {
  margin-block-end: var(--padding-double);
}
</style>
