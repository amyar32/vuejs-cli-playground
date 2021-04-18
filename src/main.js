import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import TodoList from "./components/TodoList";

const app = createApp(App);

app.component("todo-list", TodoList);

app.mount("#app");
