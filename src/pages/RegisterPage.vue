<template>
  <div class="card card-block">
    <div class="card-header">
      <h5>Créer un compte</h5>
    </div>
    <div class="card-body">
      <div class="form-group mb-2">
        <label for="name">Votre nom</label>
        <input
          type="text"
          name="name"
          v-model="form.name"
          class="form-control form-control-ls"
        />
      </div>
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
      <div class="form-group mb-2">
        <label for="password-confirmation">Confirmation mot de passe</label>
        <input
          type="password"
          name="password-confirmation"
          v-model="form.passwordConfirmation"
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
  props: {
    url: {
      required: false,
      default: "https://reqres.in/api/register",
    },
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
      },
    };
  },

  methods: {
    processRegister() {
      axios
        .post(this.url, this.form)
        .then(this.registerSuccess)
        .catch(this.registerError);
    },
    registerSuccess(data) {
      console.log(data);
    },
    registerError(error) {
      console.log(error);
    },
  },
};
</script>

<style></style>
