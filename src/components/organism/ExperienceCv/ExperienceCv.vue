<template>
  <CardCv v-for="(card, index) in cardList" :key="index"></CardCv>
</template>

<script>
import CardCv from '../../moleculs/CardCv'
export default {
  name: 'ExperienceCv',
  components: {CardCv},
  data() {
    return {
      cardList: []
    }
  }
}
</script>

<style></style>
