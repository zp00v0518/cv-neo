<template>
  <div class="header-cv">
    <AvatarCv class="header-cv__avatar" :img-src="avatarSrc"> </AvatarCv>
    <div class="header-cv__body">
      <span class="header-cv__body--name">Dmytro Tarabanov </span>

      <h1 class="header-cv__body--position">Javascript Developer (Vue)</h1>
      <div class="header-cv__body__descr">
        <!-- <span>ukranian</span> -->
        <span>Kiev, Ukraine </span>
        <span>
          <a class="download-link" :href="cvPdf" download="Dmytro Tarabanov.pdf"
            >download CV</a
          >
        </span>
      </div>
      <ContactsCv />
    </div>
  </div>
</template>

<script>
import avatarSrc from "../../../assets/7.png";
import cvPdf from "../../../assets/cv.pdf";

import AvatarCv from "../../atoms/AvatarCv";
import ContactsCv from "../../moleculs/ContactsCv";
export default {
  name: "HeaderCv",
  components: { AvatarCv, ContactsCv },
  data() {
    return {
      avatarSrc,
      cvPdf,
    };
  },
};
</script>

<style>
.header-cv {
  display: flex;
  align-items: center;
  padding: var(--padding-double);
}

.header-cv__avatar {
  max-width: 150px;
  margin-right: calc(var(--padding-double) * 2);
}
.header-cv__body {
  display: flex;
  flex-direction: column;
}

.header-cv__body__descr {
  display: flex;
  flex-direction: column;
  line-height: 150%;
  margin-block-end: var(--padding-double);
}

.header-cv__body--name {
  font-size: 1.23rem;
  font-weight: bold;
}

.header-cv__body--position {
  --txt-size: 2.5rem;
  display: flex;
  align-items: center;
  margin-block-start: var(--padding-double);
  margin-block-end: var(--padding-double);
  height: var(--txt-size);
  font-size: var(--txt-size);
  background: linear-gradient(90deg, #11a8fd 0.54%, #005696 145.61%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.download-link {
  color: inherit;
  font-weight: 600;
}

@media (max-width: 700px) {
  .header-cv__body--position {
    --txt-size: 1.6rem;
    margin-block-start: calc(var(--padding-double) / 2);
    margin-block-end: calc(var(--padding-double) / 2);
  }

  .header-cv__body__descr{
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header-cv__avatar{
    max-width: 100px;
    margin-right: calc(var(--padding-double) * 3);
    padding: calc(var(--padding) / 1.5);
  }
}

/* @media (max-width: 550px) {
  .header-cv__body--position {
    height: calc(var(--txt-size) * 2);
    line-height: var(--txt-size);
  }
} */

@media (max-width: 460px) {
  .header-cv {
    flex-direction: column;
    padding-bottom: var(--padding);
  }
}
</style>
