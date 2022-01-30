import { createRouter, createWebHashHistory } from "vue-router";
import WelcomePage from "./pages/WelcomePage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegisterPage from "./pages/RegisterPage.vue";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.vue";
import DashboardPage from "./pages/DashboardPage.vue";
import SettingsPage from "./pages/SettingsPage.vue";
import AuthenticationForm from "./pages/AuthenticationForm.vue";

let route = (name, path, component, auth = false, guestOnly = false) => {
  return {
    name: name,
    path: path,
    component: component,
    meta: {
      requireAuth: auth,
      guestOnly: guestOnly
    }
  };
};

const routes = [
  route('welcome', '/', WelcomePage, false, false),
  route('login', '/login', LoginPage, false, true),
  route('register', '/register', RegisterPage, false, true),
  route('forgot-password', '/forgot-password', ForgotPasswordPage, false, true),
  route('dashboard', '/entreess', DashboardPage, true, false),
  route('settings', '/settings', SettingsPage, true, false),
  route('authentication', "/auth", AuthenticationForm, false, true),
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});