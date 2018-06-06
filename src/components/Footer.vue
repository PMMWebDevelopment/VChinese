<template>
  <div v-if='$store.state.loginStatus' class='footer'>
    <h3>Logged in as {{ $store.state.loggedInUser }}. Website designed by P M Meddings using <a href='https://vuejs.org/' target='_blank'>VueJS</a> and the <a href='https://chanind.github.io/hanzi-writer/docs.html' target='_blank'>Hanzi Writer</a> API. This site is indented as a free educational tool.</h3>
  </div>
  <div v-else class='footer'>
    <h3>Website designed by P M Meddings using <a href='https://vuejs.org/' target='_blank'>VueJS</a> and the <a href='https://chanind.github.io/hanzi-writer/docs.html' target='_blank'>Hanzi Writer</a> API. This site is indented as a free educational tool.</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Footer',
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

<style>

  .footer {
    background-color: rgba(255, 0, 0, 0.50);
    margin-top: 5px;
  }

  h3 {
    color: yellow;
    text-shadow: 1px 1px 1px black;
  }

</style>
