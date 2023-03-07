<template>
  <div class="skills-list">
    <SkillCvVue
      v-for="(skill, index) in list"
      :key="index"
      :name="skill.name"
      :lvl="skill.lvl"
    ></SkillCvVue>
  </div>
</template>

<script>
import SkillCvVue from '../../atoms/SkillCv'

export default {
  name: 'SkillsList',
  components: {SkillCvVue},
  data() {
    return {
      list: [
        {name: 'Vue', lvl: 5},
        {name: 'Javascript', lvl: 5},
        {name: 'NodeJs', lvl: 5},
        {name: 'HTML', lvl: 5},
      ]
    }
  }
}
</script>

<style></style>
