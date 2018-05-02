<template>
  <div>
    <md-tabs md-sync-route class='md-accent' md-alignment="left">
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-grammar" md-label="Grammar" to="/grammar">
      </md-tab>
      <md-tab id="tab-writing" md-label="Writing" to="/writing"></md-tab>
      <md-tab id="tab-about" md-label="About" to="/about"></md-tab>
       <!-- eslint-disable-next-line -->
      <md-tab v-if='!isLoggedIn' id="tab-signuplogin" md-label="Sign up / Log in" to="/signuplogin"></md-tab>
       <!-- eslint-disable-next-line -->
      <md-tab v-if='isLoggedIn' @click='logout' id="tab-logout" md-label='Log out'></md-tab>
    </md-tabs>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'Header',
    data() {
      return {
        isLoggedIn: false,
        currentUser: false
      }
    },
    created() {
      if (firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = firebase.auth().currentUser.email
      }
    },
    methods: {
      logout() {
        firebase.auth().signOut().then(() => {
          this.$router.go({ path: this.$router.path });
        });
      }
    }
  }
</script>

<style scoped>

  .md-tabs {
    margin-bottom: 10px;
  }

</style>
