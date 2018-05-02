<template>
   <div class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-size-90'>
      <span class="md-display-3">About this site</span>
      <div class="md-title">
        <!-- eslint-disable-next-line -->
        <p>VChinese is split into two main sections: </p>
        <h4>Grammar</h4>
        <!-- eslint-disable-next-line -->
        <p>This is all about the structure of the Chinese language. The further you go, the more complex the lessons become, but you may find it less intimidating than you thought.</p>
        <h4>Writing</h4>
        <!-- eslint-disable-next-line -->
        <p>This is all about Chinese characters, the building blocks of the language. Again, the further you go, the more complex the lessons become, but you will have a chance to recap on how to write and pronounce the different characters.</p>
        <!-- eslint-disable-next-line -->
        <h5>You will also have an opportunity to sign up for a free account to save and track your progress.</h5>
        <h3>Use the menu bar at the top of the page to begin the journey!</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>

  .md-layout-item {
    width: 90%;
    min-height: 75vh;
  }

  .md-display-3 {
    text-shadow: 1px 1px 1px black;
    color: yellow;
    font-weight: bold;
  }

  .md-title {
    background-color: rgba(255, 0, 0, 0.50);
    color: yellow;
    text-shadow: 1px 1px 1px black;
    text-align: left;
    padding: 10px 20px;
  }

</style>
