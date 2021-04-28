import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Navbar from "./components/Navbar";
import DarkModeButton from "./components/DarkModeButton";

const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("dark-toggler", DarkModeButton);

app.mount("#app");
