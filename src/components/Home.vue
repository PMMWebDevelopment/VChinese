<template>
  <div class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-size-90'>
      <div class="md-display-3">Welcome to VChinese</div>
      <div class="md-headline">
        <!-- eslint-disable-next-line -->
        <p>Learning Chinese? Ever <i>thought</i> of learning it and didn't know where to start? Ever thought it was just too difficult?</p>
        <!-- eslint-disable-next-line -->
        <p>This may just be the site for you. We'll walk you through the basics and, while you won't be an expert at the end, this beautiful and mysterious language will have given up some of its secrets.</p>
        <!-- eslint-disable-next-line -->
        <p>The grammar is easier than you perhaps thought and even the writing and proununciation will begin to sound a little less daunting. Why not give it a try?</p>
      </div>
      <!-- eslint-disable-next-line -->
      <md-button v-if='!isLoggedIn' to="/About" class="md-raised md-accent">Try it out as a guest</md-button>
      <div class='begin-journey'>Use the links at the top of the page to begin the journey.</div>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'Home',
    data() {
      return {
        isLoggedIn: false,
      }
    },
    created() {
      if (firebase.auth().currentUser) {
        this.isLoggedIn = true;
      }
    }
  }
</script>

<style scoped>

  #welcome {
    text-align: center;
  }

  .md-layout-item {
    width: 90%;
    min-height: 80vh;
  }

  .md-display-3 {
    text-shadow: 1px 1px 1px black;
    color: yellow;
    font-weight: bold;
  }

  .md-headline {
    background-color: rgba(255, 0, 0, 0.50);
    color: yellow;
    text-shadow: 1px 1px 1px black;
  }

  .begin-journey {
    background-color: rgba(255, 0, 0, 0.50);
    color: yellow;
    text-shadow: 1px 1px 1px black;
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
  }

</style>
