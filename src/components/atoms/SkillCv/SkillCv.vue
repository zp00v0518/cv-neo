<template>
    <section class="skill-cv">
        <span class="skill-cv__name">{{ name }}</span>
    </section>
</template>

<script>
export default {
  name: 'SkillCv',
  props: {
    name: {type: String, default: ''},
    lvl: {type: Number, default: 0}
  }
}
</script>

<style></style>
