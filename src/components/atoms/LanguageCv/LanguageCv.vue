<template>
  <div class="lang">
    <div class="lang--cover">
      <div class="lang--wrap">
        <div class="lang__name">{{ name.toUpperCase() }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageCv',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style>
.lang {
  --padding-lang: var(--padding);
  background: green;
  border-radius: 100%;
  padding: calc(var(--padding-lang) / 2);
  aspect-ratio: 1;
  background: linear-gradient(318.21deg, #11a8fd 14.05%, #0081c9 85.29%);
  width: 110px;
}
.lang--cover {
  border-radius: 100%;
  padding: calc(var(--padding-lang) / 2);
  aspect-ratio: 1;
  background: linear-gradient(320.66deg, #005ea3 14.75%, #11a8fd 84.81%);
}

.lang--wrap {
  border-radius: 100%;
  padding: var(--padding-lang);
  aspect-ratio: 1;
  background: var(--bg-primary);
  box-shadow: var(--shadow-base-part1), var(--shadow-base-part2), var(--shadow-base-part3);
}
.lang__name {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-lang);
  font-weight: 600;
  /* letter-spacing: 0.1rem; */
  border-radius: 100%;
  background: linear-gradient(
      129.67deg,
      rgba(122, 127, 133, 0.4) 14.52%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    linear-gradient(133.76deg, #e6e7ed -18.17%, #f7f8fa 140.27%);
  box-shadow: -1.83074px -2.7461px 7.32294px #fafafc,
    0.915368px 0.915368px 4.57684px #b1b5c6,
    inset 0.915368px 0.915368px 2.7461px #ebecf0;
  aspect-ratio: 1;
}
</style>
