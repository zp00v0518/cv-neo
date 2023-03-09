<template>
  <section class="skill-cv" ref="skills">
    <span class="skill-cv__name" ref="name">{{ name }}</span>
    <div class="skill-cv--wrap">
      <div v-for="index in curLength" :key="index" class="skill-cv__item">
        <div
          class="skill-cv__item__status"
          :type="index <= curLvl ? type : ''"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillCv',
  props: {
    name: {type: String, default: ''},
    lvl: {type: Number, default: 0},
    length: {type: Number, default: 5},
    type: {
      type: String,
      default: '',
      validator: v => {
        return ['', 'primary', 'secondary'].includes(v)
      }
    }
  },
  data() {
    return {
      curLvl: this.lvl,
      curLength: this.length,
      percent: this.lvl / this.length,
      timeout: null
    }
  },
  methods: {
    setValues() {
      const container = this.$refs.skills
      const containerWidth = +container.clientWidth
      const name = this.$refs.name
      const nameWidth = +name.clientWidth
      const containerStyles = getComputedStyle(container)
      const nameStyles = getComputedStyle(name)
      const nameMargin = parseFloat(nameStyles.getPropertyValue('margin-right'))
      const emtySpase = containerWidth - nameWidth - nameMargin

      const elemWidth = parseFloat(
        containerStyles.getPropertyValue('--elem-width')
      )
      const gap = parseFloat(containerStyles.getPropertyValue('--padding'))
      const itemWidth = elemWidth + gap
      this.curLength = Math.floor((emtySpase - gap - gap) / itemWidth)
      this.curLvl = Math.floor(this.curLength * this.percent)
    },
    start() {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.setValues()
      }, 30)
    }
  },
  mounted() {
    this.setValues()
    window.addEventListener('resize', this.start)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.start)
  }
}
</script>

<style>
.skill-cv {
  --elem-width: 24px;
  display: flex;
  padding: var(--padding-step) var(--padding-double);
  border-radius: 10px;
  background: var(--bg-primary);
  box-shadow: var(--shadow-base-part1), var(--shadow-base-part2),
    var(--shadow-base-part3);
}
.skill-cv__name {
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  min-width: 30%;
  margin-right: var(--padding);
}

.skill-cv__item {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: var(--elem-width);
  aspect-ratio: 1;
  background: var(--bg-linear);
  box-shadow: var(--shadow-base-part1), var(--shadow-base-part2),
    var(--shadow-base-part3);
}

.skill-cv--wrap {
  display: flex;
  gap: var(--padding);
  width: 100%;
}

.skill-cv__item__status {
  width: 50%;
  aspect-ratio: 1;
  border-radius: 100%;
}

.skill-cv__item__status[type='primary'] {
  background: linear-gradient(45deg, #11a8fd 24.17%, #005696 74.59%);
}
.skill-cv__item__status[type='secondary'] {
  background: linear-gradient(90deg, #e69e00f7 0%, #f9d423 100%);
  /* background: linear-gradient(90deg, #e65c00 0%, #f9d423 100%); */
}
</style>
