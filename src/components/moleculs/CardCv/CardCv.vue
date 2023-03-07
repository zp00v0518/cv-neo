<template>
  <section>
    <AvatarCv :img-src="icon"></AvatarCv>
  </section>
</template>

<script>
import AvatarCv from '../../atoms/AvatarCv'

export default {
  name: 'CardCv',
  components: {AvatarCv},
  props: {
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
