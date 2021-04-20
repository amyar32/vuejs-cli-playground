import { createApp } from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";
import Hisab from "./components/Hisab";
import JadwalList from "./components/JadwalList";
// import TodoList from "./components/TodoList";
import DarkModeButton from "./components/DarkModeButton";

const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("hisab", Hisab);
app.component("jadwal-list", JadwalList);
// app.component("todo-list", TodoList);
app.component("dark-toggler", DarkModeButton);

app.mount("#app");
