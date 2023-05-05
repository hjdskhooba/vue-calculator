<template>
  <img alt="Vue logo" :class="$style.logo" src="./assets/logo.png" />
  <Calculator />
</template>
<script setup>
import Calculator from "./components/Calculator.vue";
</script>
<style module lang="scss">
@import "./scss/app.module.scss";
.logo {
  @apply mx-auto;
}
</style>
