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
  box-shadow: var(--shadow-base-part1), var(--shadow-base-part2),
    var(--shadow-base-part3);
}

.lang__name {
  --bg-lang-name-light: linear-gradient(129.67deg,
      rgba(122, 127, 133, 0.4) 14.52%,
      rgba(255, 255, 255, 0.4) 100%),
    linear-gradient(133.76deg, #e6e7ed -18.17%, #f7f8fa 140.27%);
  --bg-lang-name: var(--bg-lang-name-light);
  --shadow-lang-name-light: -1.83074px -2.7461px 7.32294px #fafafc,
    0.915368px 0.915368px 4.57684px #b1b5c6,
    inset 0.915368px 0.915368px 2.7461px #ebecf0;
  --shadow-lang-name: var(--shadow-lang-name-light);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--padding-lang);
  font-weight: 600;
  /* letter-spacing: 0.1rem; */
  border-radius: 100%;
  background: var(--bg-lang-name);
  box-shadow: var(--shadow-lang-name);
  aspect-ratio: 1;
}

html[color-scheme='dark'] .lang__name {
  --bg-lang-name-dark: #32363b;
  --bg-lang-name: var(--bg-lang-name-dark);
  --shadow-lang-name-dark: inset 1.44407px 0.722036px 1.44407px rgba(255, 255, 255, 0.05),
    inset -19.0804px -19.0804px 47.7011px rgba(59, 68, 81, 0.5),
    inset 19.0804px 19.0804px 58.4849px rgba(0, 0, 0, 0.55);
  --shadow-lang-name: var(--shadow-lang-name-dark);
}

html[color-scheme='dark'] .lang--wrap {
  --bg-lang-wrap-dark: linear-gradient(318.21deg, #101113 14.05%, #2B2F33 85.29%);
  --bg-primary: var(--bg-lang-wrap-dark);
  box-shadow: none;
}
</style>
