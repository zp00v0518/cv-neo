<template>
  <CardCv v-for="(card, index) in cardList" :key="index" :icon="card.icon"></CardCv>
</template>

<script>
import CardCv from '../../moleculs/CardCv'

import toriIcon  from '../../../assets/tori.svg'

export default {
  name: 'ExperienceCv',
  components: {CardCv},
  data() {
    return {
      cardList: [{
        icon: toriIcon
      }]
    }
  }
}
</script>

<style></style>
