<template>
  <div class="contacts">
    <BadgeBtn
      v-for="(item, index) in contactList"
      :key="index"
      :title="item.title"
      :href="item.href"
    >
      <template v-slot:icon>
        <Icon :name="item.icon"></Icon>
      </template>
    </BadgeBtn>
  </div>
</template>

<script>
import BadgeBtn from '../../atoms/BadgeBtn'
import Icon from '../../atoms/Icon'

export default {
  name: 'ContactsCV',
  components: {
    BadgeBtn,
    Icon
  },
  data() {
    return {
      contactList: [
        {icon: 'gmail', href: 'mailto:zp00v0518@gmail.com', title: 'gmail.com'},
        {icon: 'phone', href: 'tel:+380965253550', title: '0965253550'},
        {icon: 'skype', href: 'skype:zp00v0518', title: 'zp00v0518'},
        {
          icon: 'telegram',
          href: 'https://t.me/pol_pintero',
          title: '@pol_pintero'
        }
      ]
    }
  }
}
</script>

<style>
.contacts {
  display: flex;
  gap: var(--padding);
  flex-wrap: wrap;
}
.contacts .badge-btn__icon {
  color: #2d9cdb;
}

@media (max-width: 560px) {
  .contacts .badge-btn--wrap > span {
    display: none;
  }
}
</style>
