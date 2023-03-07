<template>
    <div class="software-list">
      <h3 class="software-list__title">Software</h3>
      <div>
        <SkillCv
          v-for="(software, index) in list"
          :key="index"
          :name="software.name"
          :lvl="software.lvl"
          type="secondary"
        ></SkillCv>
      </div>
    </div>
  </template>
  
  <script>
  import SkillCv from '../../atoms/SkillCv'
  
  export default {
    name: 'SoftwareList',
    components: {SkillCv},
    data() {
      return {
        list: [
          {name: 'Vue', lvl: 5},
          {name: 'Javascript', lvl: 4},
          {name: 'NodeJs', lvl: 3},
          {name: 'HTML', lvl: 2}
        ]
      }
    }
  }
  </script>
  
  <style>
  .software-list__title {
    color: inherit;
    text-transform: uppercase;
    color: #005696;
  }
  .software-list .skill-cv {
    margin-block-end: var(--padding-double);
  }
  </style>
  