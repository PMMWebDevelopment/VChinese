<template>
  <div id='writing' class="md-layout md-alignment-top-center">
    <div class='md-layout-item md-gutter md-size-90'>
      <div class="md-display-3">Writing</div>
      <div class="md-title">
        <!-- eslint-disable-next-line -->
        <p>The lessons for Chinese writing are split into six main degrees of difficulty, the higher the number, the greater the complexity. Click on one of the boxes below to access the individual bite-size sections (although it's a good idea to start at Section 1).</p>
        <div id='hsk-notice'>The six sections are based on the levels set down in the People's Republic of China's language proficiency test, or <i>Hànyǔ Shuǐpíng Kǎoshì</i> (HSK). More information <a href='http://www.chinesetest.cn/' target='_blank'>here</a>.</div>
      </div>
    </div>
    <div class='md-layout-item md-layout md-size-90'>
        <!-- eslint-disable-next-line -->
        <div id='writing1' class='md-layout-item md-gutter writing-section' @click='goToWritingHSKPage(1, 1)'>
          <div class="md-display-2">一</div>
          <div class="md-display-2">1</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='writing2' class='md-layout-item md-gutter writing-section' @click='goToWritingHSKPage(2, 1)'>
          <div class="md-display-2">二</div>
          <div class="md-display-2">2</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='writing3' class='md-layout-item md-gutter writing-section' @click='goToWritingHSKPage(3, 1)'>
          <div class="md-display-2">三</div>
          <div class="md-display-2">3</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='writing4' class='md-layout-item md-gutter writing-section' @click='goToWritingHSKPage(4, 1)'>
          <div class="md-display-2">四</div>
          <div class="md-display-2">4</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='writing5' class='md-layout-item md-gutter writing-section' @click='goToWritingHSKPage(5, 1)'>
          <div class="md-display-2">五</div>
          <div class="md-display-2">5</div>
        </div>
        <!-- eslint-disable-next-line -->
        <div id='writing6' class='md-layout-item md-gutter writing-section' @click='goToWritingHSKPage(6, 1)'>
          <div class="md-display-2">六</div>
          <div class="md-display-2">6</div>
        </div>
    </div>
  </div>
</template>

<script>
  import WritingHSKPage from './WritingLessons/WritingHSKPage';

  export default {
    name: 'Writing',
    components: {
      writingHSKPage: WritingHSKPage
    },
    methods: {
      goToWritingHSKPage(clickedSection, selectedWritingPage) {
        this.$router.push(
          {
            path: '/writinghskpage',
          }
        );
        this.$store.commit('changeWritingLevel', clickedSection);
        this.$store.commit('changeWritingPage', selectedWritingPage);
      }
    }
  }
</script>

<style scoped>

  #writing {
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
    padding: 10px 20px;
  }

  .writing-section {
    height: 180px;
    cursor: pointer;
  }

  .md-display-2 {
    color: yellow;
    font-weight: bold;
    margin-top: 25px;
    text-shadow: 1px 1px 1px black;
  }

  #writing1 {
    background-color: rgba(206, 131, 131, 1);
  }

  #writing2 {
    background-color: rgb(240, 95, 95);
  }

  #writing3 {
    background-color: rgb(224, 63, 63);
  }

  #writing4 {
    background-color: rgb(230, 14, 14);
  }

  #writing5 {
    background-color: rgb(117, 11, 11);
  }

  #writing6 {
    background-color: rgb(48, 2, 2);
  }

</style>
