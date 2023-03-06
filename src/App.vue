<template>
  <HeaderCv> </HeaderCv>
  <hr>
  <main>
    
  </main>
</template>

<script>
import HeaderCv from './components/organism/HeaderCv'

export default {
  name: 'App',
  components: {HeaderCv}
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
}
</style>
