<template>
  <section class="card">
    <a class="card__item" :href="badge.href" target="_blank">
      <AvatarCv :img-src="icon"></AvatarCv>
    </a>
    <div class="card__item">
      <span class="card__item--name">{{ companyName }}</span>
      <span class="card__item--position">{{ position.toUpperCase() }}</span>
      <span class="card__item--period">{{ period }}</span>
      <BadgeBtn
        class="card__item--period"
        :href="badge.href"
        :title="badge.title"
      ></BadgeBtn>
    </div>
    <p class="card__item card__item--descr">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel tenetur
      voluptates hic maiores mollitia animi incidunt ducimus saepe doloribus
      quia, molestiae nisi culpa! Nam iusto dolores illo omnis, veritatis illum!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quibusdam itaque assumenda placeat rerum eaque autem nemo doloribus, maxime porro laudantium corporis aspernatur veniam nostrum quos blanditiis harum debitis quas?
    </p>
  </section>
</template>

<script>
import AvatarCv from '../../atoms/AvatarCv'
import BadgeBtn from '../../atoms/BadgeBtn'

export default {
  name: 'CardCv',
  components: {AvatarCv, BadgeBtn},
  props: {
    icon: {
      type: String,
      default: ''
    },
    companyName: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    period: {
      type: String,
      default: ''
    },
    badge: {
      type: Object,
      default: () => ({href: '', title: ''})
    }
  }
}
</script>

<style>
.card {
  display: grid;
  grid-template-columns: 130px minmax(25%, 35%) minmax(35%, 60%);
  column-gap: var(--padding-double);
  padding: var(--padding-double);
  color: var(--txt-primary-color-light);
  background: var(--bg-primary);
  box-shadow: inset -9.15368px -9.15368px 18.3074px rgba(255, 255, 255, 0.7),
    inset 9.15368px 9.15368px 18.3074px rgba(189, 200, 223, 0.7);
  border-radius: 25px;
}

.card .avatar-cv {
  width: 85px;
}
.card__item:first-child {
  display: flex;
  align-items: center;
}

.card__item:nth-child(2) {
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  font-weight: 700;
}
.card__item:nth-child(2) > span {
  margin-block-end: calc(var(--padding) + var(--padding-step));
}
.card__item--name,
.card__item--period {
  font-weight: 500;
}

.card__item--descr {
  line-height: 1.4rem;
  margin-block: 0;
  display: flex;
  align-items: center;
}

@media (max-width: 1020px) {
  .card {
    grid-template-columns: 130px minmax(300px, max-content);
  }
  .card__item--descr {
    margin-block-start: var(--padding);
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
</style>
