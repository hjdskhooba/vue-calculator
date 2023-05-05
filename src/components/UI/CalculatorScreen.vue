<template>
  <input
    type="text"
    :class="$style['calc-input']"
    aria-label="idk"
    :value="val"
    disabled
    @input="typing"
  />
</template>
<script>
export default {
  name: "calc-screen",
};
</script>
<script setup>
const props = defineProps({ val: [String, Number] });
const emit = defineEmits(["update:val"]);
const typing = (e) => {
  emit("update:val", e.target.value);
};
</script>
<style lang="scss" module>
.calc-input {
  @apply border active:border focus-visible:outline-dashed border-2 border-gray-400;
}
</style>
