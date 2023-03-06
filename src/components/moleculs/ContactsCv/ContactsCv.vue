<template>
  <BadgeBtn>
    <template v-slot:icon>
      <Icon name="gmail"></Icon>
    </template>
  </BadgeBtn>
</template>

<script>
import BadgeBtn from '../../atoms/BadgeBtn'

export default {
  name: 'ContactsCV',
  components: {
    BadgeBtn
  }
}
</script>

<style></style>