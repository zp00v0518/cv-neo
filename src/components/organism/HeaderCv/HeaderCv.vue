<template>
    <div class="header-cv">
        <AvatarCv class="header-cv__avatar">
            <img src="../../../assets/face.webp" alt="avatar">
        </AvatarCv>
        <div class="header-cv__body">
            <span class="header-cv__body--name">Dmytro Tarabanov</span>
            <span class="header-cv__body--position">Javascript Developer (Vue)</span>
            <div class="header-cv__body__descr">
                <span class="header-cv__body__descr--item">ukranian</span>
                <span class="header-cv__body__descr--item">40 years old</span>
                <span class="header-cv__body__descr--item">Kiev, Ukraine</span>
            </div>
            <ContactsCv />
        </div>
    </div>
</template>

<script>

import AvatarCv from '../../atoms/AvatarCv'
import ContactsCv from '../../moleculs/ContactsCv'
export default {
    name: 'HeaderCv',
    components: { AvatarCv, ContactsCv }
}
</script>

<style></style>