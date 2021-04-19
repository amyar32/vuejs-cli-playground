import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import Hisab from "./components/Hisab";
// import TodoList from "./components/TodoList";
import DarkModeButton from "./components/DarkModeButton";

const app = createApp(App);

app.component("hisab", Hisab);
// app.component("todo-list", TodoList);
app.component("dark-toggler", DarkModeButton);

app.mount("#app");
