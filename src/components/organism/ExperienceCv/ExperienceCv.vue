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
import ubjsIcon from '../../../assets/ubjs.svg'
import dobuyIcon from '../../../assets/dobuy.svg'
import jcashIcon from '../../../assets/jcash.svg'
import lordsIcon from '../../../assets/lords.svg'

export default {
  name: 'ExperienceCv',
  components: {CardCv},
  data() {
    return {
      cardList: [
        {
          icon: ubjsIcon,
          companyName: 'UBjs',
          position: 'Javascript Developer (Vue)',
          period: '08.2021 - 01.2023',
          badge: {
            href: 'https://unitybase.info/api/index.html',
            title: 'unitybase.info'
          }
        },
        {
          icon: toriIcon,
          companyName: 'Tori',
          position: 'Javascript Developer (Vue)',
          period: '11.2018  - 06.2021',
          badge: {
            href: 'https://toriapps.com/',
            title: 'toriapps.com'
          }
        },
        {
          icon: jcashIcon,
          companyName: 'Jcash',
          position: 'Javascript Developer (Vue)',
          period: '08.2018  - 10.2018',
          badge: {
            href: 'https://jcash.co/uk/',
            title: 'jcash.co'
          }
        },
        {
          icon: dobuyIcon,
          companyName: 'DoBuy',
          position: 'Full Stack Developer',
          period: '06.2017  - 08.2018',
          badge: {
            href: 'http://dobuy.com.ua/',
            title: 'dobuy.com.ua'
          }
        },
        {
          icon: lordsIcon,
          companyName: 'Lords MMO RTS',
          position: 'Full Stack Developer',
          period: '06.2017  - 08.2018',
          badge: {
            href: 'http://lords.dobuy.com.ua/',
            title: 'lords.dobuy.com.ua'
          }
        },
      ]
    }
  }
}
</script>

<style>
.experience-cv  {
  display: grid;
  grid-template-rows: repeat(auto-fill, 250px);
  row-gap: calc(var(--padding-double) + var(--padding-step));
}
</style>
