import{_,o as n,c as o,a as i,r as x,t as I,b as V,d as w,e as v,f as C,g,n as B,h as D,i as M,j as p,F as f,k as y,w as T,l as u,m as j}from"./index-733d4c41.js";const N="/assets/avatar_2-217f53ef.png",P="/assets/cv-7fbb0f82.pdf";const A={name:"AvatarCv",props:{imgSrc:{type:String,default:""}}},F={class:"avatar-cv"},H=["src"];function E(t,a,e,r,s,d){return n(),o("div",F,[i("img",{src:e.imgSrc,alt:"avatar"},null,8,H)])}const k=_(A,[["render",E]]);const z={props:{title:{type:String,default:""},href:{type:String,default:"#"}},setup(t){const a=x(0),{title:e}=I(t);return{count:a,title:e.value,href:t.href}}},J=["href","title"],R={class:"badge-btn--wrap"},W={key:0,class:"badge-btn__icon"};function U(t,a,e,r,s,d){return n(),o("a",{href:r.href,title:r.title,class:"badge-btn",target:"_blank"},[i("div",R,[t.$slots.icon?(n(),o("div",W,[V(t.$slots,"icon")])):w("",!0),i("span",null,v(r.title),1)])],8,J)}const S=_(z,[["render",U]]),O={},G={viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Z=C('<g clip-path="url(#clip0_3_17296)"><path d="M1.36349 10.16H3.42531V5.15276L0.479858 2.94366V9.27639C0.479858 9.76534 0.876022 10.16 1.36349 10.16Z" fill="#4285F4"></path><path d="M10.4937 10.1599H12.5555C13.0444 10.1599 13.4391 9.76374 13.4391 9.27627V2.94354L10.4937 5.15263" fill="#34A853"></path><path d="M10.4937 1.32322V5.15231L13.4391 2.94322V1.76503C13.4391 0.67227 12.1917 0.0493068 11.3184 0.70467" fill="#FBBC04"></path><path d="M3.42517 5.15264V1.32355L6.95972 3.97446L10.4943 1.32355V5.15264L6.95972 7.80355" fill="#EA4335"></path><path d="M0.479858 1.76528V2.94346L3.42531 5.15255V1.32346L2.60059 0.704914C1.72579 0.0495509 0.479858 0.672515 0.479858 1.76528Z" fill="#C5221F"></path></g><defs><clipPath id="clip0_3_17296"><rect width="12.96" height="9.72" fill="white" transform="translate(0.479858 0.439758)"></rect></clipPath></defs>',2),q=[Z];function K(t,a){return n(),o("svg",G,q)}const Q=_(O,[["render",K]]),Y={name:"LinkedInIcon"},X={width:"22",height:"23",viewBox:"0 0 22 23",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ee=i("path",{d:"M10.96 22.5598C4.99295 22.5598 0.160034 17.7269 0.160034 11.7598C0.160034 5.7927 4.99295 0.959778 10.96 0.959778C16.9271 0.959778 21.76 5.7927 21.76 11.7598C21.76 17.7269 16.9271 22.5598 10.96 22.5598Z",fill:"#2D9CDB"},null,-1),te=[ee];function ne(t,a,e,r,s,d){return n(),o("svg",X,te)}const ie=_(Y,[["render",ne]]),se={name:"PhoneIcon"},oe={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"phone",role:"img",viewBox:"0 0 512 512"},ae=i("path",{fill:"currentColor",d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",class:""},null,-1),le=[ae];function ce(t,a,e,r,s,d){return n(),o("svg",oe,le)}const re=_(se,[["render",ce]]),de={name:"SkypeIcon"},_e={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"skype",role:"img",viewBox:"0 0 448 512"},pe=i("path",{fill:"currentColor",d:"M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z",class:""},null,-1),me=[pe];function ue(t,a,e,r,s,d){return n(),o("svg",_e,me)}const he=_(de,[["render",ue]]),ve={name:"TelegramIcon"},ge={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false","data-prefix":"fab",role:"img",viewBox:"0 0 448 512"},fe=i("path",{fill:"currentColor",d:"M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"},null,-1),ye=[fe];function $e(t,a,e,r,s,d){return n(),o("svg",ge,ye)}const be=_(ve,[["render",$e]]),we={gmail:Q,linkedin:ie,phone:re,skype:he,telegram:be};function Ce(t){return we[t]||null}const ke={props:{name:{type:String,default:""}},computed:{selectedIcon(){return Ce(this.name)}}};function Se(t,a,e,r,s,d){return n(),g(M(d.selectedIcon),B(D(t.$attrs)),null,16)}const Le=_(ke,[["render",Se]]);const xe={name:"ContactsCV",components:{BadgeBtn:S,Icon:Le},data(){return{contactList:[{icon:"gmail",href:"mailto:zp00v0518@gmail.com",title:"gmail.com"},{icon:"phone",href:"tel:+380965253550",title:"0965253550"},{icon:"telegram",href:"https://t.me/pol_pintero",title:"@pol_pintero"}]}}},Ie={class:"contacts"};function Ve(t,a,e,r,s,d){const c=p("Icon"),l=p("BadgeBtn");return n(),o("div",Ie,[(n(!0),o(f,null,y(s.contactList,(m,h)=>(n(),g(l,{key:h,title:m.title,href:m.href},{icon:T(()=>[u(c,{name:m.icon},null,8,["name"])]),_:2},1032,["title","href"]))),128))])}const Be=_(xe,[["render",Ve]]);const De={name:"HeaderCv",components:{AvatarCv:k,ContactsCv:Be},data(){return{avatarSrc:N,cvPdf:P}}},Me={class:"header-cv"},Te={class:"header-cv__body"},je=i("span",{class:"header-cv__body--name"},"Dmytro Tarabanov ",-1),Ne=i("h1",{class:"header-cv__body--position"},"Javascript Developer (Vue)",-1),Pe={class:"header-cv__body__descr"},Ae=i("span",null,"Kiev, Ukraine ",-1),Fe=["href"];function He(t,a,e,r,s,d){const c=p("AvatarCv"),l=p("ContactsCv");return n(),o("div",Me,[u(c,{class:"header-cv__avatar","img-src":s.avatarSrc},null,8,["img-src"]),i("div",Te,[je,Ne,i("div",Pe,[Ae,i("span",null,[i("a",{class:"download-link",href:s.cvPdf,download:"Dmytro Tarabanov.pdf"},"download CV",8,Fe)])]),u(l)])])}const Ee=_(De,[["render",He]]);const ze={name:"AboutCv"},Je={class:"about"},Re=C('<h3 class="about__title">About Me</h3><div class="about--wrap"><article class="about__content"><p class="about__content__item"> I implement designers&#39; fantasies, taking into account the wishes of the backend </p><p class="about__content__item"> At my last job, I developed a component library in Vue for a document management platform. </p><div class="about__content__item"> Even earlier, when developing an ERP system: <ul><li>developed the architecture of the client part</li><li>implemented dynamic constructionand display of pages</li><li>definitely - implemented Figma designs in HTML, CSS and JS </li><li>worked with graphics (Canvas)</li><li>and many other things that were needed to create an ERP system</li></ul></div></article></div>',2),We=[Re];function Ue(t,a,e,r,s,d){return n(),o("section",Je,We)}const Oe=_(ze,[["render",Ue]]);const Ge={name:"LanguageCv",props:{name:{type:String,default:"",required:!0}}},Ze={class:"lang"},qe={class:"lang--cover"},Ke={class:"lang--wrap"},Qe={class:"lang__name"};function Ye(t,a,e,r,s,d){return n(),o("div",Ze,[i("div",qe,[i("div",Ke,[i("div",Qe,v(e.name.toUpperCase()),1)])])])}const Xe=_(Ge,[["render",Ye]]),et={name:"LanguageList",components:{LanguageCv:Xe},data(){return{list:[{name:"english"},{name:"ukranian"}]}}},tt={class:"lang-list"};function nt(t,a,e,r,s,d){const c=p("LanguageCv");return n(),o("section",tt,[(n(!0),o(f,null,y(s.list,(l,m)=>(n(),g(c,{key:m,name:l.name},null,8,["name"]))),128))])}const it=_(et,[["render",nt]]);const st={name:"SkillCv",props:{name:{type:String,default:""},lvl:{type:Number,default:0},length:{type:Number,default:5},type:{type:String,default:"",validator:t=>["","primary","secondary"].includes(t)}},data(){return{curLvl:this.lvl,curLength:this.length,percent:this.lvl/this.length,timeout:null}},methods:{setValues(){const t=this.$refs.skills,a=+t.clientWidth,e=this.$refs.name,r=+e.clientWidth,s=getComputedStyle(t),d=getComputedStyle(e),c=parseFloat(d.getPropertyValue("margin-right")),l=a-r-c,m=parseFloat(s.getPropertyValue("--elem-width")),h=parseFloat(s.getPropertyValue("--padding")),$=m+h;this.curLength=Math.floor((l-h-h)/$),this.curLvl=Math.floor(this.curLength*this.percent)},start(){clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.setValues()},30)}},mounted(){this.$nextTick(()=>{this.setValues(),window.addEventListener("resize",this.start)})},beforeUnmount(){window.removeEventListener("resize",this.start)}},ot={class:"skill-cv",ref:"skills"},at={class:"skill-cv--wrap"},lt=["type"];function ct(t,a,e,r,s,d){return n(),o("section",ot,[i("span",{class:"skill-cv__name",ref:"name"},v(e.name),513),i("div",at,[(n(!0),o(f,null,y(s.curLength,c=>(n(),o("div",{key:c,class:"skill-cv__item"},[i("div",{class:"skill-cv__item__status",type:c<=s.curLvl?e.type:""},null,8,lt)]))),128))])],512)}const L=_(st,[["render",ct]]);const rt={name:"SkillsList",components:{SkillCv:L},data(){return{list:[{name:"Javascript",lvl:5},{name:"Vue",lvl:5},{name:"Vuex",lvl:5},{name:"HTML",lvl:5},{name:"CSS",lvl:5},{name:"Puppeteer",lvl:5},{name:"Pinia",lvl:5},{name:"Nuxt",lvl:4},{name:"SCSS",lvl:4},{name:"Less",lvl:3},{name:"NodeJs",lvl:4},{name:"WebSoket",lvl:4},{name:"gRpc",lvl:4},{name:"MongoDB",lvl:4},{name:"Canvas",lvl:3},{name:"MySQL",lvl:3},{name:"Git",lvl:3},{name:"Nginx",lvl:3},{name:"Dart",lvl:2},{name:"Flutter",lvl:1}]}}},dt={class:"skills-list"},_t=i("h3",{class:"skills-list__title"},"Stack",-1);function pt(t,a,e,r,s,d){const c=p("SkillCv");return n(),o("div",dt,[_t,i("div",null,[(n(!0),o(f,null,y(s.list,(l,m)=>(n(),g(c,{key:m,name:l.name,lvl:l.lvl,type:"primary"},null,8,["name","lvl"]))),128))])])}const mt=_(rt,[["render",pt]]);const ut={name:"SoftwareList",components:{SkillCv:L},data(){return{list:[{name:"VsCode",lvl:5},{name:"Npm",lvl:5},{name:"Skype",lvl:5},{name:"Jira",lvl:4},{name:"Trello",lvl:4},{name:"Figma",lvl:4},{name:"Slack",lvl:4},{name:"GitLab",lvl:4}]}}},ht={class:"software-list"},vt=i("h3",{class:"software-list__title"},"Software",-1);function gt(t,a,e,r,s,d){const c=p("SkillCv");return n(),o("div",ht,[vt,i("div",null,[(n(!0),o(f,null,y(s.list,(l,m)=>(n(),g(c,{key:m,name:l.name,lvl:l.lvl,type:"secondary"},null,8,["name","lvl"]))),128))])])}const ft=_(ut,[["render",gt]]);const yt={name:"SidebarCv",components:{AboutCv:Oe,LanguageList:it,SkillsList:mt,SoftwareList:ft}},$t={class:"sidebar"},bt={class:"sidebar__skills"};function wt(t,a,e,r,s,d){const c=p("AboutCv"),l=p("LanguageList"),m=p("SkillsList"),h=p("SoftwareList");return n(),o("div",$t,[u(c),u(l),i("div",bt,[u(m),u(h)])])}const Ct=_(yt,[["render",wt]]);const kt={name:"CardCv",components:{AvatarCv:k,BadgeBtn:S},props:{icon:{type:String,default:""},invertIcon:{type:Boolean,default:!1},companyName:{type:String,default:""},position:{type:String,default:""},period:{type:String,default:""},description:{type:String,default:""},html:{type:Boolean,default:!1},badge:{type:Object,default:void 0}}},St=["href"],Lt={key:1,class:"card__item card__item__icon"},xt={class:"card__item card__item__body"},It={class:"card__item--name"},Vt={class:"card__item--position"},Bt={class:"card__item--period"},Dt=["innerHTML"],Mt={key:3,class:"card__item card__item--descr"};function Tt(t,a,e,r,s,d){const c=p("AvatarCv"),l=p("BadgeBtn");return n(),o("section",{class:j(["card",{invertIcon:e.invertIcon}])},[e.badge?(n(),o("a",{key:0,class:"card__item card__item__icon",href:e.badge.href,target:"_blank"},[u(c,{"img-src":e.icon},null,8,["img-src"])],8,St)):(n(),o("div",Lt,[u(c,{"img-src":e.icon},null,8,["img-src"])])),i("div",xt,[i("span",It,v(e.companyName),1),i("span",Vt,v(e.position.toUpperCase()),1),i("span",Bt,v(e.period),1),e.badge?(n(),g(l,{key:0,class:"card__item--period",href:e.badge.href,title:e.badge.title},null,8,["href","title"])):w("",!0)]),e.html?(n(),o("p",{key:2,class:"card__item card__item--descr",innerHTML:e.description},null,8,Dt)):(n(),o("p",Mt,v(e.description),1))],2)}const jt=_(kt,[["render",Tt]]),Nt="/assets/tori-bcf19315.svg",Pt="/assets/ubjs-3b74c53a.svg",At="/assets/dobuy-03c1bc86.svg",Ft="/assets/jcash-5a0a2c53.svg",Ht="/assets/lords-8788007a.svg",Et="/assets/default-cd2ef383.svg",zt="/assets/netgame-b98ff569.png",b="/assets/nda-661df67a.svg";const Jt={name:"ExperienceCv",components:{CardCv:jt},data(){return{cardList:[{icon:b,invertIcon:!0,companyName:"Miltech",position:"Project Manager",period:"08.2026 - to present",html:!0,description:`<div>
            <b>Miltech</b>
            <br>
            <ul>
              <li>Development of the product's technical specifications and tactical-technical characteristics in collaboration with engineers</li> 
              <li>Organizing effective collaboration between teams</li> 
              <li>Product integration</li> 
            </ul>
          </div>`},{icon:b,invertIcon:!0,companyName:"Igaming",position:"Team Lead Frontend",period:"09.2024 - 08.2026",html:!0,description:`<div>
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
          </div>`},{icon:zt,companyName:"Netgame",position:"Senior Javascript Developer (Vue)",period:"06.2023 - 08.2024",badge:{href:"https://netgamenv.com/",title:"netgame.com"},html:!0,description:`<div>
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
          </div>`},{icon:Pt,companyName:"UBjs",position:"middle Javascript Developer (Vue)",period:"08.2021 - 01.2023",badge:{href:"https://unitybase.info/api/adminui-vue/index.html",title:"unitybase.info"},html:!0,description:`<div>
            <b>The main purpose of UnityBase is to provide a set of modules for rapid development of RMS and EDRMS class software. </b>
            <br>
            During I have worked on the project: 
            <ul>
              <li> was creating new components on Vue</li> 
              <li> &#128579; rewrite old components from ExtJs on Vue</li>
              <li>was refactoring and was fixing bugs in legacy code</li>
            </ul>
          </div>`},{icon:Nt,companyName:"Tori",position:"middle Javascript Developer (Vue)",period:"11.2018  - 06.2021",badge:{href:"https://toriapps.com/",title:"toriapps.com"},html:!0,description:`<div>
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
          </div>`},{icon:Ht,companyName:"Lords MMO RTS",position:"Full Stack Developer",period:"06.2017  - 08.2018",badge:{href:"http://lords.dobuy.com.ua/",title:"lords.dobuy.com.ua"},html:!0,description:`<div>
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
          </div>`},{icon:At,companyName:"DoBuy",position:"junior Full Stack Developer",period:"06.2017  - 08.2018",badge:{href:"http://dobuy.com.ua/",title:"dobuy.com.ua"},html:!0,description:`<div>
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
          </div>`},{icon:Ft,companyName:"Jcash",position:"junior Javascript Developer (Vue)",period:"08.2018  - 10.2018",badge:{href:"https://jcash.co/uk/",title:"jcash.co"},html:!0,description:`<div>
            <b>Jcash - Convenient and secure digital wallet in Telegram</b>
            <br>
            During I have worked on the project: 
            <ul>
              <li>was refactoring  Vue-components</li>
              <li>was connecting authorization through third-party services: Google, FB, Telegram</li>
              <li>was developing animation</li>
            </ul>
          </div>`},{icon:Et,companyName:"BetParser",position:"Full Stack Developer",period:"08.2021  - 02.2022",html:!0,description:`<div>
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
          </div>`}]}}},Rt={class:"experience-cv"};function Wt(t,a,e,r,s,d){const c=p("CardCv");return n(),o("div",Rt,[(n(!0),o(f,null,y(s.cardList,(l,m)=>(n(),g(c,{key:m,icon:l.icon,"company-name":l.companyName,position:l.position,period:l.period,badge:l.badge,description:l.description,html:l.html,"invert-icon":l.invertIcon},null,8,["icon","company-name","position","period","badge","description","html","invert-icon"]))),128))])}const Ut=_(Jt,[["render",Wt]]);const Ot={name:"SwitchCv",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"]},Gt={class:"switch"},Zt={class:"switch__container"},qt=["checked"],Kt=i("div",{class:"switch__toggle"},null,-1);function Qt(t,a,e,r,s,d){return n(),o("label",Gt,[i("div",Zt,[i("input",{class:"switch__input",type:"checkbox",name:"check",checked:e.modelValue,onChange:a[0]||(a[0]=c=>t.$emit("update:modelValue",c.target.checked))},null,40,qt),Kt])])}const Yt=_(Ot,[["render",Qt]]);const Xt={name:"HomeCv",components:{HeaderCv:Ee,SidebarCv:Ct,ExperienceCv:Ut,SwitchCv:Yt},data(){return{isDarkTheme:!1}},watch:{isDarkTheme(t){this.switchTheme(t)}},methods:{switchTheme(t){document.querySelector("html").setAttribute("color-scheme",t?"dark":"light"),localStorage.setItem("color-theme",Number(t))}},mounted(){const t=localStorage.getItem("color-theme");this.isDarkTheme=!!Number(t)}},en={class:"header__sticky"},tn={class:"header__sticky__switch-theme"},nn=i("span",null,"Light",-1),sn=i("span",null,"Dark",-1),on=i("hr",null,null,-1);function an(t,a,e,r,s,d){const c=p("SwitchCv"),l=p("HeaderCv"),m=p("SidebarCv"),h=p("ExperienceCv");return n(),o(f,null,[i("div",en,[i("div",tn,[nn,u(c,{modelValue:s.isDarkTheme,"onUpdate:modelValue":a[0]||(a[0]=$=>s.isDarkTheme=$)},null,8,["modelValue"]),sn]),u(l),on]),i("main",null,[u(m),u(h)])],64)}const cn=_(Xt,[["render",an]]);export{cn as default};
