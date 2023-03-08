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
    min-width: 100px;
    aspect-ratio: 1;
    padding: var(--padding);
    border-radius: 100%;
    background: var(--bg-linear);
    box-shadow: var(--shadow-base-part1), var(--shadow-base-part2), var(--shadow-base-part3);
    overflow: hidden;
}

.avatar-cv img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 100%;
    /* background: #3C4650; */
}

@media (max-width: 460px) {
.avatar-cv {
    margin-block-end: var(--padding-double);
}

}
</style>