<template>
  <section class="about">
    <h3 class="about__title">About Me</h3>
    <div class="about--wrap">
      <article class="about__content">
        <p class="about__content__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam
          ratione libero nobis dignissimos molestias minus eveniet a
          exercitationem doloribus iusto dolores tempore, mollitia quidem sequi
          amet accusamus nostrum dolorum.
        </p>
        <p class="about__content__item">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nam
          ratione libero nobis dignissimos molestias minus eveniet a
          exercitationem doloribus iusto dolores tempore, mollitia quidem sequi
          amet accusamus nostrum dolorum.
        </p>
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
}
.about--wrap {
  display: block;
  color: inherit;
  padding-top: 3px;
  background: white;
  border-radius: var(--border-radius);
  background-blend-mode: overlay;
}
.about__content {
  column-gap: var(--padding);
  padding: var(--padding) var(--padding-double);
  background-color: rgba(233, 234, 240, 0.5);
  border-radius: var(--border-radius);
}
</style>
