<template>
  <HeaderCv> </HeaderCv>
  <hr />
  <main>
    <SidebarCv></SidebarCv>
  </main>
</template>

<script>
import HeaderCv from './components/organism/HeaderCv'
import SidebarCv from './components/organism/SidebarCv'

export default {
  name: 'App',
  components: {HeaderCv, SidebarCv}
}
</script>

<style>
#app {
  max-width: 1000px;
  margin: 0 auto;
}
#app hr {
  border: 1px solid;
  border-color: white;
  opacity: 0.5;
  height: 0px;
  margin-block-end: var(--padding-double);
}
</style>
