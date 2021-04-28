import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Navbar from "./components/Navbar";
import DarkModeButton from "./components/DarkModeButton";
import Form from "./components/Form";

const app = createApp(App);

app.component("nav-bar", Navbar);
app.component("dark-toggler", DarkModeButton);
app.component("my-form", Form);

app.mount("#app");
