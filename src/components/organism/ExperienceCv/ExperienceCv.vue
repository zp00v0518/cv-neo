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
      :invert-icon="card.invertIcon"
    ></CardCv>
  </div>
</template>

<script>
import CardCv from "../../moleculs/CardCv";

import toriIcon from "../../../assets/tori.svg";
import ubjsIcon from "../../../assets/ubjs.svg";
import dobuyIcon from "../../../assets/dobuy.svg";
import jcashIcon from "../../../assets/jcash.svg";
import lordsIcon from "../../../assets/lords.svg";
import defaultIcon from "../../../assets/default.svg";
import netgameIcon from "../../../assets/netgame.png";
import ndaIcon from "../../../assets/nda.svg";

export default {
  name: "ExperienceCv",
  components: { CardCv },
  data() {
    return {
      cardList: [
                {
          icon: ndaIcon,
          invertIcon: true,
          companyName: "Miltech",
          position: "Project Manager",
          period: "08.2026 - to present",
          html: true,
          description: `<div>
            <b>Miltech</b>
            <br>
            <ul>
              <li>Development of the product's technical specifications and tactical-technical characteristics in collaboration with engineers</li> 
              <li>Organizing effective collaboration between teams</li> 
              <li>Product integration</li> 
            </ul>
          </div>`,
        },

        {
          icon: ndaIcon,
          invertIcon: true,
          companyName: "Igaming",
          position: "Team Lead Frontend",
          period: "09.2024 - 08.2026",
          html: true,
          description: `<div>
            <b>Software provider in the iGaming industry. </b>
            <br>
            While working in the company, my tasks included: 
            <ul>
              <li>Led the development of the platform from the ground up, from initial concept to production deployment.</li> 
              <li>Defined the technology stack, development tools, and engineering standard</li> 
              <li>Designed and evolved the overall system architecture</li> 
              <li>Integrated the platform with KYCID for identity verification</li> 
              <li>Integrated payment providers and payment methods</li> 
              <li>Planned, coordinated, and delivered production releases</li> 
              <li>Owned the platform's stability, reliability, and availability</li> 
              <li>Optimized application performance and scalability</li> 
              <li>Conducted code reviews and enforced engineering best practices</li> 
              <li>Facilitated backlog grooming, technical discussions, and effort estimation</li> 
              <li>Conducted technical interviews and participated in the hiring process</li> 
              <li>Led and mentored the development team, supporting technical growth and delivery</li> 
            </ul>
          </div>`,
        },
        {
          icon: netgameIcon,
          companyName: "Netgame",
          position: "Senior Javascript Developer (Vue)",
          period: "06.2023 - 08.2024",
          badge: {
            href: "https://netgamenv.com/",
            title: "netgame.com",
          },
          html: true,
          description: `<div>
            <b>Software provider in the iGaming industry. </b>
            <br>
            While working in the company, my tasks included: 
            <ul>
              <li>working on the project performance</li> 
              <li>migrate from Vue2 to Vue3</li> 
              <li>migrate from Nodejs v12 to v18</li> 
              <li>code refactoring</li> 
              <li>implementation of AB testing</li> 
              <li>deployment of the project to production</li> 
              <li>creation of new pages/components</li> 
              <li>implementation of website redesign</li> 
              <li>codereview</li> 
            </ul>
          </div>`,
        },
        {
          icon: ubjsIcon,
          companyName: "UBjs",
          position: "middle Javascript Developer (Vue)",
          period: "08.2021 - 01.2023",
          badge: {
            href: "https://unitybase.info/api/adminui-vue/index.html",
            title: "unitybase.info",
          },
          html: true,
          description: `<div>
            <b>The main purpose of UnityBase is to provide a set of modules for rapid development of RMS and EDRMS class software. </b>
            <br>
            During I have worked on the project: 
            <ul>
              <li> was creating new components on Vue</li> 
              <li> &#128579; rewrite old components from ExtJs on Vue</li>
              <li>was refactoring and was fixing bugs in legacy code</li>
            </ul>
          </div>`,
        },
        {
          icon: toriIcon,
          companyName: "Tori",
          position: "middle Javascript Developer (Vue)",
          period: "11.2018  - 06.2021",
          badge: {
            href: "https://toriapps.com/",
            title: "toriapps.com",
          },
          html: true,
          description: `<div>
            <b>Tori is a flexible HRIS management system with a corporate portal and recruitment features inside</b> 
            <br>
            While working in the company, my tasks included: 
            <ul>
              <li>was building the architecture of the client part</li>
              <li>&#128579; was implementing dynamic constructionand display of pages</li>
              <li>was creating new components on Vue</li>
              <li>definitely - was implementing Figma designs in HTML, CSS and JS </li>
              <li>&#128525;was working with graphics (Canvas)</li>
              <li>was writing tests for components</li>
              <li>was doing code-review other developers</li>
              <li>was working closely with backend developers, QA and disigners</li>
              <li>was discussing with the customer new features</li>
              <li>and many other things that were needed to create an HRIS system</li>
            </ul>
          </div>`,
        },
        {
          icon: lordsIcon,
          companyName: "Lords MMO RTS",
          position: "Full Stack Developer",
          period: "06.2017  - 08.2018",
          badge: {
            href: "http://lords.dobuy.com.ua/",
            title: "lords.dobuy.com.ua",
          },
          html: true,
          description: `<div>
            <b>&#128526;Lords it is MMO RTS game in isometric view. Personal project.</b>
            <br>
            During I have worked on the project: 
            <ul>
              <li>was building the architecture of the client and backend part</li>
              <li>was developing the architecture of interaction between online players</li>
              <li>&#128521;was developing the rules of the game</li>
              <li>was designing  data base</li>
              <li>was working on autorization and autefication</li>
              <li>&#128525;was working with graphics (Canvas)</li>
            </ul>
          </div>`,
        },
        {
          icon: dobuyIcon,
          companyName: "DoBuy",
          position: "junior Full Stack Developer",
          period: "06.2017  - 08.2018",
          badge: {
            href: "http://dobuy.com.ua/",
            title: "dobuy.com.ua",
          },
          html: true,
          description: `<div>
            <b>&#129299;DoBuy it is online-shop. Personal project. Completely implemented by me.</b>
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
          </div>`,
        },

        {
          icon: jcashIcon,
          companyName: "Jcash",
          position: "junior Javascript Developer (Vue)",
          period: "08.2018  - 10.2018",
          badge: {
            href: "https://jcash.co/uk/",
            title: "jcash.co",
          },
          html: true,
          description: `<div>
            <b>Jcash - Convenient and secure digital wallet in Telegram</b>
            <br>
            During I have worked on the project: 
            <ul>
              <li>was refactoring  Vue-components</li>
              <li>was connecting authorization through third-party services: Google, FB, Telegram</li>
              <li>was developing animation</li>
            </ul>
          </div>`,
        },
        {
          icon: defaultIcon,
          companyName: "BetParser",
          position: "Full Stack Developer",
          period: "08.2021  - 02.2022",
          html: true,
          description: `<div>
            <b>&#129323; Parser of bookmaker's sites, for searching surebets.  Personal project. Not in the public domain</b>
            <br>
            The application allows you to find surebets in real time
            <br>
            During I have worked on the project: 
            <ul>
              <li>was building the architecture of the client and backend part</li>
              <li>was designing  data base</li>
              <li>created parsing sysmem</li>
              <li>&#129301;created system of matching teams names</li>
            </ul>
          </div>`,
        },
      ],
    };
  },
};
</script>

<style>
.experience-cv {
  display: grid;
  grid-auto-rows: max-content;
  row-gap: calc(var(--padding-double) + var(--padding-step));
}
</style>
