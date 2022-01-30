<template>
  <router-view></router-view>
</template>

<script>
export default {
  computed: {
    logged: () => {
      return localStorage.getItem("api_key") != null;
    },
  },
};
</script>
