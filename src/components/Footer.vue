<template>
  <div v-if='isLoggedIn' class='footer'>
    <h3>Logged in as {{ this.currentUser }}. Website designed by P M Meddings using <a href='https://vuejs.org/' target='_blank'>VueJS</a> and the <a href='https://chanind.github.io/hanzi-writer/docs.html' target='_blank'>Hanzi Writer</a> API. This site is indented as a free educational tool.</h3>
  </div>
  <div v-else class='footer'>
    <h3>Website designed by P M Meddings using <a href='https://vuejs.org/' target='_blank'>VueJS</a> and the <a href='https://chanind.github.io/hanzi-writer/docs.html' target='_blank'>Hanzi Writer</a> API. This site is indented as a free educational tool.</h3>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Footer',
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
