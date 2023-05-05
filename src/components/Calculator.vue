<template>
  <div :class="$style.calculator">
    <calc-screen v-model:val="value" />
    <div :class="$style.buttons">
      <div :class="$style.operators">
        <calc-button
          v-for="operator in operators"
          :btn="btn"
          @update:btn="typing"
          >{{ operator }}</calc-button
        >
      </div>
      <h1 class="result">{{ title }}</h1>
      <div :class="$style.leftPanel">
        <div :class="$style.numbers">
          <calc-button :btn="btn" @update:btn="typing" v-for="num in [1, 2, 3]">
            {{ num }}
          </calc-button>
        </div>
        <div :class="$style.numbers">
          <calc-button :btn="btn" @update:btn="typing" v-for="num in [4, 5, 6]">
            {{ num }}
          </calc-button>
        </div>
        <div :class="$style.numbers">
          <calc-button :btn="btn" @update:btn="typing" v-for="num in [7, 8, 9]">
            {{ num }}
          </calc-button>
        </div>
        <div :class="$style.numbers">
          <calc-button :btn="btn" @update:btn="typing" v-for="num in [0, '.']">
            {{ num }}
          </calc-button>
          <div @click="clear" :id="$style.clear">C</div>
        </div>
      </div>
      <div :class="$style.equal" :id="$style.result" @click="calculate">=</div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const value = ref("");
const operators = ref(["+", "-", "×", "÷"]);
const btn = ref("");
const title = ref("Start typing");
let num1 = ref("");
let num2 = ref("");
const typing = (e) => {
  if (/^[0-9]+$/.test(e)) {
    value.value += e;
  } else if (/^[0-9]+$/.test(value.value) && value.value.length > 0) {
    value.value += e;
  }
  // calculate();
};

const calculate = () => {
  const znaki = value.value.match(/[^0-9]+/gi);
  num1.value = znaki !== null ? value.value.split(znaki[0])[0] : value.value;
  num2.value = znaki !== null ? value.value.split(znaki[0])[1] : "";
  switch (znaki !== null ? znaki[0] : [""][0]) {
    case "+":
      title.value = +num1.value + +num2.value;
      break;
    case "-":
      title.value = +num1.value - +num2.value;
      break;
    case "×":
      title.value = +num1.value * +num2.value;
      break;
    case "÷":
      title.value = +num1.value / +num2.value;
      break;
    default:
      return (title.value = "Start typing");
  }
};
// watch(()=>value.value, (val)=>console.log(val));
const clear = () => {
  value.value = value.value.replace(/.$/, "");
};
</script>
<style lang="scss" module>
@import "../scss/calc.scss";
</style>

<!-- Калькулятор готов, осталось просто разделить по компонентам, и сделать декомпозицию. -->