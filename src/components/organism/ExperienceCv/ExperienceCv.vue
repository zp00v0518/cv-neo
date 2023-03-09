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
      :description="card.description"
      :html="card.html"
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
            href: 'https://unitybase.info/api/adminui-vue/index.html',
            title: 'unitybase.info'
          },
          html: true,
          description: 
          `<div>
            <b>The main purpose of UnityBase is to provide a set of modules for rapid development of RMS and EDRMS class software. </b>
            <br>
            During I have worked on the project: 
            <ul>
              <li> was creating new components on Vue</li> 
              <li>rewrite old components from ExtJs on Vue</li>
              <li>was refactoring and was fixing bugs in legacy code</li>
            </ul>
          </div>`,
        },
        {
          icon: toriIcon,
          companyName: 'Tori',
          position: 'Javascript Developer (Vue)',
          period: '11.2018  - 06.2021',
          badge: {
            href: 'https://toriapps.com/',
            title: 'toriapps.com'
          },
          html: true,
          description: 
          `<div>
            <b>Tori is a flexible HRIS management system with a corporate portal and recruitment features inside. It’s a central hub for the strategic company processes: recruiting, employee management, engagement, and retention.</b> 
            <br>
            During I have worked on the project: 
            <ul>
              <li>was building the architecture of the client part</li>
              <li>was implementing dynamic constructionand display of pages</li>
              <li>was creating new components on Vue</li>
              <li>definitely - was implementing Figma designs in HTML, CSS and JS </li>
              <li>was working with graphics (Canvas)</li>
              <li>was writing tests for components</li>
              <li>was doing code-review other developers</li>
              <li>was working closely with backend developers, QA and disigners</li>
              <li>was discussing with the customer new features</li>
              <li>and many other things that were needed to create an HRIS system</li>
            </ul>
          </div>`
        },
        {
          icon: jcashIcon,
          companyName: 'Jcash',
          position: 'Javascript Developer (Vue)',
          period: '08.2018  - 10.2018',
          badge: {
            href: 'https://jcash.co/uk/',
            title: 'jcash.co'
          },
          html: true,
          description: 
          `<div>
            <b>Jcash - Convenient and secure digital wallet in Telegram</b>
            <br>
            During I have worked on the project: 
            <ul>
              <li>was refactoring  Vue-components</li>
              <li>was connecting authorization through third-party services: Google, FB, Telegram</li>
              <li>was developing animation</li>
            </ul>
          </div>`
        },
        {
          icon: dobuyIcon,
          companyName: 'DoBuy',
          position: 'Full Stack Developer',
          period: '06.2017  - 08.2018',
          badge: {
            href: 'http://dobuy.com.ua/',
            title: 'dobuy.com.ua'
          },
          html: true,
          description: 
          `<div>
            <b>DoBuy it is online-shop. Personal project. Completely implemented by me.</b>
            <br>
            During I have worked on the project: 
            <ul>
              <li>was building the architecture of the client and backend part</li>
              <li>no third-party plugins were used when creating it</li>
              <li>was designing  data base</li>
              <li>Integrated delivery service API</li>
              <li>Admin panel - allows you to work with orders, goods (add/change/delete). Working with statistics</li>
              <li>Implemented filtering, sorting, goods; pagination</li>
              <li>&#128522; My pride: developed a system for online measurements of clothing</li>
            </ul>
          </div>`
        },
        {
          icon: lordsIcon,
          companyName: 'Lords MMO RTS',
          position: 'Full Stack Developer',
          period: '06.2017  - 08.2018',
          badge: {
            href: 'http://lords.dobuy.com.ua/',
            title: 'lords.dobuy.com.ua'
          },
          html: true,
          description: 
          `<div>
            <b>Lords it is MMO RTS game in isometric view</b>
            <br>
            During I have worked on the project: 
            <ul>
              <li>was building the architecture of the client and backend part</li>
              <li>was developing the architecture of interaction between online players</li>
              <li>was developing the rules of the game</li>
              <li>was designing  data base</li>
              <li>was working on autorization and autefication</li>
              <li>was working with graphics (Canvas)</li>
            </ul>
          </div>`
        }
      ]
    }
  }
}
</script>

<style>
.experience-cv {
  display: grid;
  grid-auto-rows: max-content;
  row-gap: calc(var(--padding-double) + var(--padding-step));
}
</style>
