<template>
    <div class="avatar-cv">
        <img :src="imgSrc" alt="avatar">
    </div>
</template>

<script>
export default {
    name: 'AvatarCv',
    props: {
        imgSrc: {
            type: String,
            default: ''
        }
    }

}
</script>

<style>
.avatar-cv {
    overflow: hidden;
    aspect-ratio: 1;
    padding: var(--padding);
    border-radius: 100%;
    background: linear-gradient(153.43deg, #D9DAE3 17.71%, #F4F5F8 83.33%);
    box-shadow: -9.15368px -9.15368px 18.3074px rgba(255, 255, 255, 0.7), 9.15368px 9.15368px 18.3074px rgba(189, 200, 223, 0.7);
}

.avatar-cv img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
}
</style>