<template>
  <div class="header__sticky">
    <HeaderCv> </HeaderCv>
    <hr />
  </div>
  <main>
    <SidebarCv></SidebarCv>
    <ExperienceCv></ExperienceCv>
  </main>
</template>

<script>
import HeaderCv from './components/organism/HeaderCv'
import SidebarCv from './components/organism/SidebarCv'
import ExperienceCv from './components/organism//ExperienceCv'


export default {
  name: 'App',
  components: {HeaderCv, SidebarCv, ExperienceCv}
}
</script>

<style>
#app {
  max-width: 1440px;
  margin: 0 auto;
}
#app hr {
  border: 1px solid;
  border-color: white;
  opacity: 0.5;
  height: 0px;
  margin-block-end: var(--padding-double);
  overflow: hidden;
}
.header__sticky{
  position: sticky;
  top: 0px;
  background: var(--bg-primary);
}
main {
  width: 100%;
    display: grid;
    grid-template-columns: 30% 70%;
    column-gap: calc(var(--padding-double) * 2);
}
</style>
