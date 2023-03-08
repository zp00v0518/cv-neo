<template>
  <label class="switch">
    <div class="switch__container">
      <input class="switch__input" type="checkbox" name="check" value="check" />
      <div class="switch__toggle"></div>
    </div>
  </label>
</template>

<script>
export default {
  name: 'SwitchCv'
}
</script>

<style>
.switch {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #394956;
}
.switch__container {
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -8px -4px 8px 0 #ffffff, 8px 4px 12px 0 #d1d9e6,
    4px 4px 4px 0 #d1d9e6 inset, -4px -4px 4px 0 #ffffff inset;
}
.switch__input {
  display: none;
}
.switch__toggle {
  height: 100%;
  width: 200%;
  background: #ecf0f3;
  border-radius: 20px;
  transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  transform: translate3d(-75%, 0, 0);
  box-shadow: -8px -4px 8px 0 #ffffff, 8px 4px 12px 0 #d1d9e6;
}
.switch__input:checked ~ .switch__toggle {
  transform: translate3d(25%, 0, 0);
  background-color: #b6eb7a;
}
</style>
