<template>
  <section class="skill-cv">
    <span class="skill-cv__name">{{ name }}</span>
    <div class="skill-cv--wrap">
      <div v-for="index in length" :key="index" class="skill-cv__item">
        <div class="skill-cv__item__status" :status="status"></div>
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
    status: {
      type: String,
      default: '',
      validator: v => {
        return ['', 'primary', 'secondary'].includes(v)
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
.skill-cv {
  display: flex;
  padding: var(--padding-step) var(--padding-double);
  border-radius: 10px;
  background: var(--bg-primary);
  box-shadow: -5.49221px -5.49221px 10.9844px rgba(255, 255, 255, 0.7),
    5.49221px 5.49221px 10.9844px rgba(189, 200, 223, 0.7);
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
  width: 32px;
  aspect-ratio: 1;
  background: linear-gradient(153.43deg, #d9dae3 17.71%, #f4f5f8 83.33%);
  box-shadow: -9.15368px -9.15368px 18.3074px rgba(255, 255, 255, 0.7),
    9.15368px 9.15368px 18.3074px rgba(189, 200, 223, 0.7);
}

.skill-cv--wrap {
  display: flex;
  gap: var(--padding);
}

.skill-cv__item__status {
  width: 50%;
  aspect-ratio: 1;
  border-radius: 100%;
}

.skill-cv__item__status[status='primary'] {
  background: linear-gradient(45deg, #11a8fd 24.17%, #005696 74.59%);
}
.skill-cv__item__status[status='secondary'] {
  background: linear-gradient(90deg, #e65c00 0%, #f9d423 100%);
}
</style>
