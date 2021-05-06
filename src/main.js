import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Navbar from "./components/Navbar";
import DarkModeButton from "./components/DarkModeButton";
import Parent from "./components/Parent";

const app = createApp(App);

// registering component
// ada dua tipe komponen, yakni global dan local
// di bawah adalah contoh penggunaan component global, supaya bisa diakses di seluruh component
app.component("nav-bar", Navbar);
app.component("dark-toggler", DarkModeButton);
app.component("parent", Parent);

app.mount("#app");
