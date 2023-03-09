<template>
  <section class="about">
    <h3 class="about__title">About Me</h3>
    <div class="about--wrap">
      <article class="about__content">
        <p class="about__content__item">
          I implement designers' fantasies, taking into account the wishes of
          the backend
        </p>

        <p class="about__content__item">
          At my last job, I developed a component library in Vue for a document
          management platform.
        </p>
        <div class="about__content__item">
          Even earlier, when developing an ERP system:
        <ul>
          <li>developed the architecture of the client part</li>
          <li>implemented dynamic constructionand display of pages</li>
          <li>definitely - implemented Figma designs in HTML, CSS and JS </li>
          <li>worked with graphics (Canvas)</li>
          <li>and many other things that were needed to create an ERP system</li>
        </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutCv'
}
</script>

<style>
.about {
  color: var(--txt-secondary-color);
  --border-radius: 25px;
}

.about__title {
  color: inherit;
  text-transform: uppercase;
}

.about--wrap {
  display: block;
  color: inherit;
  padding-top: 3px;
  background: var(--bg-badge-btn);
  border-radius: var(--border-radius);
  background-blend-mode: overlay;
}

.about__content {
  column-gap: var(--padding);
  padding: var(--padding) var(--padding-double);
  background: var(--bg-badge-btn--wrap);
  border-radius: var(--border-radius);
}

.about__content__item ul  {
padding-left: var(--padding-double);

}
</style>
