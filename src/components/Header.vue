<template>
  <div>
    <md-tabs md-sync-route class='md-accent' md-alignment="left">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-grammar" md-label="Grammar" to="/grammar">
      </md-tab>
      <md-tab id="tab-writing" md-label="Writing" to="/writing"></md-tab>
      <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
       <!-- eslint-disable-next-line -->
      <md-tab v-if='$store.state.loginStatus' id="tab-logout" to='/logout' md-label='Log out'></md-tab>
       <!-- eslint-disable-next-line -->
      <md-tab v-if='$store.state.loginStatus === false' id="tab-signuplogin" md-label="Sign up / Log in" to="/signuplogin"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Header',
    computed: {
      ...mapGetters(
        [
          'currentUser',
          'currentLoginStatus'
        ]
      ),
      loggedInUser() {
        return this.$store.state.loggedInUser;
      },
      loginStatus() {
        return this.$store.state.loginStatus;
      }
    }
  }
</script>

<style scoped>

  .md-tabs {
    margin-bottom: 10px;
  }

</style>
