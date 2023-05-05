<template>
  <div @click="press" type="button" :btn="btn" ref="btn">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "calc-button",
};
</script>
<script setup>
import { ref } from "vue";

const props = defineProps({
  btn: [String, Number],
});
const emit = defineEmits(["update:btn"]);
const btn = ref("");
const press = () => {
  emit("update:btn", btn.value.innerText);
};
</script>
<style lang="scss" module>
@import "../../scss/calc.scss";
</style>
