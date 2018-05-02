<template>
  <div id='grammar' class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-gutter md-size-90'>
      <div class="md-display-3">Grammar</div>
      <div class="md-title">
        <!-- eslint-disable-next-line -->
        <p>Chinese grammar is split into three main degrees of difficulty, the higher the number, the greater the complexity. Click on one of the boxes below to access the individual bite-size grammar lessons (although it's a good idea to start at Section 1).</p>
        <div id='hsk-notice'>The six sections are based <i>roughly</i> on the levels set down in the People's Republic of China's language proficiency test, or <i>Hànyǔ Shuǐpíng Kǎoshì</i> (HSK). More information <a href='http://www.chinesetest.cn/' target='_blank'>here</a>.</div>
      </div>
    </div>
    <div class='md-layout-item md-layout md-size-90'>
        <!-- eslint-disable-next-line -->
        <div id='grammar1' class='md-layout-item md-gutter grammar-section' @click='goToGrammarHSKPage(1, 1)'>
          <div class="md-display-2">一</div>
          <div class="md-display-2">1</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='grammar2' class='md-layout-item md-gutter grammar-section' @click='goToGrammarHSKPage(2, 1)'>
          <div class="md-display-2">二</div>
          <div class="md-display-2">2</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='grammar3' class='md-layout-item md-gutter grammar-section' @click='goToGrammarHSKPage(3, 1)'>
          <div class="md-display-2">三</div>
          <div class="md-display-2">3</div>
        </div>
    </div>
  </div>
</template>

<script>
  import GrammarHSKPage from './GrammarLessons/GrammarHSKPage';

  export default {
    name: 'Grammar',
    components: {
      grammarHSKPage: GrammarHSKPage
    },
    methods: {
      goToGrammarHSKPage(clickedSection, selectedGrammarPage) {
        this.$router.push(
          {
            path: '/grammarhskpage',
          }
        );
        this.$store.commit('changeGrammarLevel', clickedSection);
        this.$store.commit('changeGrammarPage', selectedGrammarPage);
      }
    }
  }
</script>

<style scoped>

  #grammar {
    min-height: 80vh;
  }

  .md-layout-item {
    width: 90%;
    margin: 5px auto;
  }

  .md-display-3 {
    text-shadow: 1px 1px 1px black;
    color: yellow;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .md-title {
    background-color: rgba(255, 0, 0, 0.50);
    color: yellow;
    text-shadow: 1px 1px 1px black;
    text-align: left;
    padding: 5px 20px;
  }

  .grammar-section {
    height: 180px;
    cursor: pointer;
  }

  .md-display-2 {
    color: yellow;
    font-weight: bold;
    margin-top: 25px;
    text-shadow: 1px 1px 1px black;
  }

  #grammar1 {
    background-color: rgba(206, 131, 131, 1);
  }

  #grammar2 {
    background-color: rgb(227, 38, 39);
  }

  #grammar3 {
    background-color: rgb(48, 2, 2);
  }

</style>
