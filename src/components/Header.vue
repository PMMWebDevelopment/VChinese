<template>
  <div>
    <md-tabs md-sync-route class='md-accent' md-alignment="left">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-grammar" md-label="Grammar" to="/grammar">
      </md-tab>
      <md-tab id="tab-writing" md-label="Writing" to="/writing"></md-tab>
      <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
       <!-- eslint-disable-next-line -->
      <md-tab id="tab-loginout" :to='$store.getters.currentLoginStatus ? "/logout" : "/signuplogin"' :md-label='$store.getters.currentLoginStatus ? "Log out" : "Sign up / Log in"'></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      loggedInUser() {
        return this.$store.getters.currentLoginStatus;
      },
      loginStatus() {
        return this.$store.getters.currentLoginStatus;
      }
    }
  }
</script>

<style scoped>

  .md-tabs {
    margin-bottom: 10px;
  }

</style>
