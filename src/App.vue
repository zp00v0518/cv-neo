<template>
  <div class="header__sticky">
    <div class="header__sticky__switch-theme">
      <span>Light</span>
      <SwitchCv v-model="isDarkTheme"></SwitchCv>
      <span>Dark</span>
    </div>
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
import SwitchCv from './components/atoms/SwitchCv'

export default {
  name: 'App',
  components: {HeaderCv, SidebarCv, ExperienceCv, SwitchCv},
  data() {
    return {
      isDarkTheme: false
    }
  },
  watch: {
    isDarkTheme(value) {
      this.switchTheme(value)
    }
  },
  methods: {
    switchTheme(value) {
      const html = document.querySelector('html')
      html.setAttribute('color-scheme', value ? 'dark' : 'light')
      localStorage.setItem('color-theme', Number(value))
    }
  },
  mounted() {
    const value = localStorage.getItem('color-theme')
    this.isDarkTheme = !!Number(value)
  }
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

html[color-scheme='dark'] #app hr {
  border-color: #696969;
}

.header__sticky {
  position: sticky;
  top: 0px;
  background: var(--bg-primary);
}

.header__sticky__switch-theme {
  position: absolute;
  right: var(--padding-double);
  top: var(--padding-double);
  display: flex;
  align-items: center;
  color: var(--txt-secondary-color);
}

.header__sticky__switch-theme .switch {
  margin-right: var(--padding);
  margin-left: var(--padding);
}

main {
  --gap: calc(var(--padding-double) * 2);
  display: grid;
  grid-template-columns: 30% calc(70% - var(--gap) - var(--padding));
  column-gap: var(--gap);
  padding: 0 var(--padding);
  padding-right: 0;
}

@media (max-width: 1020px) {
  main {
    display: block;
  }

  .sidebar {
    margin-block-end: calc(var(--padding-double) * 2);
  }
}

@media (max-height: 550px) {
  .header__sticky {
    position: unset;
  }
}
</style>
