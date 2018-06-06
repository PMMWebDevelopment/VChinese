<template>
  <div class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-size-90'>
      <div class="md-headline">
        <h3>You have now logged out.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';

export default {
  name: 'Logout',
  computed: {
    ...mapGetters(
      [
        'currentUser',
        'currentLoginStatus',
        'currentGrammarBookmark',
        'currentUsersBookmarkID'
      ]
    ),
    loggedInUser() {
      return this.$store.state.loggedInUser;
    },
    loginStatus() {
        return this.$store.state.loginStatus;
    }
  },
  created() {
    this.logout();
  },
  methods: {
    logout() {
      firebase.auth().signOut().then(() => {
        this.$store.commit('changeUserName', '');
        this.$store.commit('changeLoginStatus', false);
        this.$store.commit('setBookmarkedGrammarPoint', null);
        this.$store.commit('changeUsersBookmarkID', '');
      });
    }
  }
}

</script>

<style scoped>

  .md-layout-item {
    width: 90%;
    min-height: 80vh;
  }

  .md-headline {
    background-color: rgba(255, 0, 0, 0.50);
    color: yellow;
    text-shadow: 1px 1px 1px black;
  }
</style>