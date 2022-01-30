<template>
  <div>
    <h1>Hello, jason</h1>
    <p>
      This is your dashboard, you can change it under
      <code>/src/pages/DashboardPage.vue</code>
    </p>

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      console.log("Login out ...");
      localStorage.removeItem("api_key");
      console.log("Logged out OK");
      this.$router.push("login");
    },
  },
};
</script>

<style></style>
