<template>
  <div>
    <div id='character-page-container'>
      <div id='character-page-headline'>
         <!-- eslint-disable-next-line -->
        {{ $store.state.chosenCharacter[0] }} <i>{{ $store.state.chosenCharacter[1] }}</i> - {{ $store.state.chosenCharacter[2] }}
      </div>
      <div id='character-displays' class='md-layout md-alignment-top-center'>
        <div id='character-stroke-order' class='md-layout-item md-alignment-top-center'>
          <h3>How to write this character: -</h3>
          <app-loader v-if='loading'></app-loader>
          <div v-else id="character-target-div1"></div>
        </div>
        <div id='character-quiz' class='md-layout-item md-alignment-top-center'>
          <h3>Now you have a go: -</h3>
          <app-loader v-if='loading'></app-loader>
          <div v-else id='character-target-div2'></div>
        </div>
      </div>
    </div>
    <!-- eslint-disable-next-line -->
    <md-button class="md-raised md-accent" to='/writinghskpage'>Go back to character list</md-button>
  </div>
</template>

<script>
  import HanziWriter from 'hanzi-writer';
  import Loader from '../Loader';

  export default {
    name: 'CharacterPage',
    data() {
      return {
        loading: false,
        characterSize: window.innerWidth > 768 ? (window.innerWidth * 0.20) : (window.innerWidth * 0.35)
      }
    },
    computed: {
      character() {
        return this.$store.state.chosenCharacter;
      }
    },
    components: {
      appLoader: Loader
    },
    methods: {
      strokeOrder(hanzi) {
        const demo = new HanziWriter('character-target-div1', hanzi, {
        width: this.characterSize,
        height: this.characterSize,
        padding: 0,
        outlineColor: '#ec3135',
        strokeColor: '#ffff00',
        delayBetweenLoops: 3000
        });
        demo.loopCharacterAnimation();
      },
      quiz(hanzi) {
        const quiz = new HanziWriter('character-target-div2', hanzi, {
        width: this.characterSize,
        height: this.characterSize,
        padding: 0,
        outlineColor: '#000000',
        drawingColor: '#ffff00',
        strokeColor: '#ffff00',
        });
        quiz.quiz();
      }
    },
    mounted() {
      this.loading = true;
      this.strokeOrder(this.$store.state.chosenCharacter[0]);
      this.quiz(this.$store.state.chosenCharacter[0]);
      this.loading = false;
    }
  }
</script>

<style>

#character-page-container {
  background-color: rgba(255, 0, 0, .75);
  height: 60vh;
  color: yellow;
  text-shadow: 1px 1px 1px black;
  font-weight: bold;
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

#character-page-headline {
  padding: 10px;
  font-size: 24px;
  width: 100%;
}

#character-displays {
  width: 90%;
  padding: 0;
  margin: 0 auto;
  text-align: center;
}

#character-stroke-order,
#character-quiz {
  margin: 0 auto;
  padding: 0;
  height: 450px;
}

#character-target-div1,
#character-target-div2 {
  margin: 0 auto;
  padding-left: 125px;
  height: 90%;
}

@media (max-width: 768px) {
  #character-target-div1,
  #character-target-div2 {
    padding-left: 0;
  }
}
</style>
