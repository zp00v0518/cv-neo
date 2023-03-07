<template>
  <div class="experience-cv">
    <CardCv
      v-for="(card, index) in cardList"
      :key="index"
      :icon="card.icon"
      :company-name="card.companyName"
      :position="card.position"
      :period="card.period"
      :badge="card.badge"
    ></CardCv>
  </div>
</template>

<script>
import CardCv from '../../moleculs/CardCv'

import toriIcon from '../../../assets/tori.svg'

export default {
  name: 'ExperienceCv',
  components: {CardCv},
  data() {
    return {
      cardList: [
        {
          icon: toriIcon,
          companyName: 'Tori',
          position: 'Javascript Developer (Vue)',
          period: '11.2018  - 06.2021',
          badge: {
            href: 'https://toriapps.com/',
            title: 'toriapps.com'
          }
        }
      ]
    }
  }
}
</script>

<style></style>
