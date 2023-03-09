<template>
  <section class="card">
    <a
      v-if="badge"
      class="card__item card__item__icon"
      :href="badge.href"
      target="_blank"
    >
      <AvatarCv :img-src="icon"></AvatarCv>
    </a>
    <div v-else class="card__item card__item__icon">
      <AvatarCv :img-src="icon"></AvatarCv>
    </div>
    <div class="card__item card__item__body">
      <span class="card__item--name">{{ companyName }}</span>
      <span class="card__item--position">{{ position.toUpperCase() }}</span>
      <span class="card__item--period">{{ period }}</span>
      <BadgeBtn
        v-if="badge"
        class="card__item--period"
        :href="badge.href"
        :title="badge.title"
      ></BadgeBtn>
    </div>
    <p
      class="card__item card__item--descr"
      v-if="html"
      v-html="description"
    ></p>
    <p class="card__item card__item--descr" v-else>
      {{ description }}
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
    description: {
      type: String,
      default: ''
    },
    html: {
      type: Boolean,
      default: false
    },
    badge: {
      type: Object,
      default: undefined
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
  font-size: 1.2rem;
  color: var(--txt-primary-color);
  background: var(--bg-primary);
  box-shadow: inset var(--shadow-base-part1), inset var(--shadow-base-part2),
    inset var(--shadow-base-part3);
  border-radius: 25px;
}

.card .avatar-cv {
  width: 85px;
}

.card__item__icon {
  display: flex;
  align-items: center;
}

.card__item__body {
  display: flex;
  flex-direction: column;
  font-weight: 700;
}

.card__item__body > span {
  margin-block-end: calc(var(--padding) + var(--padding-step));
}

.card__item--name,
.card__item--period {
  font-weight: 500;
}

.card__item--descr {
  line-height: 2rem;
  margin-block: 0;
  display: flex;
  align-items: center;
}

@media (max-width: 1220px) {
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

@media (max-width: 550px) {
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card__item__body {
    align-self: flex-start;
    margin-block-end: var(--padding-double);
  }

  .card__item__icon {
    margin-block-end: var(--padding-double);
  }
}
</style>
