<template>
  <div id="app">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  background-image: url('./assets/images/birdsneststadium.jpg');
  background-position: center center fixed;
  background-size: cover;
}
</style>
