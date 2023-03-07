<template>
  <div class="skills-list">
    <h3 class="skills-list__title">Skills</h3>
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
        {name: 'Vue', lvl: 5},
        {name: 'Javascript', lvl: 4},
        {name: 'NodeJs', lvl: 3},
        {name: 'HTML', lvl: 2}
      ]
    }
  }
}
</script>

<style>
.skills-list__title {
  color: inherit;
  text-transform: uppercase;
}
.skills-list .skill-cv {
  margin-block-end: var(--padding-double);
}
</style>
