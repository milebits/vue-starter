<template>
  <div class="container-fluid h-100 w-100">
    <div class="row h-100">
      <div class="col my-auto">
        <LoginPage />
      </div>
      <div class="col my-auto">
        <RegisterPage />
      </div>
    </div>
  </div>
</template>

<script>
import LoginPage from "./LoginPage.vue";
import RegisterPage from "./RegisterPage.vue";

export default {
  components: { LoginPage, RegisterPage },
};
</script>

<style>
.h-100 {
  height: 100vh;
}

.w-100 {
  width: 100vw;
}

.my-auto {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
