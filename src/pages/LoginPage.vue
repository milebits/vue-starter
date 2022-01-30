<template>
  <div class="card card-block">
    <div class="card-header">
      <h5>Connexion</h5>
    </div>
    <div class="card-body">
      <div class="form-group mb-2">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          v-model="form.email"
          class="form-control form-control-ls"
        />
      </div>
      <div class="form-group mb-2">
        <label for="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          v-model="form.password"
          class="form-control form-control-ls"
        />
      </div>

      <button class="btn btn-primary btn-block mt-2 mb-2" @login="processLogin">
        Connexion
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    processLogin() {
      axios
        .post("https://reqres.in/api/login", this.form)
        .then((response) => {
          let token = response.data.token;
          localStorage.setItem("api_key", token);
          this.$router.push("dashboard");
        })
        .catch((error) => {
          console.log("Login error", error);
        });
    },
  },
};
</script>
