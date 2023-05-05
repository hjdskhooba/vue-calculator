import components from "./components/UI/index.js";
import { createApp } from "vue";
import "./assets/tailwind.css";
import App from "./App.vue";

const app = createApp(App);
components.forEach((component) => {
  app.component(component.name, component);
});
app.mount("#app");
